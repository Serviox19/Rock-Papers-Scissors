$(document).ready(function() {

  //define variables

  var gameChoices = ["rock", "paper", "scissors"];
  var userSelection;
  var computerChoice;
  var roundCount = 1;
  var userScore = 0;
  var computerScore = 0;

  //Runs Game on the click!

  $("#userScore").html(userScore);
  $("#computerScore").html(computerScore);
  $("#roundCount").html(roundCount);

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
    compPick();
    userPick();
    increaseRound();
    $("#userScore").html(userScore);
    $("#computerScore").html(computerScore);
    $("#roundCount").html(roundCount);
  }); // END GAME LOGIC

  function compPick() {
    if (computerChoice === 0) {
      console.log('comp = rock');
    } else if (computerChoice === 1) {
      console.log('comp = paper');
    } else if (computerChoice === 2) {
      console.log('comp = scissors');
    }
  };

  function userPick() {
    if (userSelection === "rock") {
      console.log('user = rock');
    } else if (userSelection === "paper") {
      console.log('user = paper');
    } else if (userSelection === "scissors") {
      console.log('user = scissors');
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
