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
      console.log('same choice');
      result = 'same';
    } else if (computerChoice === 1 && userSelection === "paper") {
      console.log('same choice');
      result = 'same';
    } else if (computerChoice === 2 && userSelection === "scissors") {
      console.log('same choice');
      result = 'same';
    } else if (computerChoice === 0 && userSelection === "paper") {
      console.log('you won');
      result = 'won';
      increaseUserScore();
    } else if (computerChoice === 1 && userSelection === "scissors") {
      console.log('you won');
      result = 'won';
      increaseUserScore();
    } else if (computerChoice === 2 && userSelection === "rock") {
      console.log('you won');
      result = 'won';
      increaseUserScore();
    } else if (computerChoice === 0 && userSelection === "scissors") {
      console.log('you lose');
      result = 'lose'
      increaseCompScore();
    } else if (computerChoice === 1 && userSelection === "rock") {
      console.log('you lose');
      result = 'lose';
      increaseCompScore();
    } else if (computerChoice === 2 && userSelection === "paper") {
      console.log('you lose');
      result = 'lose';
      increaseCompScore();
    };
    increaseRound();
    animate();
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
        }
        console.log(result);
        setTimeout(function () {
          //reset
          console.log('reset');
          $(document).trigger("clear-alerts");
        }, 1300);
      }, 1000);
    }, 10);
  }

  function userPick() {
    if (userSelection === "rock") {
      $('#userInput').append('<img class="img-responsive animated slideInLeft" src="images/rock.png" alt="" />');
    } else if (userSelection === "paper") {
      $('#userInput').append('<img class="img-responsive animated slideInLeft" src="images/paper.png" alt="" />');
    } else if (userSelection === "scissors") {
      $('#userInput').append('<img class="img-responsive animated slideInLeft" src="images/scissors.png" alt="" />');
    }
  };


  function compPick() {
    if (computerChoice === 0) {
      $('#computerInput').append('<img class="img-responsive animated slideInRight" src="images/rock.png" alt="" />');
    } else if (computerChoice === 1) {
      $('#computerInput').append('<img class="img-responsive animated slideInRight" src="images/paper.png" alt="" />');
    } else if (computerChoice === 2) {
      $('#computerInput').append('<img class="img-responsive animated slideInRight" src="images/scissors.png" alt="" />');
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
