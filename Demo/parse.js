//Author: Taylor Robbins
//
// basic multi-way branch based on website
// that toggles or hides all elements that aren't the specified recipe class
// need a more generic way of doing this, but this will work for now
//
$( document ).ready(function() {
    if(window.location.href.indexOf("thestayathomechef") > -1) {
        $(".entry-content").children().not(".wprm-recipe-container").toggle();
        $("style").hide();
        $(".adthrive-player-container adthrive-collapse-player").toggle();
        $(".tlod").children().toggle();
        $(".widget-wrap").toggle();
        $(".entry-comments").toggle();
        $(".comment-respond").toggle();
    }
    else if(window.location.href.indexOf("spendwithpennies") > -1) {
        
        $(".entry-content").children().not(".wprm-recipe-container").toggle();
        $("style").hide();
        $(".adthrive-player-container adthrive-collapse-player").toggle();
    }
    else if(window.location.href.indexOf("simplyrecipes") > -1) {
        $(".entry-content").children().not(".recipe-callout").toggle();
        $("script").hide();
        $(".comment-section").toggle();
    }
    else if(window.location.href.indexOf("cookingclassy") > -1) {
        
        $(".content").children().not(".wprm-recipe-container").toggle();
        $("style").hide();
        $(".adthrive-player-container adthrive-collapse-player").toggle();
        $(".adthrive-ad adthrive-dynamic").toggle();
    }
    else if(window.location.href.indexOf("belleofthekitchen") > -1) {
        
        $(".entry-content").children().not(".wprm-recipe-container").toggle();
        $("style").hide();
        $(".adthrive-player-container adthrive-collapse-player").toggle();
    }
    else if(window.location.href.indexOf("averiecooks") > -1) {
        
        $(".wrapper").children().children().children().not(".recipe").children().not(".mv-create-wrapper").toggle();
        $("script").hide();
        $("p").toggle();
        $("h2").toggle();
    }
    else if(window.location.href.indexOf("damndelicious") > -1) {
        
        $(".wrapper").children().children().children().not(".recipe").toggle();
        $(".adthrive-player-container adthrive-collapse-player").toggle();
        $("script").hide();
    }
    else if(window.location.href.indexOf("gimmesomeoven") > -1) {
        
        $(".wrapper").children().children().children().not(".recipe").toggle();
        $(".adthrive-player-container adthrive-collapse-player").toggle();
        $("script").hide();
    }
    else if(window.location.href.indexOf("recipetineats") > -1) {
        
        $(".entry-content").children().not(".wprm-recipe-container").toggle();
        $("style").hide();
        $(".adthrive-player-container adthrive-collapse-player").toggle();
    }
    else if(window.location.href.indexOf("tastesbetterfromscratch") > -1) {
        
        $(".entry-content").children().not(".wprm-recipe-container").toggle();
        $("style").hide();
        $(".adthrive-player-container adthrive-collapse-player").toggle();
    }
});
