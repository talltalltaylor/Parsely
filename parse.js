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
    else if(window.location.href.indexOf("simplyrecipes") > -1) {
        $(".entry-content").children().not(".recipe-callout").toggle();
        $("script").hide();
        $(".comment-section").toggle();
    }
});
