// renderer.js
const addressBar = document.getElementById('address-bar');
const goButton = document.getElementById('go-button');
const newTabButton = document.getElementById('new-tab');
const webView = document.getElementById('web-view');
const tabContainer = document.getElementById('tab-container');

let currentUrl = 'about:blank';

newTabButton.addEventListener('click', addNewTab);

goButton.addEventListener('click', () => {
    navigateToUrl(addressBar.value);
});

function navigateToUrl(url) {
    if (!url.startsWith('http://') && !url.startsWith('https://')) {
        url = 'http://' + url;
    }
    webView.src = url;
    currentUrl = url;
}

function addNewTab() {
    const tab = document.createElement('div');
    tab.className = 'tab';
    tab.innerText = 'New Tab';
    tab.addEventListener('click', () => {
        // Logic to switch tabs would go here
    });
    tabContainer.appendChild(tab);
    // Automatically navigate to blank or default URL
}

// Set an initial URL
navigateToUrl(currentUrl);
