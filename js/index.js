$(document).ready(function() {

  //define variables
  var gameChoices = ["rock", "paper", "scissors"];
  var userSelection;
  var computerChoice;
  var roundCount = 1;
  var userScore = 0;
  var computerScore = 0;

  $("#userScore").html(userScore);
  $("#computerScore").html(computerScore);
  $("#roundCount").html(roundCount);

  //Runs Game on the click!
  $(".buttonSelection").on("click", function() {

    userSelection = $(this).attr('value');
    computerChoice = Math.floor(Math.random() * gameChoices.length);

    if (computerChoice === 0 && userSelection === "rock") {
      console.log('same choice');
    } else if (computerChoice === 1 && userSelection === "paper") {
      console.log('same choice');
    } else if (computerChoice === 2 && userSelection === "scissors") {
      console.log('same choice');
    } else if (computerChoice === 0 && userSelection === "paper") {
      console.log('you won');
      increaseUserScore();
    } else if (computerChoice === 1 && userSelection === "scissors") {
      console.log('you won');
      increaseUserScore();
    } else if (computerChoice === 2 && userSelection === "rock") {
      console.log('you won');
      increaseUserScore();
    } else if (computerChoice === 0 && userSelection === "scissors") {
      console.log('you lose');
      increaseCompScore();
    } else if (computerChoice === 1 && userSelection === "rock") {
      console.log('you lose');
      increaseCompScore();
    } else if (computerChoice === 2 && userSelection === "paper") {
      console.log('you lose');
      increaseCompScore();
    };
    userPick();
    compPick();
    increaseRound();
    $("#userScore").html(userScore);
    $("#computerScore").html(computerScore);
    $("#roundCount").html(roundCount);
  }); // END GAME LOGIC

  function userPick() {
    if (userSelection === "rock") {
      $('#userInput').append('<img class="img-fluid" src="images/rock.png" alt="" />');
      console.log('user = rock');
    } else if (userSelection === "paper") {
      $('#userInput').append('<img class="img-fluid" src="images/paper.png" alt="" />');
      console.log('user = paper');
    } else if (userSelection === "scissors") {
      $('#userInput').append('<img class="img-fluid" src="images/scissors.png" alt="" />');
      console.log('user = scissors');
    }
  };


  function compPick() {
    if (computerChoice === 0) {
      $('#computerInput').append('<img class="img-fluid" src="images/rock.png" alt="" />');
      console.log('comp = rock');
    } else if (computerChoice === 1) {
      $('#computerInput').append('<img class="img-fluid" src="images/paper.png" alt="" />');
      console.log('comp = paper');
    } else if (computerChoice === 2) {
      $('#computerInput').append('<img class="img-fluid" src="images/scissors.png" alt="" />');
      console.log('comp = scissors');
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
