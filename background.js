chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    const linkedinUrls = request.urls;

    linkedinUrls.forEach((url, index) => {
        // Open each LinkedIn profile in a new tab
        setTimeout(() => {
            chrome.tabs.create({ url: url }, function(tab) {
                chrome.tabs.executeScript(tab.id, { file: "scraper.js" });
            });
        }, index * 5000);  // Open each link after 5 seconds
    });
});
