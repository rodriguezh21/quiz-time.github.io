$(document).ready(function(){
    $("#correct-answer").hide()
    $("#wrong-answer").hide()
    $("#timer").hide()
    $("#highscore").hide()

    $('.first').hide();
    $('.second').hide();
    $('.third').hide();
    $('.fourth').hide();
    $('#input').hide()

    var timeLeft = 60;
    var elem = document.getElementById('timer');
    var penatlyTime = 10 * 1000;
    var timerId = setInterval(countdown, 1000);
    
    function countdown() {
      if (timeLeft <= 0) {
        clearTimeout(timerId);
        
      } else {
        elem.innerHTML = timeLeft + ' seconds remaining';
        timeLeft--;
      }
    }  
    

    $(".intro .start-btn ").click(function(){
        $(this).parents(".intro").hide();
        $(".first").show()
        $("#timer").show()
    });

    $(".first-c").on("click", function() {
        $(".first").hide();
        $(".second").show();
        $("#correct-answer").slideDown(400).delay(1000).fadeOut(400);
        
        
    });

    $(".first-a, .first-b, .first-d").on("click", function() {
        $("#wrong-answer").slideDown(400).delay(1000).fadeOut(400);
        $("#wrong-answer").on("click", function(){
           $("#timer").timeLeft -= penatlyTime;
        })
        
    })

    $(".second-d").on("click", function() {
        $(".second").hide();
        $(".third").show();
    $("#correct-answer").slideDown(400).delay(1000).fadeOut(400);        
    });

    $(".second-a, .second-b, .second-c").on("click", function() {
        $("#wrong-answer").slideDown(400).delay(1000).fadeOut(400);
    })

    $(".third-c").on("click", function() {
        $(".third").hide();
        $(".fourth").show()
        $("#correct-answer").slideDown(400).delay(1000).fadeOut(400);        
    });
    $(".third-a, .third-b, .third-d").on("click", function() {
        $("#wrong-answer").slideDown(400).delay(1000).fadeOut(400);
    })

    $(".fourth-a").on("click", function() {
        $(".fourth").hide();
        $("#correct-answer").slideDown(400).delay(1000).fadeOut(400);
        $("#timer").hide()
        $("#input").show()
        
    });
    $(".fourth-b, .fourth-c, .fourth-d").on("click", function() {
        $("#wrong-answer").slideDown(400).delay(1000).fadeOut(400);
    })
    
    $("#submit-btn").on("click", function(){
        $("#input").hide()
        $("#highscore").show()
        $("#text").readOnly;
        $("#text").show();

    })   
    

    
    });
    
    

