//written (with ♥)
//by Joseph Hilber
//beginning 4/25/2020

$(document).ready(function() {
    
    
    
    //it will be critical to make sure that #tf stuff looks nice when we really get into it
    //update: we really got into it, and now it looks incredible
    var resizeText = function() {
        
        var w = $(window).width();
        if (w < 500) {
            $("#navTop").css("font-size", "14px");
            $("#tf").css("font-size", "12px");
            $("#tf").css("line-height", "20px");
            $("footer").css("font-size", "12px");
        } else if (w <= 1000) {
            $("#navTop").css("font-size", parseInt((w / 35.8), 10).toString() + "px");
            //$("#tf").css("font-size", parseInt((w / 49), 10).toString() + "px");
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
    
    
    
    //this is perfect; good job
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
        
        
        
        var textWidth = $("#bio").width() + $("#educ").width() + $("#exp").width() + $("#skills").width() + $("#proj").width();
        
        $(".navBottomSpace").width((w - textWidth) / 4);
        //$("#name").html($("#bio").width());
        
//        $(".navBottomSpace").width(1000);
//        
//        if (w < 500) {
//            $(".navBottomButton").css("font-size", "19px");
//            $("#hello").css("font-size", "19px");
//            $("#spanName").css("font-size", "19px");
//        } else if (w <= 1000) {
//            $(".navBottomButton").css("font-size", parseInt((w / 26.2), 10).toString() + "px");
//            $("#hello").css("font-size", parseInt((w / 26.2), 10).toString() + "px");
//            $("#spanName").css("font-size", parseInt((w / 26.2), 10).toString() + "px");
//        } else if (w <= 1800) {
//            $(".navBottomButton").css("font-size", "42px");
//            $("#hello").css("font-size", "42px");
//            $("#spanName").css("font-size", "42px");
//        } else {
//            $(".navBottomButton").css("font-size", parseInt((w / 42.8), 10).toString() + "px");
//            $("#hello").css("font-size", parseInt((w / 42.8), 10).toString() + "px");
//            $("#spanName").css("font-size", parseInt((w / 42.8), 10).toString() + "px");
//        }
        
    };

    
    
    //sources:
    //https://css-tricks.com/snippets/jquery/smooth-scrolling/
    //https://codepen.io/HZaccaro/pen/zvrgLb
    $(function() {
        // This will select everything with the class smoothScroll
        // This should prevent problems with carousel, scrollspy, etc...
        $('.smoothScroll').click(function() {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                this.preventDefault();
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top
                    }, 100); // The number here represents the speed of the scroll in milliseconds
                    return false;
                }
            }
        });
    });
    
    
    
