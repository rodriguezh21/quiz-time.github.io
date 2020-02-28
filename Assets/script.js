$(document).ready(function(){
    $('.first').hide();
    $('.second').hide();
    $('.third').hide();
    $('.fourth').hide();

    $(".paragraph .start-btn ").click(function(){
        $(this).parents(".paragraph").hide();
        $(".first").show()
    });

    $(".first-c").on("click", function() {
        alert("Correct!");
        $(".first").hide();
        $(".second").show()
    });

    $(".first-a, .first-b, .first-d").on("click", function() {
        alert("Wrong, try again!")
    })

    $(".second-d").on("click", function() {
        alert("Correct!");
        $(".second").hide();
        $(".third").show()
    });
    $(".second-a, .second-b, .second-c").on("click", function() {
        alert("Wrong, try again!")
    })

    $(".third-c").on("click", function() {
        alert("Correct!");
        $(".third").hide();
        $(".fourth").show()
    });
    $(".third-a, .third-b, .third-d").on("click", function() {
        alert("Wrong, try again!")
    })

    $(".fourth-a").on("click", function() {
        alert("Correct!");
        $(".fourth").hide();
        $(".input").show()
    });
    $(".fourth-b, .fourth-c, .fourth-d").on("click", function() {
        alert("Wrong, try again!")
    })
    

    
    });
    
    

