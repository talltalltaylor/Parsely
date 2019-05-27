//Author: Taylor Robbins
//
// 4 different parse functions, each one tailored to a specific DOM structure
// multi-way branch based on website, such that parse cannot be initiated on the wrong sites
// recipe is stored before looking at which website and passed to specific parse
// used jquery selectors instead of literal class names

$( document ).ready(function() {
    // get recipe and domain
    var recipe = $("div").find("*[class*='recipe']");
    var domain = window.location.hostname;

    // lists of websites that will work with Parsely
    var list1 = ["thestayathomechef.com", "www.spendwithpennies.com", "www.cookingclassy.com", 
    "belleofthekitchen.com", "www.recipetineats.com", "www.mysuburbankitchen.com", "divascancook.com"];
    var list2 = ["www.averiecooks.com", "damndelicious.net"];
    var list3 = ["www.simplyrecipes.com", "tastesbetterfromscratch.com", "www.loveandlemons.com", 
    "minimalistbaker.com", "www.skinnytaste.com", "cafedelites.com", "shewearsmanyhats.com", 
    "cookieandkate.com", "sugarspunrun.com", "spicysouthernkitchen.com"];
    var list4 = ["www.gimmesomeoven.com", "www.wellplated.com"];

    // check lists for domain, then parse
    if (list1.includes(domain)){
        parse1(recipe);
    }
    else if(list2.includes(domain)){
        parse2(recipe);
        if(domain.indexOf("averie") > -1){
            pAndH2();
        }
    }
    else if(list3.includes(domain)){
        parse3(recipe);
    }
    else if(list4.includes(domain)){
        parse4(recipe);
    }

    // parse1 looks at children of divs that end with 'content'
    function parse1(recipe){
        $("div[class$='content']").children().not(recipe).toggle();
        $("style").hide();
        $("script").hide();
        $("div[class*='adthrive' i]").toggle();
        $("img[class*='wp-image' i]").toggle();
        $("div[class*='hidden']").toggle();
        $(".tlod").toggle();
        $(".widget-wrap").toggle();
        $("div[class*='comment']").toggle();   
    }
    // parse2 looks at children of articles that end with 'content'
    function parse2(recipe){
        $("article[class$='content']").children().not(recipe).toggle();
        $("style").hide();
        $("script").hide();
        $("div[class*='adthrive' i]").toggle();
        $("div[class*='hidden']").toggle();
        $(".tlod").toggle();
        $(".widget-wrap").toggle();
        $("div[class*='comment']").toggle();   
    }
    // parse3 looks at children of divs that end with 'entry-content'
    function parse3(recipe){
        $("div[class$='entry-content']").children().not(recipe).toggle();
        $("div[class$='description']").toggle();
        $("style").hide();
        $("script").hide();
        $("div[class*='adthrive' i]").toggle();
        $("img[class*='wp-image' i]").toggle();
        $("div[class*='hidden']").toggle();
        $(".tlod").toggle();
        $(".widget-wrap").toggle();
        $("div[class*='comment']").toggle();   
    }
    // parse4 looks at children of divs that contain 'singlepost'
    function parse4(recipe){
        $("div[class*='singlepost']").children().not(recipe).toggle();
        $("div[class$='description']").toggle();
        $("style").hide();
        $("script").hide();
        $("div[class*='adthrive' i]").toggle();
        $("img[class*='wp-image' i]").toggle();
        $("div[class*='hidden']").toggle();
        $(".tlod").toggle();
        $(".widget-wrap").toggle();
        $("div[class*='comment']").toggle();   
    }
    // function to hide p and h2 elements
    // was using this often, but ended up using it less and less
    // as the code improved. Now it's only for one site
    function pAndH2(){
        $("p").toggle();
        $("h2").toggle();
    }

});