//    $("#navBottom > .navBottomButton").click(function() {
//        if ($(this).attr("id") == "bio") {
//            $("#tf").html("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla cursus rutrum quam id dapibus. Etiam efficitur enim sit amet venenatis blandit. Praesent non massa nunc. Cras cursus dui lacus, sed fringilla dolor accumsan id. Suspendisse nec pretium massa. Sed in euismod nunc, non auctor arcu. Proin tristique urna urna, nec fringilla lorem elementum ut. Etiam condimentum pharetra lacus lacinia condimentum. Vestibulum imperdiet dui congue pretium dignissim. In iaculis vitae arcu id viverra. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi posuere nunc sit amet urna dictum tempor. Pellentesque nec tincidunt odio. Proin fringilla dictum mi tristique scelerisque. Quisque non lectus tellus.<br /><br />&emsp;&emsp;Nam dignissim et ex sit amet facilisis. Nunc efficitur mi mauris, eu lacinia nulla sollicitudin non. Phasellus porttitor magna nec magna congue varius. Duis ut tellus eu nisl sodales mattis. Maecenas ac tristique arcu. Sed ac sodales purus. In placerat lorem nec augue tincidunt fringilla. Praesent feugiat molestie eros, et tristique nulla. Maecenas pretium nulla id nulla placerat, nec maximus neque ornare. Aliquam posuere dignissim bibendum. Donec a tellus nec est feugiat molestie quis ut dui.<br /><br />&emsp;&emsp;Cras tincidunt ipsum ut est dignissim malesuada. Vestibulum ut orci posuere, pretium tellus fringilla, sagittis massa. Quisque id tristique purus, ac vestibulum risus. Sed risus mauris, faucibus molestie fringilla vel, elementum ut arcu. Nunc scelerisque tellus semper dapibus convallis. Aliquam porta vestibulum egestas. Aenean condimentum justo metus, quis bibendum erat vulputate in. Maecenas elementum, massa vitae pulvinar feugiat, neque sem pulvinar lectus, sed fermentum felis tortor posuere ante. Sed a viverra est. Morbi vulputate laoreet nulla, ut tincidunt ligula euismod at. Fusce est dui, sollicitudin id nibh non, imperdiet feugiat ante. Nulla a tempus ante. Aenean interdum lobortis massa id faucibus. Nulla in elementum leo, et porttitor mi.<br /><br />&emsp;&emsp;Donec quis orci a dolor efficitur congue semper ut mauris. Fusce convallis malesuada libero, a tempus urna maximus sed. Vestibulum euismod lectus eu ligula blandit euismod. Pellentesque posuere vehicula lectus ut commodo. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec nisi sapien, maximus at porta quis, placerat sit amet turpis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer commodo efficitur eleifend. Praesent egestas orci sed justo posuere, quis aliquam eros lobortis. Suspendisse varius erat id ex tincidunt iaculis. Aliquam viverra felis sed est iaculis lacinia. Maecenas et neque a tellus condimentum auctor quis ut justo. Ut efficitur velit eget nunc laoreet finibus. Nullam tempor, dolor sed sollicitudin vehicula, ligula nisi posuere dui, sit amet ultrices elit purus sit amet turpis. Nullam consectetur eros vel lectus porta consectetur.<br /><br />&emsp;&emsp;In hac habitasse platea dictumst. Suspendisse potenti. Praesent bibendum est elit, in suscipit ex convallis sit amet. Mauris eu vestibulum enim. Cras eget rutrum eros. Curabitur convallis, sem et consectetur tempus, odio diam vestibulum nibh, at vehicula ante massa in orci. Mauris a turpis mollis, sodales purus et, tincidunt erat. Sed non dignissim ipsum, luctus tristique arcu. Nunc sit amet mauris elementum, aliquam arcu id, congue justo. Mauris luctus mi nisi, vel vehicula nisl interdum nec. In vulputate malesuada lectus sed eleifend. Donec dolor nulla, auctor ac porta id, accumsan sed ante. Maecenas eu hendrerit ex. Aenean placerat, nibh vitae aliquam condimentum, odio est dapibus tellus, nec consequat nisi quam vel leo. Suspendisse gravida dolor libero.");
//        } else if ($(this).attr("id") == "educ") {
//            $("#tf").html("education");
//        } else if ($(this).attr("id") == "exp") {
//            $("#tf").html("experience");
//        } else if ($(this).attr("id") == "skills") {
//            $("#tf").html("skills");
//        } else if ($(this).attr("id") == "proj") {
//            $("#tf").html("projects");
//        }
//        var str = "#" + $(this).attr("id");
//        $("#name").html(str);
//        $("\"" + str + "\"").css("color", "#707070").css("border-bottom", "4px solid #bdd89f").css("cursor", "default");
//        $("#navBottom > .navBottomButton:not(str)").css("color", "#9d9d9d").css("border-bottom", "4px solid rgba(0, 0, 0, 0)").css("cursor", "pointer").css("cursor", "pointer").hover(function() {
//            $(this).css("border-bottom", "4px solid #bdd89f");
//        }, function() {
//            $(this).css("border-bottom", "4px solid rgba(0, 0, 0, 0)");
//        });
//    });
    
    
    
    
    $("#bio").click(function() {
        $("#tf").html("<p class=\"pFirst\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla cursus rutrum quam id dapibus. Etiam efficitur enim sit amet venenatis blandit. Praesent non massa nunc. Cras cursus dui lacus, sed fringilla dolor accumsan id. Suspendisse nec pretium massa. Sed in euismod nunc, non auctor arcu. Proin tristique urna urna, nec fringilla lorem elementum ut. Etiam condimentum pharetra lacus lacinia condimentum. Vestibulum imperdiet dui congue pretium dignissim. In iaculis vitae arcu id viverra. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi posuere nunc sit amet urna dictum tempor. Pellentesque nec tincidunt odio. Proin fringilla dictum mi tristique scelerisque. Quisque non lectus tellus.</p><p>Nam dignissim et ex sit amet facilisis. Nunc efficitur mi mauris, eu lacinia nulla sollicitudin non. Phasellus porttitor magna nec magna congue varius. Duis ut tellus eu nisl sodales mattis. Maecenas ac tristique arcu. Sed ac sodales purus. In placerat lorem nec augue tincidunt fringilla. Praesent feugiat molestie eros, et tristique nulla. Maecenas pretium nulla id nulla placerat, nec maximus neque ornare. Aliquam posuere dignissim bibendum. Donec a tellus nec est feugiat molestie quis ut dui.</p><p>Cras tincidunt ipsum ut est dignissim malesuada. Vestibulum ut orci posuere, pretium tellus fringilla, sagittis massa. Quisque id tristique purus, ac vestibulum risus. Sed risus mauris, faucibus molestie fringilla vel, elementum ut arcu. Nunc scelerisque tellus semper dapibus convallis. Aliquam porta vestibulum egestas. Aenean condimentum justo metus, quis bibendum erat vulputate in. Maecenas elementum, massa vitae pulvinar feugiat, neque sem pulvinar lectus, sed fermentum felis tortor posuere ante. Sed a viverra est. Morbi vulputate laoreet nulla, ut tincidunt ligula euismod at. Fusce est dui, sollicitudin id nibh non, imperdiet feugiat ante. Nulla a tempus ante. Aenean interdum lobortis massa id faucibus. Nulla in elementum leo, et porttitor mi.</p><p>Donec quis orci a dolor efficitur congue semper ut mauris. Fusce convallis malesuada libero, a tempus urna maximus sed. Vestibulum euismod lectus eu ligula blandit euismod. Pellentesque posuere vehicula lectus ut commodo. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec nisi sapien, maximus at porta quis, placerat sit amet turpis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer commodo efficitur eleifend. Praesent egestas orci sed justo posuere, quis aliquam eros lobortis. Suspendisse varius erat id ex tincidunt iaculis. Aliquam viverra felis sed est iaculis lacinia. Maecenas et neque a tellus condimentum auctor quis ut justo. Ut efficitur velit eget nunc laoreet finibus. Nullam tempor, dolor sed sollicitudin vehicula, ligula nisi posuere dui, sit amet ultrices elit purus sit amet turpis. Nullam consectetur eros vel lectus porta consectetur.</p><p>In hac habitasse platea dictumst. Suspendisse potenti. Praesent bibendum est elit, in suscipit ex convallis sit amet. Mauris eu vestibulum enim. Cras eget rutrum eros. Curabitur convallis, sem et consectetur tempus, odio diam vestibulum nibh, at vehicula ante massa in orci. Mauris a turpis mollis, sodales purus et, tincidunt erat. Sed non dignissim ipsum, luctus tristique arcu. Nunc sit amet mauris elementum, aliquam arcu id, congue justo. Mauris luctus mi nisi, vel vehicula nisl interdum nec. In vulputate malesuada lectus sed eleifend. Donec dolor nulla, auctor ac porta id, accumsan sed ante. Maecenas eu hendrerit ex. Aenean placerat, nibh vitae aliquam condimentum, odio est dapibus tellus, nec consequat nisi quam vel leo. Suspendisse gravida dolor libero.</p>");
        
        $("#bio").css("color", "#707070").css("border-bottom", "4px solid rgba(189, 216, 159, 1)").css("cursor", "default").hover(function () {
                $(this).css("border-bottom", "4px solid rgba(189, 216, 159, 1)");
            }
        );
        
        $(".navBottomButton:not(#bio)").css("color", "#9d9d9d").css("border-bottom", "4px solid rgba(0, 0, 0, 0)").css("cursor", "pointer").hover(function () {
                $(this).css("border-bottom", "4px solid rgba(189, 216, 159, 1)");
            }, function () {
                $(this).css("border-bottom", "4px solid rgba(0, 0, 0, 0)");
            }
        );
        
    });
    
    $("#educ").click(function() {
        $("#tf").html("this is education");
        
        $("#educ").css("color", "#707070").css("border-bottom", "4px solid rgba(189, 216, 159, 1)").css("cursor", "default").hover(function () {
                $(this).css("border-bottom", "4px solid rgba(189, 216, 159, 1)");
            }
        );
        
        $(".navBottomButton:not(#educ)").css("color", "#9d9d9d").css("border-bottom", "4px solid rgba(0, 0, 0, 0)").css("cursor", "pointer").hover(function () {
                $(this).css("border-bottom", "4px solid rgba(189, 216, 159, 1)");
            }, function () {
                $(this).css("border-bottom", "4px solid rgba(0, 0, 0, 0)");
            }
        );
    });
    
    $("#exp").click(function() {
        $("#tf").html("this is exp");
        
        $("#exp").css("color", "#707070").css("border-bottom", "4px solid rgba(189, 216, 159, 1)").css("cursor", "default").hover(function () {
                $(this).css("border-bottom", "4px solid rgba(189, 216, 159, 1)");
            }
        );
        
        $(".navBottomButton:not(#exp)").css("color", "#9d9d9d").css("border-bottom", "4px solid rgba(0, 0, 0, 0)").css("cursor", "pointer").hover(function () {
                $(this).css("border-bottom", "4px solid rgba(189, 216, 159, 1)");
            }, function () {
                $(this).css("border-bottom", "4px solid rgba(0, 0, 0, 0)");
            }
        );
    });
    
    $("#skills").click(function() {
        $("#tf").html("this is skills");
        
        $("#skills").css("color", "#707070").css("border-bottom", "4px solid rgba(189, 216, 159, 1)").css("cursor", "default").hover(function () {
                $(this).css("border-bottom", "4px solid rgba(189, 216, 159, 1)");
            }
        );
        
        $(".navBottomButton:not(#skills)").css("color", "#9d9d9d").css("border-bottom", "4px solid rgba(0, 0, 0, 0)").css("cursor", "pointer").hover(function () {
                $(this).css("border-bottom", "4px solid rgba(189, 216, 159, 1)");
            }, function () {
                $(this).css("border-bottom", "4px solid rgba(0, 0, 0, 0)");
            }
        );
    });
    
    $("#proj").click(function() {
        $("#tf").html("this is proj");
        
        $("#proj").css("color", "#707070").css("border-bottom", "4px solid rgba(189, 216, 159, 1)").css("cursor", "default").css("cursor", "default").hover(function () {
                $(this).css("border-bottom", "4px solid rgba(189, 216, 159, 1)");
            }
        );
        
        $(".navBottomButton:not(#proj)").css("color", "#9d9d9d").css("border-bottom", "4px solid rgba(0, 0, 0, 0)").css("cursor", "pointer").hover(function () {
                $(this).css("border-bottom", "4px solid rgba(189, 216, 159, 1)");
            }, function () {
                $(this).css("border-bottom", "4px solid rgba(0, 0, 0, 0)");
            }
        );
    });
    
