document.getElementById('scrapeButton').addEventListener('click', function() {
    const linkedinUrls = [
        'https://www.linkedin.com/in/shilpa-tiwari-79b82b212/',
        'https://www.linkedin.com/in/proton9/',
        'https://www.linkedin.com/in/prernachavan232/',
    ];

    // Send the list of URLs to the background script
    chrome.runtime.sendMessage({ urls: linkedinUrls });
});
