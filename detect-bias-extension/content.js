// Listen for a message from the background script
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'extractArticle') {
    // Extract the article content using the Readability library
    const article = new Readability(document.cloneNode(true)).parse();

    // Truncate the content if it's over 12,000 characters (3000 tokens)
    const truncatedContent = article.textContent.slice(0, 9300);

    // Send the extracted content back to the background script
    sendResponse({ content: truncatedContent });
  }
});
