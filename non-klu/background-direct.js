const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

async function sendToGPT4(content) {
  const prompt = await fs.readFileSync("prompt.txt", "utf-8").trim();
  const completion = await openai.createChatCompletion({
    model: "gpt-4",
    messages: [
      { role: "system", content: prompt },
      { role: "user", content: content },
    ],
  });
  return completion.data.choices[0].message;
}

async function extractScoreAndExplanation(analysis) {
  const scoreRegex = /score:\s+(\d+(\.\d+)?)/i;
  const explanationRegex = /explanation:\s+([\s\S]+)/i;

  const scoreMatch = analysis.match(scoreRegex);
  const explanationMatch = analysis.match(explanationRegex);

  const score = scoreMatch ? parseFloat(scoreMatch[1]) : null;
  const explanation = explanationMatch ? explanationMatch[1].trim() : '';

  return { score, explanation };
}

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === 'complete') {
    chrome.tabs.sendMessage(tabId, {action: 'extractArticle'}, async (response) => {
      const analysis = await sendToGPT4(response.content);
      const { score, explanation } = await extractScoreAndExplanation(analysis);
      console.log(score, explanation);
    });
  }
});
