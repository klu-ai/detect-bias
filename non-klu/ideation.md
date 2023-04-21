To create the Firefox extension that extracts the article, sends it to the KLU API, and displays the analysis, we can follow these steps:

Create a manifest file for the extension.
Create a content script to extract the article content.
Create a background script to communicate with the KLU API.
Update the extension icon based on the bias score.
Create a popup page to display the analysis when the icon is clicked.

Here's the pseudocode for the implementation:

// manifest.json
`
{
  "manifest_version": 2,
  "name": "Bias Analyzer",
  "version": "1.0",
  "description": "Analyze the bias of online articles using the KLU API",
  "icons": { "48": "icon.png" },
  "content_scripts": [ { "matches": ["*://*/*"], "js": ["content.js"] } ],
  "background": { "scripts": ["background.js"] },
  "browser_action": { "default_icon": "icon.png", "default_popup": "popup.html" },
  "permissions": [ "activeTab", "http://*/*", "https://*/*" ]
}
`

// content.js
- Listen for a message from the background script.
- Extract the article content using the Readability library.
- Send the extracted content back to the background script.

// background.js
- Listen for a tab update.
- Send a message to the content script to extract the article content.
- Receive the article content from the content script.
- Send the article content to the KLU API.
- Receive the bias score and analysis from the KLU API.
- Update the extension icon based on the bias score.
- Store the analysis for later display in the popup.

// popup.html
- Create an HTML structure to display the analysis.

// popup.js
- Retrieve the analysis from the background script.
- Display the analysis in the popup.
