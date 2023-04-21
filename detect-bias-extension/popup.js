document.addEventListener('DOMContentLoaded', () => {
  // Get the active tab
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const tab = tabs[0];

    // Get the analysis for the active tab
    chrome.storage.local.get(tab.id.toString(), (result) => {
      const analysisContainer = document.getElementById('explanation');

      if (result.hasOwnProperty(tab.id)) {
        const explanation = result[tab.id];
        analysisContainer.innerText = explanation;
      } else {
        analysisContainer.innerText = 'No analysis available for this page.';
      }
    });
  });
});
