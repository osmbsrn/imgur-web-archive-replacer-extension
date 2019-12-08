chrome.browserAction.onClicked.addListener(function (tab) {
    chrome.tabs.executeScript(null, {
        file: 'imgur_replacer.js'
    }, function(){
        detectImgUr();
    });
});

chrome.tabs.onActivated.addListener(function (tabId, changeInfo, tab) {
    detectImgUr();
})

function detectImgUr(){
    chrome.tabs.executeScript(null, {
        file: 'imgur_detector.js'
    }, function(imgeUrImageCount) {
        chrome.browserAction.setBadgeText({
            text: (imgeUrImageCount || 0).toString()
          });
    });
}