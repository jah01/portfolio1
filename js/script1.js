//written (with ♥)
//by Joseph Hilber
//beginning 4/28/20

$(document).ready(function() {
    
    
    var resizeBeforeFooter = function() {
        var h = .05 * $(window).height();
        if (h < 60) {
            h = 60;
        }
        $("#contactCards").css("margin-bottom", h.toString() + "px").css("margin-top", h.toString() + "px");
    };
    
    
    $(window).bind('resize', function() {
        resizeBeforeFooter();
    }).trigger('resize');
    
});