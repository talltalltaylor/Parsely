//Author: Taylor Robbins
//
// 4 different parse functions, each one tailored to a specific DOM structure
// multi-way branch based on domain, such that parse cannot be initiated on the wrong sites
// recipe is stored before looking at which website and passed to specific parse

$( document ).ready(function() {
    // get recipe, parent, domain
    var recipe = $("div").find("*[class*='recipe']");
    var parent = $(recipe).parent();
    var domain = window.location.hostname;
    var closest;

    // lists of websites that will work with Parsely, split up based on DOM structure/labels
    var list1 = ["thestayathomechef.com", "www.spendwithpennies.com", "www.cookingclassy.com", 
    "belleofthekitchen.com", "www.recipetineats.com", "www.mysuburbankitchen.com", 
    "divascancook.com", "www.loveandlemons.com", "cookieandkate.com", 
    "www.feastingathome.com", "www.jessicagavin.com", "iwashyoudry.com", 
    "sweetandsavorymeals.com", "www.tasteandtellblog.com", "www.lifeasastrawberry.com",
    "sallysbakingaddiction.com"];
    var list2 = ["www.averiecooks.com", "damndelicious.net"];
    var list3 = ["www.simplyrecipes.com", "tastesbetterfromscratch.com", 
    "minimalistbaker.com", "cafedelites.com", "shewearsmanyhats.com",
    "sugarspunrun.com", "spicysouthernkitchen.com", "www.dinneratthezoo.com", 
    "therecipecritic.com","thesaltymarshmallow.com", "livelytable.com", 
    "www.yellowblissroad.com", "www.jocooks.com", "www.primaverakitchen.com",
    "kristineskitchenblog.com", "www.apinchofhealthy.com", "www.twopeasandtheirpod.com",
    "www.lecremedelacrumb.com", "www.thechunkychef.com", "www.willcookforsmiles.com",
    "www.theseasonedmom.com", "natashaskitchen.com", "laurenslatest.com",
    "www.tastesoflizzyt.com", "addapinch.com", "keviniscooking.com",
    "www.recipegirl.com", "www.asweetpeachef.com", "www.foodiecrush.com",
    "www.lifeasastrawberry.com"];
    var list4 = ["www.gimmesomeoven.com", "www.wellplated.com", "www.skinnytaste.com"];

    // check lists for domain, then parse based on closest element matching correct parent
    if (list1.includes(domain)){
        closest = recipe.closest("div[class$='content']");
        parse(closest, recipe);
        $("img[class*='wp-image' i]").toggle();
        if(domain.indexOf("tasteandtellblog") > -1){
            pAndH2();
            $("em").toggle();
        }
        
    }
    else if(list2.includes(domain)){
        closest = recipe.closest("article[class$='content']");
        parse(closest, recipe);
        if(domain.indexOf("averie") > -1){
            pAndH2();
        }
    }
    else if(list3.includes(domain)){
        parse(parent, recipe);
        $("img[class*='wp-image' i]").toggle();
        $("div[class$='description']").toggle();
    }
    else if(list4.includes(domain)){
        closest = recipe.closest("div[class*='single']");
        parse(closest, recipe);
    }
    // this one is special
    else if(domain.indexOf("inspiredtaste") > -1){
        $(parent).children().not("div[class*='itr']").toggle();
    } 
    else{
        alert("This site isn't included yet! If you think that it should be," +
        " email parsely.suggestions@gmail.com with the site you want to parse.");
    }

    // parse looks at children of closest parent to recipe element,
    // toggles everything but recipe, but also misc elements that stick out
    // on the page
    function parse(closest,recipe){
        closest.children().not(recipe).toggle();
        $("style").hide();
        $("script").hide();
        $("div[class*='adthrive' i]").toggle();
        $("div[class*='hidden']").toggle();
        $("*[class*='tlod'").toggle();
        $("*[class*='widget'").toggle();
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