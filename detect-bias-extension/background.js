// KLU API function
async function sendToKluAPI(content) {
  const response = await fetch('https://engine.klu.ai/api/agent/action', {
    method: 'POST',
    headers: {
      'Authorization': 'Bearer qETMe1ALhYKopX5lGNzACGapKiNThtTqtj7BJxflQkg=',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      prompt: content,
      agent: 'bb221aa6-9357-4927-afa1-6cdd1ea97c6d'
    })
  });

  const data = await response.json();
  const msg = JSON.parse(data.msg);

  return {
    score: msg.score,
    explanation: msg.explanation
  };
}

chrome.tabs.onUpdated.addListener(async (tabId, changeInfo, tab) => {
  if (changeInfo.status === 'complete') {
    chrome.tabs.sendMessage(tabId, { action: 'extractArticle' }, async (response) => {
      try {
        const data = await sendToKluAPI(response.content);
        const biasScore = data.score;
        const explanation = data.explanation;
        chrome.browserAction.setIcon({ path: `icons/${biasScore}.png`, tabId: tabId });
        chrome.storage.local.set({ [tabId]: explanation });
      } catch (error) {
        console.error('Error sending content to KLU API:', error);
      }
    });
  }
});