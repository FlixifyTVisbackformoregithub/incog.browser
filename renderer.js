// renderer.js
const addressBar = document.getElementById('address-bar');
const goButton = document.getElementById('go-button');
const newTabButton = document.getElementById('new-tab');
const webView = document.getElementById('web-view');
const errorPage = document.getElementById('error-page');
const reloadButton = document.getElementById('reload-button');

newTabButton.addEventListener('click', addNewTab);
goButton.addEventListener('click', () => navigateToUrl(addressBar.value));
reloadButton.addEventListener('click', () => {
    errorPage.classList.add('hidden');
    navigateToUrl(webView.src);
});

webView.addEventListener('loadstop', () => {
    errorPage.classList.add('hidden'); // Hide error page on successful load
});

webView.addEventListener('loadfailed', () => {
    errorPage.classList.remove('hidden'); // Show error page on load failure
});

function navigateToUrl(url) {
    if (!url.startsWith('http://') && !url.startsWith('https://')) {
        url = 'http://' + url;
    }
    webView.src = url;
}

function addNewTab() {
    addressBar.value = ''; // Clear the address bar
    navigateToUrl('about:blank'); // Navigate to a blank page
}

// Set initial URL
navigateToUrl('about:blank');
