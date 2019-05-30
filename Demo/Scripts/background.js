chrome.runtime.onMessage.addListener(
    function(request) {
        if (request.from === "parse" && (request.subject === 'tab')){
            url = "/Popup/newTab.html"
            link = request.data;
            no = request.id;
            chrome.tabs.create({url: url});
            setTimeout(function(){
                chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
                    chrome.tabs.sendMessage(tabs[0].id, {msg: link, id: no});  
                });
            }, 500)
            
        }
});