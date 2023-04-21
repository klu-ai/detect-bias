// Listen for a message from the background script
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'extractArticle') {
    // Extract the article content using the Readability library
    const article = new Readability(document.cloneNode(true)).parse();

    // Send the extracted content back to the background script
    sendResponse({ content: article.textContent });
  }
});
