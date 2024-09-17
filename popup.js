document.getElementById('getTitleButton').addEventListener('click', function() {
    // Get the current active tab
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        var currentTab = tabs[0];
        var tabTitle = currentTab.title;

        // Display the title in the popup
        document.getElementById('tabTitle').textContent = 'Tab Title: ' + tabTitle;
    });
});
