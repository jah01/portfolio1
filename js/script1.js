//written (with ♥)
//by Joseph Hilber
//beginning 4/28/20

$(document).ready(function() {
    
    
    var resizeCardsText = function() {
        var w = $(window).width();
        if (w < 500) {
            $(".cardsTitle").css("font-size", "14px");
            $(".cardsInfo").css("font-size", "14px");
            
            $(".svgs").height(30);
            $("#navTop").css("font-size", "14px");
            $("footer").css("font-size", "14px");
        } else if (w <= 1000) {
            $(".cardsTitle").css("font-size", parseInt(((w - 500) / 130) + 14, 10).toString() + "px");
            $(".cardsInfo").css("font-size", "14px");
            
            $(".svgs").css("height", parseInt(((w - 500) / 30.952) + 30, 10).toString() + "px");
            $("#navTop").css("font-size", parseInt((w / 35.8), 10).toString() + "px");
            $("footer").css("font-size", "14px");
        } else if (w <= 1800){
            $(".cardsTitle").css("font-size", "24px");
            $(".cardsInfo").css("font-size", "16px");
            
            $(".svgs").height(72);
            $("#navTop").css("font-size", "28px");
            $("footer").css("font-size", "18px");
        } else {
            $(".cardsTitle").css("font-size", parseInt((w / 75), 10).toString() + "px");
            $(".cardsInfo").css("font-size", parseInt((w / 100), 10).toString() + "px");
            
            $(".svgs").css("height", parseInt((w / 25), 10).toString() + "px");
            $("#navTop").css("font-size", parseInt((w / 64.2), 10).toString() + "px");
            $("footer").css("font-size", parseInt((w / 100), 10).toString() + "px");
        }
        
        var h = $(".cardsGUI").height();
        var h2 = $(".cardsDiv").height();
        $(".cardsTitle").css("margin-top", parseInt((h - h2) / 2.5, 10).toString() + "px");
        
        var hs = .05 * $(window).height();
        if (hs < 60) {
            hs = 60;
        }
        $("#contactCards").css("margin-bottom", hs.toString() + "px").css("margin-top", hs.toString() + "px");
    };
    
    
    $(window).bind('resize', function() {
        //resizeContactCards();
        resizeCardsText();
        //resizeCardsInternal();
        //resizeSVG();
    }).trigger('resize');
    
});
