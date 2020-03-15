// using hide and show functions throughout this assignment
$(document).ready(function () {
    $("#correct-answer").hide();
    $("#wrong-answer").hide();
    $("#timer").hide();
    $("#highscore").hide();
    $("#read-only-box").hide();
    $(".play-again-btn").hide()

    $('.first').hide();
    $('.second').hide();
    $('.third').hide();
    $('.fourth').hide();
    $('#input').hide()

    // sample leaderboard
    var leaderboard = [
        {
            name: 'cmm',
            score: 43
         },
         {
             name: 'hr',
             score: 55
         },
         {
            name: 'hdh',
            score: 44
        }
    ]
    // sets timer to 60 seconds
    var timeLeft = 60;
    var elem = document.getElementById('timer');
    // var penaltyTime = 10 * 1000;
    //var timerId = setInterval(countdown, 1000);
    var timerId;

    
    // starts countdown
    function countdown() {
        if (timeLeft <= 0) {
            clearTimeout(timerId);
            result();

        } else {
            elem.innerHTML = timeLeft + ' seconds remaining';
            timeLeft--;
        }
    }
    // when game is over, this button restarts it
    $(".play-again-btn").click(function(){
        $(this).parents(".intro").hide();
        //clearTimeout(timerId);
        timeLeft = 60;
        timerId = setInterval(countdown, 1000);
        $(".first").show()
        $("#timer").show()
        $("#input").hide();
        $("#highscore").hide();
        $(".play-again-btn").hide()
    })
    // start button hides the intro and shows the first question as well as the timer
    $(".intro .start-btn ").click(function () {
        $(this).parents(".intro").hide();
        timerId = setInterval(countdown, 1000);
        $(".first").show();
        $("#timer").show();
    });
    // correct answer for Q1
    $(".first-c").on("click", function () {
        $(".first").hide();
        $(".second").show();
        $("#correct-answer").slideDown(400).delay(1000).fadeOut(400);
    });
    // wrong answers for Q1
    $(".first-a, .first-b, .first-d").on("click", function () {    
        $("#wrong-answer").slideDown(400).delay(1000).fadeOut(400);
        timeLeft = timeLeft - 10;
    })
    // correct answer for Q2
    $(".second-d").on("click", function () {
        $(".second").hide();
        $(".third").show();
        $("#correct-answer").slideDown(400).delay(1000).fadeOut(400);
    });
    // wrong answers for Q2
    $(".second-a, .second-b, .second-c").on("click", function () {
        $("#wrong-answer").slideDown(400).delay(1000).fadeOut(400);
        timeLeft = timeLeft - 10;
    })
    // correct answer for Q3
    $(".third-c").on("click", function () {
        $(".third").hide();
        $(".fourth").show()
        $("#correct-answer").slideDown(400).delay(1000).fadeOut(400);
    });
    // wrong answers for Q3
    $(".third-a, .third-b, .third-d").on("click", function () {
        $("#wrong-answer").slideDown(400).delay(1000).fadeOut(400);
        timeLeft = timeLeft - 10;
    })
    // correct answer for Q4
    $(".fourth-a").on("click", function () {
        $(".fourth").hide();
        $("#correct-answer").slideDown(400).delay(1000).fadeOut(400);
        $("#timer").hide();
        $("#input").show();
        result();

    });
    // worng answers for Q4
    $(".fourth-b, .fourth-c, .fourth-d").on("click", function () {
        $("#wrong-answer").slideDown(400).delay(1000).fadeOut(400);
        timeLeft = timeLeft - 10;
    })
// when game is over, displays input for initials and a submit button
function result(){
    clearInterval(timerId);
    $("#submit-btn").on("click", function () {
        
    // collects user input and time left and displays it on leaderboard
    var initials = $("#myText").val()
    $("#myText").val("");
        function saveInitialsToLeaderBoard() {
            var userInfo = {name:'',score:null}
            userInfo.name = initials
            userInfo.score = timeLeft
            leaderboard.push(userInfo)
        }
        // clears input 
        function createLeaderBoard(){
            $("#user-input").empty();
            leaderboard.forEach(leader => {
                var li = document.createElement('li')
                li.innerHTML = `${leader.name}: ${leader.score}`
                $("#user-input").append(li)
            })
        }
        saveInitialsToLeaderBoard()
        createLeaderBoard()
        $("#input").hide();
        $("#highscore").show();
        $(".play-again-btn").show()
        clearTimeout() 
    }); 
}    
});
