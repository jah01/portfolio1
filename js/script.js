//written (with ♥)
//by Joseph Hilber
//beginning 4/25/2020

$(document).ready(function() {
    
    
    var resizeText = function() {
        
        var w = $(window).width();
        if (w < 500) {
            $("#navTop").css("font-size", "14px");
            $("#tf").css("font-size", "12px");
            $("#tf").css("line-height", "20px");
            $("footer").css("font-size", "14px");
        } else if (w <= 1000) {
            $("#navTop").css("font-size", parseInt((w / 35.8), 10).toString() + "px");
            $("#tf").css("font-size", "14px");
            $("#tf").css("line-height", "30px");
            $("footer").css("font-size", "14px");
        } else if (w <= 1800){
            $("#navTop").css("font-size", "28px");
            $("#tf").css("font-size", "18px");
            $("#tf").css("line-height", "40px");
            $("footer").css("font-size", "18px");
        } else {
            $("#navTop").css("font-size", parseInt((w / 64.2), 10).toString() + "px");
            $("#tf").css("font-size", parseInt((w / 100), 10).toString() + "px");
            $("#tf").css("line-height", parseInt((w / 45), 10).toString() + "px");
            $("footer").css("font-size", parseInt((w / 100), 10).toString() + "px");
        }
    };
    
    
    var sizePicSpacing = function() {
        
        var h = $(window).height();
        
        var spacing = h - ($("nav").height() + parseInt($("nav").css("margin-top").replace("px", "")) + 20 + $("#picture").height() + $("#hello").height() + $("#arrow").height() + (.2 * h));
        
        $("#topPicSpacing").height(spacing);
        
        $("#afterArrow").height(h - $("#arrow").offset().top - $("#arrow").height() + 20);
    };
    
    
    var resizeNavBottomSpace = function() {
        
        var w = $(window).width();
        if (w < 500) {
            $(".navBottomButton").css("font-size", "19px");
            $("#hello").css("font-size", "19px");
            $("#spanName").css("font-size", "19px");
        } else if (w <= 1000) {
            $(".navBottomButton").css("font-size", parseInt((w / 26.2), 10).toString() + "px");
            $("#hello").css("font-size", parseInt((w / 26.2), 10).toString() + "px");
            $("#spanName").css("font-size", parseInt((w / 26.2), 10).toString() + "px");
        } else if (w <= 1800) {
            $(".navBottomButton").css("font-size", "42px");
            $("#hello").css("font-size", "42px");
            $("#spanName").css("font-size", "42px");
        } else {
            $(".navBottomButton").css("font-size", parseInt((w / 42.8), 10).toString() + "px");
            $("#hello").css("font-size", parseInt((w / 42.8), 10).toString() + "px");
            $("#spanName").css("font-size", parseInt((w / 42.8), 10).toString() + "px");
        }
        
        //$("#name").html($("#proj1").css("font-size"));
        //var textWidth = $("#bio").width() + $("#educ").width() + $("#exp").width() + $("#skills").width() + $("#proj").width();
        
        //$(".navBottomSpace").width((w - textWidth) / 4);
    };
    
    
    //sources:
    //https://css-tricks.com/snippets/jquery/smooth-scrolling/
    //https://codepen.io/HZaccaro/pen/zvrgLb
    $(function() {
        $('.smoothScroll').click(function() {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                this.preventDefault();
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top
                    }, 100);
                    return false;
                }
            }
        });
    });
    
    
    $("#proj1").click(function() {
        $("#tf").html("<p class=\"pFirst\">My favorite project so far has been this website, so I put it here first. I used static HTML and coded this all from scratch, with minimal outside code (aside from jQuery, of course). Through this I not only expanded my knowledge about the capabilities of JS, but I executed better programming practices and made this site responsive. Before this site, I had not really created anything with total responsiveness in mind. With this project, I tested out many different resolutions to make sure this looked acceptable on all. Additionally, I made sure that the design was consistent across both of the webpages. It features a minimalist design with colors that work well together. Although the site may look modest, it would not be the same site without the JS working under the hood. This makes viewing and interacting with this seemigly simple site a much more pleasant experience. Thanks for visiting, and if you'd like, check out the code on <a href=\"https://github.com/jah01/portfolio1\" target=\"_blank\" class=\"linkSeen\">Github</a>!</p></p>");
        
        $("#proj1").css("color", "#707070").css("border-bottom", "4px solid rgba(189, 216, 159, 1)").css("cursor", "default").hover(function () {
                $(this).css("border-bottom", "4px solid rgba(189, 216, 159, 1)");
            }
        );
        
        $(".navBottomButton:not(#proj1)").css("color", "#9d9d9d").css("border-bottom", "4px solid rgba(0, 0, 0, 0)").css("cursor", "pointer").hover(function () {
                $(this).css("border-bottom", "4px solid rgba(189, 216, 159, 1)");
            }, function () {
                $(this).css("border-bottom", "4px solid rgba(0, 0, 0, 0)");
            }
        );
        
    });
    
    $("#proj2").click(function() {
        $("#tf").html("<img src=\"../img/firstWebsite.svg\" align=\"auto\" class=\"projPic imgRounded\"><p class=\"pFirst\"><a href=\"https://www.github.com/jah01/firstWebsite\" target=\"_blank\" class=\"linkSeen\">View on Github</a><br />This is my first website, created over the summer of 2018. It was the first time I had ever delved into the world of UI and web developing. I had no idea what to expect. I spent over 90 hours creating these web pages from scratch. I used very little JavaScript throughout the project, which came from outside sources. The code itself is messy and I left it how it looked when I finished; I unfortunately never got to cleaning it up, but I use it a bit for reference, so I leave the code just the way it was when I completed it. This is one of my favorite projects because, again, much of this was extrememly new. When I began, I barely knew how classes worked, how to import fonts, or how to make any transitions. I'm proud of what I accomplished that summer and it's great to look back and see how much I grew. The biggest problem I faced besides my own inexperience was making sure everything looked nice on different-sized monitors. Although this is not mobile-friendly, I spent a great deal making sure computer screens were able to view the site as it should be viewed.</p>");
        
        $("#proj2").css("color", "#707070").css("border-bottom", "4px solid rgba(189, 216, 159, 1)").css("cursor", "default").hover(function () {
                $(this).css("border-bottom", "4px solid rgba(189, 216, 159, 1)");
            }
        );
        
        $(".navBottomButton:not(#proj2)").css("color", "#9d9d9d").css("border-bottom", "4px solid rgba(0, 0, 0, 0)").css("cursor", "pointer").hover(function () {
                $(this).css("border-bottom", "4px solid rgba(189, 216, 159, 1)");
            }, function () {
                $(this).css("border-bottom", "4px solid rgba(0, 0, 0, 0)");
            }
        );
    });
    
    $("#proj3").click(function() {
        $("#tf").html("<img src=\"../img/wcLanding.svg\" align=\"left\" class=\"projPic imgRounded\"><p class=\"pFirst\"><a href=\"https://www.github.com/jah01/WCLanding\" target=\"_blank\" class=\"linkSeen\">View on Github</a></p><p class=\"pFirst\">I made the WeCycle landing page for a friend during the early months of 2020. Although it was not built for mobile and not going to be used, I took a bit of time out of my schedule during the school year to tinker with certain CSS animations dealing SVGs. This project was based off an app idea my friends had built for fun, and I decided I would make a website (or at least experiment with one). The project itself was extremelty difficult because I went in depth with images and animations, beyond what I had ever done before. It was used more as a learning experience than something I would present a product for, but I was very happy with the layout. I never finished the page, because it was very hard to balance this fun with the work that school presented in my life. I also never got back to it because I decided to pursue other projects. What I learned from this difficult project was how to use SVGs, fonts, and general style elements. This is not mobile-friendly and some text does not show up on some browsers on Mac. I spent many hours coding this as well as using software to create SVG images, which was something I had never done extensively before, but every element of each image was created by me.</p>");
        
        $("#proj3").css("color", "#707070").css("border-bottom", "4px solid rgba(189, 216, 159, 1)").css("cursor", "default").hover(function () {
                $(this).css("border-bottom", "4px solid rgba(189, 216, 159, 1)");
            }
        );
        
        $(".navBottomButton:not(#proj3)").css("color", "#9d9d9d").css("border-bottom", "4px solid rgba(0, 0, 0, 0)").css("cursor", "pointer").hover(function () {
                $(this).css("border-bottom", "4px solid rgba(189, 216, 159, 1)");
            }, function () {
                $(this).css("border-bottom", "4px solid rgba(0, 0, 0, 0)");
            }
        );
    });
    
    $("#proj4").click(function() {
        $("#tf").html("<p class=\"pFirst\"><a href=\"https://github.com/jah01/matlab-blackjack\" target=\"_blank\" class=\"linkSeen\">View on Github</a></p><p class=\"pFirst\">In my first semester of college, I created this blackjack game in MATLAB with the help of a classmate. Among other things, I wrote the code for the AI dealer, which allowed for a tougher opponent against the user. The hardest part of this project was finding out how we wanted the game structured. It was the first project that I worked together with somebody, so that posed a challenge as well. I learned the syntax of MATLAB and also how things are stored. It was a great learning experience for me because I did not have experience in this language that is used in many disciples of engineering.</p>");
        
        $("#proj4").css("color", "#707070").css("border-bottom", "4px solid rgba(189, 216, 159, 1)").css("cursor", "default").hover(function () {
                $(this).css("border-bottom", "4px solid rgba(189, 216, 159, 1)");
            }
        );
        
        $(".navBottomButton:not(#proj4)").css("color", "#9d9d9d").css("border-bottom", "4px solid rgba(0, 0, 0, 0)").css("cursor", "pointer").hover(function () {
                $(this).css("border-bottom", "4px solid rgba(189, 216, 159, 1)");
            }, function () {
                $(this).css("border-bottom", "4px solid rgba(0, 0, 0, 0)");
            }
        );
    });
    
    $("#proj5").click(function() {
        $("#tf").html("<img src=\"../img/dewit.svg\" align=\"left\" class=\"projPic imgRounded\"><p class=\"pFirst\"><a href=\"https://www.github.com/jah01/Dewit\" target=\"_blank\" class=\"linkSeen\">View on Github</a></p><p class=\"pFirst\">The final project I have showcased here is an Android app titled Dewit. A couple of my friends and I are currently creating this app to help people complete daily tasks and reach their goals. It is coded in Java. This was the first time any of us had really gone in depth with Android Studio and our first real expereience creating an app. The hardest part of this project is lack of experience.</p>");
        
        $("#proj5").css("color", "#707070").css("border-bottom", "4px solid rgba(189, 216, 159, 1)").css("cursor", "default").css("cursor", "default").hover(function () {
                $(this).css("border-bottom", "4px solid rgba(189, 216, 159, 1)");
            }
        );
        
        $(".navBottomButton:not(#proj5)").css("color", "#9d9d9d").css("border-bottom", "4px solid rgba(0, 0, 0, 0)").css("cursor", "pointer").hover(function () {
                $(this).css("border-bottom", "4px solid rgba(189, 216, 159, 1)");
            }, function () {
                $(this).css("border-bottom", "4px solid rgba(0, 0, 0, 0)");
            }
        );
    });
    
    
    var resizeBeforeFooter = function() {
        var h = .05 * $(window).height();
        if (h < 60) {
            h = 60;
        }
        $("#beforeFooter").height(h);
        $("#contactCards").css("margin-bottom", h.toString() + "px");
    };
    
    
//    var reorderTF = function() {
//        var w = $(window).width();
//        if (w < 1800) {
//            $("#tf").css("display", "inline-block");
//        } else {
//            $("#tf").css("display", "flex");
//        }
//    };
    
    
    $(window).bind('resize', function() {
        resizeText();
        sizePicSpacing();
        resizeNavBottomSpace();
        resizeBeforeFooter();
        //reorderTF();
    }).trigger('resize');
    
    
});
