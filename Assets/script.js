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

    var timeLeft = 60;
    var elem = document.getElementById('timer');
    var penaltyTime = 10 * 1000;
    var timerId = setInterval(countdown, 1000);

    
    
    function countdown() {
        if (timeLeft <= 0) {
            clearTimeout(timerId);

        } else {
            elem.innerHTML = timeLeft + ' seconds remaining';
            timeLeft--;
        }
    }
    
    $(".play-again-btn").click(function(){
        $(this).parents(".intro").hide();
        clearTimeout()
        $(".first").show()
        $("#timer").show()
        $("#input").hide();
        $("#highscore").hide();
        $(".play-again-btn").hide()
    })

    $(".intro .start-btn ").click(function () {
        $(this).parents(".intro").hide();
        $(".first").show()
        $("#timer").show()
    });

    $(".first-c").on("click", function () {
        $(".first").hide();
        $(".second").show();
        $("#correct-answer").slideDown(400).delay(1000).fadeOut(400);


    });

    $(".first-a, .first-b, .first-d").on("click", function () {
        
        $("#wrong-answer").slideDown(400).delay(1000).fadeOut(400);
     

    })

    $(".second-d").on("click", function () {
        $(".second").hide();
        $(".third").show();
        $("#correct-answer").slideDown(400).delay(1000).fadeOut(400);
    });

    $(".second-a, .second-b, .second-c").on("click", function () {
        $("#wrong-answer").slideDown(400).delay(1000).fadeOut(400);
        
    })

    $(".third-c").on("click", function () {
        $(".third").hide();
        $(".fourth").show()
        $("#correct-answer").slideDown(400).delay(1000).fadeOut(400);
    });
    $(".third-a, .third-b, .third-d").on("click", function () {
        $("#wrong-answer").slideDown(400).delay(1000).fadeOut(400);
    })

    $(".fourth-a").on("click", function () {
        $(".fourth").hide();
        $("#correct-answer").slideDown(400).delay(1000).fadeOut(400);
        $("#timer").hide()
        $("#input").show()


    });
    $(".fourth-b, .fourth-c, .fourth-d").on("click", function () {
        $("#wrong-answer").slideDown(400).delay(1000).fadeOut(400);

    })



    $("#submit-btn").on("click", function (e) {
        var initials = $("#myText").val()
        function saveInitialsToLeaderBoard() {
            var userInfo = {name:'',score:null}
            userInfo.name = initials
            userInfo.score = timeLeft
            leaderboard.push(userInfo)
        }
        function createLeaderBoard(){
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
        
    })



});



