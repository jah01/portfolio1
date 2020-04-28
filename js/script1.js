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
        } else if (w <= 1000) {
            $(".cardsTitle").css("font-size", "14px");
        } else if (w <= 1800){
            $(".cardsTitle").css("font-size", "14px");
        } else {
            $(".cardsTitle").css("font-size", parseInt((w / 64.2), 10).toString() + "px");
        }
    };
    
    var resizeCardsInternal = function() {
        var h = $(".cardsGUI").height();
        $(".cardsTitle").css("margin-top", parseInt(.2 * h).toString() + "px");
    }
    
    
    $(window).bind('resize', function() {
        resizeContactCards();
        resizeCardsText();
        resizeCardsInternal();
    }).trigger('resize');
    
});