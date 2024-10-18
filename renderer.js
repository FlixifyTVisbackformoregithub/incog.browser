// renderer.js
const addressBar = document.getElementById('address-bar');
const goButton = document.getElementById('go-button');
const webView = document.getElementById('web-view');

goButton.addEventListener('click', () => {
    const url = addressBar.value;
    webView.src = url.startsWith('http') ? url : 'http://' + url;
});

// Optional: Navigate using 'Enter' key in the address bar
addressBar.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        goButton.click();
    }
});
