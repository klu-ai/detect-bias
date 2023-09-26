# Bias Detector for Firefox

This is a Firefox extension that uses the KLU API to analyze the bias of online articles.

Structure
- detect-bias-extension (the Firefox extension)
- icon-generation (code for generating the extension icons)
- non-klu (variation for non [KLU API](https://docs.klu.ai/))

```
detect-bias/
├── .git/
├── .gitignore
├── README.md
├── detect-bias-extension/
│   ├── Readability.js
│   ├── background.js
│   ├── content.js
│   ├── icons/
│   │   ├── 0.png
│   │   ├── 1.png
│   │   ├── 10.png
│   │   ├── 2.png
│   │   ├── 3.png
│   │   ├── 4.png
│   │   ├── 5.png
│   │   ├── 6.png
│   │   ├── 7.png
│   │   ├── 8.png
│   │   ├── 9.png
│   │   └── icon.png
│   ├── manifest.json
│   ├── popup.html
│   └── popup.js
├── icon-generation/
│   ├── Inter-Regular.ttf
│   └── generate-icons.py
└── non-klu/
    ├── background-direct.js
    ├── ideation.md
    └── prompt.txt
```
