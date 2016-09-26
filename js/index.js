$(document).ready(function() {

  //define variables
  var gameChoices = ["rock", "paper", "scissors"];
  var userSelection;
  var computerChoice;
  var roundCount = 1;
  var userScore = 0;
  var computerScore = 0;
  var result;

  $("#userScore").html(userScore);
  $("#computerScore").html(computerScore);
  $("#roundCount").html(roundCount);

  //Runs Game on the click!
  $(".buttonSelection").on("click", function() {

    userSelection = $(this).attr('value');
    computerChoice = Math.floor(Math.random() * gameChoices.length);

    if (computerChoice === 0 && userSelection === "rock") {
      result = 'same';
    } else if (computerChoice === 1 && userSelection === "paper") {
      result = 'same';
    } else if (computerChoice === 2 && userSelection === "scissors") {
      result = 'same';
    } else if (computerChoice === 0 && userSelection === "paper") {
      result = 'won';
      increaseUserScore();
    } else if (computerChoice === 1 && userSelection === "scissors") {
      result = 'won';
      increaseUserScore();
    } else if (computerChoice === 2 && userSelection === "rock") {
      result = 'won';
      increaseUserScore();
    } else if (computerChoice === 0 && userSelection === "scissors") {
      result = 'lose'
      increaseCompScore();
    } else if (computerChoice === 1 && userSelection === "rock") {
      result = 'lose';
      increaseCompScore();
    } else if (computerChoice === 2 && userSelection === "paper") {
      result = 'lose';
      increaseCompScore();
    };
    animate();
    increaseRound();
    $("#userScore").html(userScore);
    $("#computerScore").html(computerScore);
    $("#roundCount").html(roundCount);
  }); // END GAME LOGIC



  function animate() {
    setTimeout(function () {
      $(function(){
        $(".buttonSelection").attr("disabled", true);
      });
      userPick();
      compPick();
      setTimeout(function () {
        if (result === 'won') {
          $(document).trigger("add-alerts", {
            message: "You Won!",
            priority: "success"
          });
        } else if (result === 'lose') {
          $(document).trigger("add-alerts", {
            message: "You Lost, Computer was Smarter!",
            priority: "danger"
          });
        } else if (result === 'same') {
          $(document).trigger("add-alerts", {
            message: "Same Choice, Try again",
            priority: "info"
          });
        };
        console.log(result);
        setTimeout(function () {
          console.log('reset');
          $(document).trigger("clear-alerts");
          $(function(){
            $('#userInput').empty();
            $('#computerInput').empty();
          });
          $(".buttonSelection").attr("disabled", false);
        }, 3500);
      }, 1400);
    }, 400);
  };//End animate

  function userPick() {
    if (userSelection === "rock") {
      $('#userInput').append('<img class="img-responsive animated slideInLeft" src="images/user-rock.png" alt="" />');
    } else if (userSelection === "paper") {
      $('#userInput').append('<img class="img-responsive animated slideInLeft" src="images/user-paper.png" alt="" />');
    } else if (userSelection === "scissors") {
      $('#userInput').append('<img class="img-responsive animated slideInLeft" src="images/user-scissors.png" alt="" />');
    }
  };


  function compPick() {
    if (computerChoice === 0) {
      $('#computerInput').append('<img class="img-responsive animated slideInRight" src="images/comp-rock.png" alt="" />');
    } else if (computerChoice === 1) {
      $('#computerInput').append('<img class="img-responsive animated slideInRight" src="images/comp-paper.png" alt="" />');
    } else if (computerChoice === 2) {
      $('#computerInput').append('<img class="img-responsive animated slideInRight" src="images/comp-scissors.png" alt="" />');
    }
  };


  function increaseRound() {
    roundCount++;
  };

  function increaseUserScore() {
    userScore++;
  };

  function increaseCompScore() {
    computerScore++;
  };

  //reset stats
  $("#reset").on("click", function() {
    $("#userScore").html(userScore = 0);
    $("#computerScore").html(computerScore = 0);
    $("#roundCount").html(roundCount = 1);
  });
});
