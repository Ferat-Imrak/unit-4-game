var randomResult;
var win = 0;
var lost = 0;
var previous = 0;



var startGame = function () {

    $(".container1").empty();

    var images = ["assets/images/cry1.jpg", "assets/images/cry2.jpg", "assets/images/cry3.jpg", "assets/images/cry4.jpg"]

    randomResult = Math.floor(Math.random() * 101) + 19;

    $("#result").html(randomResult);

    for (var i = 0; i < 4; i++) {

        var random = Math.floor(Math.random() * 11) + 1;
       

        var container = $("<div>");

        container.attr({

            "class": 'container',

            "data-random": random
        });

        container.css({
            "background-image":"url('" + (images[i]) + "')",
            "background-size":"cover"

        });

        $(".container1").append(container);

    }

    $("#previous").html("Your total score is: ");
    $("#previousnum").html(previous);
}



startGame();



$(document).on("click", ".container", function () {

    var num = parseInt($(this).attr('data-random'));

    previous += num;
    
    $("#previous").html("Your total score is: ");
    
    $("#previousnum").html(previous);



    if (previous > randomResult) {

        lost++;

        $("#wl").html("You lost!")

        $("#lost").html("Losses: " + lost)

        previous = 0;

        startGame();
    }

    else if (previous === randomResult) {

        win++;

        $("#wl").html("You won!!")

        $("#win").html("Wins: " + win);

        previous = 0;

        startGame();
    }


})

