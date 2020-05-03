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
        
        var textWidth = $("#bio").width() + $("#educ").width() + $("#exp").width() + $("#skills").width() + $("#proj").width();
        
        $(".navBottomSpace").width((w - textWidth) / 4);
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
    
    
    $("#bio").click(function() {
        $("#tf").html("<p class=\"pFirst\">My name is Joey, I'm a sophomore at Ohio State, and I am in the CSE major.</p><p>I enjoy working with computer software and writing code, and I have been working in this environment since my first year of high school. I have taken all sorts of programming courses throughout the past five years, created minor side projects, and explored many different areas associated with coding. Outside of coding, I enjoy running, listening to music, and any activities that involve my friends.</p><p>Coding is something I love because creating something out of nothing has always interested me. There's nothing like starting a project with no experience and leading yourself through it. I love using my knowledge of coding to solve problems, but more importantly, make things look appealing. Despite my modest and minimal layout,  it took a great deal of time to make sure everything went where it was supposed to and everything behaves well regardless of resolution (hopefully!). Web design has been one of my favorite things to do when I'm bored or just looking for a challenge recently. I have been coding in HTML and CSS for a couple years now, with breaks in between. I am entirely self-taught when it comes to web design, so even a simple website like this makes me happy; I get to see what I have learned.</p><p>Currently, I am working on an app that tracks goals and habits with my friends over the summer. If you'd like to know more about who I am and what I do, feel free to click on any of the other categories above. Thanks for visiting!</p>");
        
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
        $("#tf").html("<p class=\"pFirst\">My education inclues four years of high school and two full-time semesters at Ohio State.</p><p>I attended New Albany High School in New Albany, Ohio from August 2015 to May 2019. I graduated with honors and above a 4.0 GPA weighted. I ran track for one season and cross country for one season. I recieved a varsity letter for track during my freshman year.</p><p>Currently, I attend Ohio State University. I ahve taken classes here full-time since August 2019. I am an undergrad student in the College of Engineering and working towards a B.S. in Computer Science.</p>");
        
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
        $("#tf").html("<p class=\"pFirst\">Since my first summer of high school, I have been working. I have a bit of experience in the workforce especially when it comes to customer sevice. I have utilized my past experiences from work as a way to better understand how to deal with others and how to work with others, which has matured my view on the world outside of academics and sports. My jobs are as follows:</p><p>Kroger Courtesy Clerk (May 2016-July 2017): With this job, I bagged grocieries, took in carts, cleaned floors, and stocked miscellaneous products. By the time I had finished working there, I knew the isle and location of nearly any product. This was my first job and it taught me how much effort goes into making sure grocery stores run smoothly.</p><p>Kumon of New Albany Employee (October 2016-present): I have been a part of this Kumon for almost three years before I went to college. Over breaks from college, I continue to work here. I mainly prepare the students' weekly work, enter students' data, and work with young children, helping them complete daily activities in math and reading. Working here over the years has taught me many things, namely how to use company software, how to teach children effectively, but also how to listen to children and understand them better.</p><p>Eagles Pizza Employee (July 2017-present): I have worked at this local pizza place for two full years before I went to college. Again, I still work here during school breaks. I do everything from rolling dough, putting on toppings, making sandwiches and salads, waiting on tables, working the register, and more. It's very tight-knit here and I have gotten to enjoy an environment like this, which has made me a better worker under pressure, more developed in customer service, and overall just more prepared for work after college.</p>");
        
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
        $("#tf").html("<p class=\"pFirst\">Throughout the past five years, I have gained a veriety of skills associated with what I plan on doing for my career. I have taken many courses that explore computer science and coding, such as a Xojo class, an intoduction to C++ course, and many Java courses as well. I have learned about and worked with data structures from the Java Collections Framework and also the OSU CSE Components library. A more in-depth look can be seen below.</p><p>Java and C++: I have been coding with these languages since 2016. I have learned about classes, libraries, and data structures. I have dealt with input and output files, try-catch statements, and context-free grammar parsing, among other things. I have three total Ohio State courses dealing with this languages.</p><p>Web languages: I have a soft spot for UI and I love making little projects with HTML and CSS, which I have been doing since 2018. I have also worked with JavaScript (mainly using jQuery) for about half a year. My favorite part about coding the web is that I am 100% self-taught and I love making web pages with minimal help from outside resources.</p><p>Other languages or skills: I have worked in Xojo and I also have experience with Git and Github.</p>");
        
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
        $("#tf").html("<p class=\"pFirst\">This is a section dedicated to information on the projects I have coded on Github. My first project I have on Github is a MATLAB project I worked on with a colleague on for my engineering class working with this language. I decided to add it to Github because it was a great experience dealing with AI and creating something fun. Although I wish I had more time sat aside to create more advanced parts like a GUI, I was still satisfied with how everything turned out. I learned how to test for errors using MATLAB, which was something I had not done before aside from light C++ and Java error checking.</p><p>The second project on Github is this website. This was written with minimal outside code, and I am very happy with that. It took a weekend to code most of this website, which is impressive for me considering that it was the weekend before finals (not my best idea). I continue to work a bit on this, in terms of content, but as far as the layout goes, it is complete (unless I find more fixing to do along the way).</p><p>THe third project I have on Github is a summer project with two of my friends. We're looking to create an app that tracks goals and habits.</p>");
        
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
    
    
    var resizeBeforeFooter = function() {
        var h = .05 * $(window).height();
        if (h < 60) {
            h = 60;
        }
        $("#beforeFooter").height(h);
        $("#contactCards").css("margin-bottom", h.toString() + "px");
    };
    
    
    $(window).bind('resize', function() {
        resizeText();
        sizePicSpacing();
        resizeNavBottomSpace();
        resizeBeforeFooter();
    }).trigger('resize');
    
    
});
