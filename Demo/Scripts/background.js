chrome.runtime.onMessage.addListener(
    function(request) {
      if(request.from === "pop" && request.subject === "parse"){
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            chrome.tabs.sendMessage(tabs[0].id, {from: "back", subject: "parse"});
          });
      }
    });