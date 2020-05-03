//written (with ♥)
//by Joseph Hilber
//beginning 4/28/20

$(document).ready(function() {
    
    
    var resizeContactCards = function() {
        var h = .05 * $(window).height();
        if (h < 60) {
            h = 60;
        }
        $("#contactCards").css("margin-bottom", h.toString() + "px").css("margin-top", h.toString() + "px");
    };
    
    
    var resizeCardsText = function() {
        var w = $(window).width();
        if (w < 500) {
            $(".cardsTitle").css("font-size", "14px");
            $(".cardsInfo").css("font-size", "12px");
        } else if (w <= 1000) {
            $(".cardsTitle").css("font-size", parseInt(((w - 500) / 130) + 14, 10).toString() + "px");
            $(".cardsInfo").css("font-size", "14px");
        } else if (w <= 1800){
            $(".cardsTitle").css("font-size", "24px");
            $(".cardsInfo").css("font-size", "18px");
        } else {
            $(".cardsTitle").css("font-size", parseInt((w / 75), 10).toString() + "px");
            $(".cardsInfo").css("font-size", parseInt((w / 100), 10).toString() + "px");
        }
    };
    
    
    var resizeCardsInternal = function() {
        var h = $(".cardsGUI").height();
        var h2 = $(".cardsDiv").height();
        $(".cardsTitle").css("padding-top", parseInt((h - h2) / 2.5, 10).toString() + "px");
    };
    
    
    var resizeSVG = function() {
        var w = $(window).width();
        if (w < 500) {
            $(".svgs").height(30);
        } else if (w <= 1000) {
            $(".svgs").css("height", parseInt(((w - 500) / 30.952) + 30, 10).toString() + "px");
        } else if (w <= 1800) {
            $(".svgs").height(72);
        } else {
            $(".svgs").css("height", parseInt((w / 25), 10).toString() + "px");
        }
    };
    
    
    $(window).bind('resize', function() {
        resizeContactCards();
        resizeCardsText();
        resizeCardsInternal();
        resizeSVG();
    }).trigger('resize');
    
});
