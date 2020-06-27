//written (with ♥)
//by Joseph Hilber
//beginning 4/25/2020

$(document).ready(function() {
    
    
    var imgDiv = function() {
        var w = $(window).width();
        
        if (w < 800) {
            $(".imgRounded").attr("align", "top");
            $("#tf").css("display", "block");
        } else {
            $(".imgRounded").attr("align", "left");
            $("#tf").css("display", "auto");

        }
    };
    
    
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
    
    
    var resizeNavBottomSpace = function() {
        
        var w = $(window).width();
        var h = $(window).height();
        if (w < 500) {
            $(".navBottomButton").css("font-size", "14px");
            $(".words").css("font-size", "19px");
            $(".spanName").css("font-size", "19px");
            $("#intro").height(h * .5);
        } else if (w <= 1000) {
            $(".navBottomButton").css("font-size", parseInt((w / 26.2), 10).toString() + "px");
            $(".words").css("font-size", parseInt((w / 26.2), 10).toString() + "px");
            $(".spanName").css("font-size", parseInt((w / 26.2), 10).toString() + "px");
            $("#intro").height(h * .6);
        } else if (w <= 1800) {
            $(".navBottomButton").css("font-size", "42px");
            $(".words").css("font-size", "42px");
            $(".spanName").css("font-size", "42px");
            $("#intro").height(h * .7);
        } else {
            $(".navBottomButton").css("font-size", parseInt((w / 42.8), 10).toString() + "px");
            $(".words").css("font-size", parseInt((w / 42.8), 10).toString() + "px");
            $(".spanName").css("font-size", parseInt((w / 42.8), 10).toString() + "px");
            $("#intro").height(h * .8);
        }
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
        $("#tf").html("<p class=\"pFirst\">My favorite project so far has been this website, so I put it here first. I used static HTML and coded this all from scratch, with minimal outside code (aside from jQuery, of course). Through this I not only expanded my knowledge about the capabilities of JS, but I executed better programming practices and made this site responsive. Before this site, I had not really created anything with total responsiveness in mind. With this project, I tested out many different resolutions to make sure this looked acceptable on all. Additionally, I made sure that the design was consistent across both of the webpages. It features a minimalist design with colors that work well together. Although the site may look modest, it would not be the same site without the JS working under the hood. This makes viewing and interacting with this seemingly simple site a much more pleasant experience. Thanks for visiting, and if you'd like, check out the code on <a href=\"https://github.com/jah01/portfolio1\" target=\"_blank\" class=\"linkSeen\">GitHub</a>!</p></p>");
        imgDiv();
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
        $("#tf").html("<div class=\"pFirst\"><img src=\"img/firstWebsite.svg\" align=\"left\" class=\"projPic imgRounded\"></div><p class=\"pFirst\"><a href=\"https://www.github.com/jah01/firstWebsite\" target=\"_blank\" class=\"linkSeen\">View on GitHub</a><br />This is my first website, created over the summer of 2018. It was the first time I had ever delved into the world of UI and web developing. I had no idea what to expect. I spent over 90 hours creating these web pages from scratch. I used very little JavaScript throughout the project, which came from outside sources. The code itself is messy and I left it how it looked when I finished; I unfortunately never got to cleaning it up, but I use it a bit for reference, so I leave the code just the way it was when I completed it. This is one of my favorite projects because, again, much of this was extremely new. When I began, I barely knew how classes worked, how to import fonts, or how to make any transitions. I'm proud of what I accomplished that summer and it's great to look back and see how much I grew. The biggest problem I faced besides my own inexperience was making sure everything looked nice on different-sized monitors. Although this is not mobile-friendly, I spent a great deal making sure computer screens were able to view the site as it should be viewed.</p>");
        imgDiv();
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
        $("#tf").html("<div class=\"pFirst\"><img src=\"img/wcLanding.svg\" align=\"left\" class=\"projPic imgRounded\"></div><p class=\"pFirst\"><a href=\"https://www.github.com/jah01/WCLanding\" target=\"_blank\" class=\"linkSeen\">View on GitHub</a><br />I made the WeCycle landing page for a friend during the early months of 2020. Although it was not built for mobile and not going to be used, I took a bit of time out of my schedule during the school year to tinker with certain CSS animations dealing with SVGs. This project was based on an app idea my friends had built for fun, and I decided I would make a website (or at least experiment with one). The project itself was extremely difficult because I went in depth with images and animations, beyond what I had ever done before. It was used more as a learning experience than something I would present a product for, but I was very happy with the layout. What I learned from this difficult project was how to use SVGs, fonts, and general style elements. This is not mobile-friendly and some text does not show up on some browsers on Mac. I spent many hours coding this as well as using software to create SVG images, which was something I had never done extensively before, but every element of each image was created by me.</p>");
        imgDiv();
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
        $("#tf").html("<p class=\"pFirst\"><a href=\"https://github.com/jah01/matlab-blackjack\" target=\"_blank\" class=\"linkSeen\">View on GitHub</a><br />In my first semester of college, I created this blackjack game in MATLAB with the help of a classmate. Among other things, I wrote the code for the AI dealer, which allowed for a tougher opponent against the user. The hardest part of this project was finding out how we wanted the game structured. It was the first project that I worked together with somebody, so that posed a challenge as well. I learned the syntax of MATLAB and also how things are stored. It was a great learning experience for me because I did not have experience in this language that is used in many disciplines of engineering.</p>");
        imgDiv();
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
        $("#tf").html("<div class=\"pFirst\"><img src=\"img/dewit.svg\" align=\"left\" class=\"projPic imgRounded\"></div><p class=\"pFirst\"><a href=\"https://www.github.com/jah01/Dewit\" target=\"_blank\" class=\"linkSeen\">View on GitHub</a><br />The final project I have showcased here is an Android app titled Dewit. A couple of my friends and I are currently creating this app to help people complete daily tasks and reach their goals. It is coded using Flutter and Dart. This was the first time any of us had really gone in depth with Android Studio and our first real experience creating an app. The hardest part of this project is lack of experience.</p>");
        imgDiv();
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
    
    
    $(window).bind('resize', function() {
        //$("#arrow").offset({bottom: 0, left: $(window).width});
        //resizeMain();
        resizeText();
        //sizePicSpacing();
        resizeNavBottomSpace();
        resizeBeforeFooter();
        imgDiv();
        //positionArrow();
    }).trigger('resize');
    
    
});
