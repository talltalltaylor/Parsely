/*Author: Taylor Robbins
Script for parsing the recipe container from the current page,
based on domain name so extension doesn't run on sites it wasn't intended for.
The basic parse function is the same for each site, but the closest element is
found in a different way based on the site's DOM structure. 

Disclaimer: I've had to do a lot of hacking
to get this to work, and it began as a school project. 
Forgive me. But, also, web structure for food blogs can be pretty bad, so it's not all my fault.
*/

$( document ).ready(function() {
    chrome.runtime.onMessage.addListener(function(request){
        if(request.from === "back" && request.subject === "parse"){
            // get DOM elements whose class contains substring 'recipe', 
            //get parent of first element, get domain, declare closest for l8r
            
            var recipe = $("div").find("*[class*='recipe']");
            var parent = $(recipe).parent();
            var domain = window.location.hostname;
            var closest;

            // lists of websites that will work with Parsely, split up based on DOM structure/classes
            var closestDivEndsWithContent = 
            ["www.spendwithpennies.com", "www.recipetineats.com", "www.mysuburbankitchen.com", 
            "divascancook.com", "www.loveandlemons.com", "cookieandkate.com", 
            "www.feastingathome.com", "www.jessicagavin.com", "iwashyoudry.com", 
            "www.tasteandtellblog.com", "www.lifeasastrawberry.com",
            "sallysbakingaddiction.com", "fitfoodiefinds.com", "www.onceuponachef.com",
            "thecookingjar.com", "www.eatyourselfskinny.com", "www.littlebroken.com"];
            var endsWithContentSpecialCases = ["www.onceuponachef.com", "www.loveandlemons.com",
            "thecookingjar.com", "www.eatyourselfskinny.com"];
            var closestArticleEndsWithContent = ["www.averiecooks.com", "damndelicious.net"];
            var directParent = 
            ["www.simplyrecipes.com", "tastesbetterfromscratch.com", "www.cookingclassy.com", "sweetandsavorymeals.com",
            "minimalistbaker.com", "cafedelites.com", "shewearsmanyhats.com",
            "sugarspunrun.com", "spicysouthernkitchen.com", "www.dinneratthezoo.com", 
            "therecipecritic.com","thesaltymarshmallow.com",
            "www.yellowblissroad.com", "www.jocooks.com", "www.primaverakitchen.com",
            "kristineskitchenblog.com", "www.apinchofhealthy.com", "www.twopeasandtheirpod.com",
            "www.lecremedelacrumb.com", "www.thechunkychef.com", "www.willcookforsmiles.com",
            "www.theseasonedmom.com", "natashaskitchen.com", "laurenslatest.com",
            "www.tastesoflizzyt.com", "keviniscooking.com",
            "www.recipegirl.com", "www.asweetpeachef.com", "www.foodiecrush.com",
            "www.simplejoy.com", "www.iheartnaptime.net", 
            "thecozycook.com", "www.chelseasmessyapron.com", "www.acouplecooks.com",
            "www.theflavorbender.com", "www.africanbites.com", "togetherasfamily.com",
            "www.aspicyperspective.com", "reciperunner.com", "www.the-girl-who-ate-everything.com",
            "www.lemontreedwelling.com", "www.evolvingtable.com", "www.crunchycreamysweet.com",
            "www.budgetbytes.com", "temeculablogs.com", "thegoldlininggirl.com", 
            "www.melskitchencafe.com", "diethood.com", "www.galonamission.com",
            "ifoodreal.com", "www.shelikesfood.com", "www.wellplated.com"];
            var closestDivHasSingleInIt = ["www.gimmesomeoven.com", "www.skinnytaste.com",
                        "dearcrissy.com"];
            var closestDivIsEntryContent = [ "thestayathomechef.com", "life-in-the-lofthouse.com", "livelytable.com", "addapinch.com"];
            var closestDivHasEntryContentInIt = ["belleofthekitchen.com", "lilluna.com"];


            // check lists for domain, then parse based on closest element matching correct parent
            if (closestDivEndsWithContent.includes(domain)) {
                closest = recipe.closest("div[class$='content']");
                parse(closest, recipe);
                
                // clean up (different for special sites, which I need a better way of dealing with)
                if(domain.indexOf("fitfoodiefinds") > -1) {
                    //do nothing
                }
                else if(endsWithContentSpecialCases.includes(domain)) {
                    $("p").toggle();
                }
                else if(domain.indexOf("sweetandsavorymeals") > -1) {
                    $("img").toggle();
                }
                else {
                    $("*[class*='wp-image' i]").not(recipe).toggle();
                }    
            }
            else if(closestArticleEndsWithContent.includes(domain)) {
                closest = recipe.closest("article[class$='content']");
                parse(closest, recipe);

                // clean up for special site
                if(domain.indexOf("averie") > -1){
                    $("p").toggle();
                    $("h2").toggle();;
                }
            }
            else if(directParent.includes(domain)) {
                parse(parent, recipe);
                $("img[class*='wp-image' i]").toggle();
                $("div[class$='description']").toggle();
                inst = $("div").find("*[class*='instruction']");
                ing = $("div").find("*[class*='ingredient']");

                // clean up for special site
                if(domain.indexOf("acouplecooks") > -1) {
                    $("ul").toggle();
                }
                else if(domain.indexOf("ifoodreal") > -1){
                    $(ing).children().children().show();
                }
                else if(domain.indexOf("sweetandsavorymeals") > -1){
                    $(ing).children().show();
                    $(inst).children().show();
                }
            }
            else if(closestDivHasSingleInIt.includes(domain)) {
                closest = recipe.closest("div[class*='single']");
                parse(closest, recipe);
            }
            else if(closestDivIsEntryContent.includes(domain)) {
                closest = recipe.closest("div[class*='entry-content']");
                if(domain.indexOf("acouplecooks") > -1) {
                    $("ul").toggle();
                }
                parse(closest, recipe);
            }
            else if(closestDivHasEntryContentInIt.includes(domain)) {
                closest = recipe.closest("div[class*='entry-content']");
                if(domain.indexOf("acouplecooks") > -1) {
                    $("ul").toggle();
                }
                parse(closest, recipe);
            }
            // this one is super special
            else if(domain.indexOf("inspiredtaste") > -1) {
                $(parent).children().not("div[class*='itr']").toggle();
            }
            else{
                alert("Parsely does not work on this site.");
            }

    
            // parse looks at children of closest parent to recipe element,
            // toggles everything but recipe, but also misc elements that stick out
            // on the page
            function parse(closest,recipe) {
                closest.children().not(recipe).toggle();
                $("style").hide();
                $("script").hide();
                $("div[class*='adthrive' i]").toggle();  
            }
        }
    });
});
