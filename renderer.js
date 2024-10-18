// renderer.js
const addressBar = document.getElementById('address-bar');
const goButton = document.getElementById('go-button');
const newTabButton = document.getElementById('new-tab');
const webView = document.getElementById('web-view');
const errorPage = document.getElementById('error-page');

newTabButton.addEventListener('click', addNewTab);

goButton.addEventListener('click', () => {
    navigateToUrl(addressBar.value);
});

webView.addEventListener('loadstop', () => {
    errorPage.classList.add('hidden'); // Hide the error page if the load is complete
});

webView.addEventListener('loadfailed', () => {
    errorPage.classList.remove('hidden'); // Show the error page if loading fails
});

function navigateToUrl(url) {
    if (!url.startsWith('http://') && !url.startsWith('https://')) {
        url = 'http://' + url;
    }
    webView.src = url;
}

function addNewTab() {
    // Logic for adding a new empty tab will go here
    addressBar.value = ''; // Clear the address bar
    navigateToUrl('about:blank'); // Navigate to a blank page
}

// Set an initial URL
navigateToUrl('about:blank');
