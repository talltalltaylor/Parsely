$( document ).ready(function() {
    var domain = window.location.hostname;
    var link = window.location.href;
    

    // lists of websites that will work with Parsely, split up based on DOM structure/labels
    var list1 = ["thestayathomechef.com", "www.spendwithpennies.com", "www.cookingclassy.com", 
    "belleofthekitchen.com", "www.recipetineats.com", "www.mysuburbankitchen.com", "divascancook.com",
    "www.loveandlemons.com", "cookieandkate.com", "www.feastingathome.com", "www.jessicagavin.com", 
    "iwashyoudry.com", "sweetandsavorymeals.com", "www.tasteandtellblog.com", "www.lifeasastrawberry.com",
    "sallysbakingaddiction.com"];
    var list2 = ["www.averiecooks.com", "damndelicious.net"];
    var list3 = ["www.simplyrecipes.com", "tastesbetterfromscratch.com", 
    "minimalistbaker.com", "cafedelites.com", "shewearsmanyhats.com",
    "sugarspunrun.com", "spicysouthernkitchen.com", "www.dinneratthezoo.com",
    "therecipecritic.com", "thesaltymarshmallow.com", "livelytable.com",
    "www.yellowblissroad.com", "www.jocooks.com", "www.primaverakitchen.com",
    "kristineskitchenblog.com", "www.apinchofhealthy.com", "www.twopeasandtheirpod.com",
    "www.lecremedelacrumb.com", "www.thechunkychef.com", "www.willcookforsmiles.com",
    "www.theseasonedmom.com", "natashaskitchen.com", "laurenslatest.com",
    "www.tastesoflizzyt.com", "addapinch.com", "www.recipegirl.com", "www.asweetpeachef.com",
    "keviniscooking.com", "www.foodiecrush.com"];
    var list4 = ["www.gimmesomeoven.com", "www.wellplated.com", "www.skinnytaste.com"];

    // check lists for domain, then parse based on closest element matching correct parent
    if (list1.includes(domain)){
        chrome.runtime.sendMessage({from: 'parse', subject: 'tab', data: link, id: 1});
    }
    else if(list2.includes(domain)){
        chrome.runtime.sendMessage({from: 'parse', subject: 'tab', data: link, id: 2});
    }
    else if(list3.includes(domain)){
        chrome.runtime.sendMessage({from: 'parse', subject: 'tab', data: link, id: 3});
    }
    else if(list4.includes(domain)){
        chrome.runtime.sendMessage({from: 'parse', subject: 'tab', data: link, id: 4});
    }
    // this one is special
    else if(domain.indexOf("inspiredtaste") > -1){
        chrome.runtime.sendMessage({from: 'parse', subject: 'tab', data: link, id: 5});
    } 
    else{
        alert("This site isn't included yet! If you think that it should be," +
        " email parsely.suggestions@gmail.com with the site you want to parse.");
    }
    
});