//    if (!($(".navBottomButton").css("color") == "#707070")) {
//        $(this).on({
//            mouseenter: function () {
//                $(this).css("border-bottom", "4px solid rgba(189, 216, 159, 1)");
//            },
//            mouseleave: function () {
//                    $(this).css("border-bottom", "4px solid rgba(0, 0, 0, 0)");
//            }
//        });
//    }
    
    
    
    
    
    
//    $(".navBottomButton").click(function() {
//        var str = $(this).attr("id");
//        if (str == "bio") {
//            $("#tf").html("this is bio");
//        } else if(str == "educ") {
//            $("#tf").html("this is educ");
//        } else if(str == "exp") {
//            $("#tf").html("this is exp");
//        } else if(str == "skills") {
//            $("#tf").html("this is skills");
//        } else if(str == "proj") {
//            $("#tf").html("this is proj");
//        }
//        
//        $(this).css("color", "#707070").css("border-bottom", "4px solid rgba(189, 216, 159, 1)").css("cursor", "default").hover(function () {
//                $(this).css("border-bottom", "4px solid rgba(189, 216, 159, 1)");
//            }
//        );
//        
//        $(".navBottomButton:not(this)").css("color", "#9d9d9d").css("border-bottom", "4px solid rgba(0, 0, 0, 0)").css("cursor", "pointer").hover(function () {
//                $(this).css("border-bottom", "4px solid rgba(189, 216, 159, 1)");
//            }, function () {
//                $(this).css("border-bottom", "4px solid rgba(0, 0, 0, 0)");
//            }
//        );
//    });
    
    
//    $("#name").html($("#buffer").offset().top);
    
//    $(window).bind('hashchange',function(event){
//    var hash = location.hash.replace('#','');
//    if(hash == '') $(window).scrollTop(lastPos);
//        
//});
    
//    var resizeScroll = function() {
//        $("#arrow").click(function() {
//            $(window).scrollTop($("#buffer").offset().top);
//        });
//        
//        
//    };
    
    //$("#name").html($("#buffer").offset().top);
    
    
    
    var resizeBeforeFooter = function() {
        var h = .05 * $(window).height();
        if (h < 60) {
            h = 60;
        }
        $("#beforeFooter").height(h);
    };
    
    
    
    var resizingTime = function() {
        resizeText();
        sizePicSpacing();
        resizeNavBottomSpace();
        resizeBeforeFooter();
    };
    
    
    
    $(window).bind('resize', function() {
        resizingTime();
    }).trigger('resize');
    
    
    
});
