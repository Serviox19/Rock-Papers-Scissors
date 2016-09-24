$(document).ready(function() {

  //define variables

  var gameChoices = ["rock", "paper", "scissors"];
  var userSelection;
  var computerChoice;
  var roundCount = 1;
  var userScore = 0;
  var computerScore =0;

  //Runs Game on the click!

  $(".buttonSelection").on("click", function () {

    userSelection = $(this).attr('value');
    computerChoice = Math.floor(Math.random() * gameChoices.length);

    if (computerChoice === 0 && userSelection === "rock") {
      console.log('same choice');
    } else if (computerChoice === 1 && userSelection === "paper") {
      console.log('same choice');
    } else if (computerChoice === 2 && userSelection === "scissors") {
      console.log('same choice');
    } else if (computerChoice === 0 && userSelection === "paper") {
      console.log("You Won");
      increaseUserScore();
    } else if (computerChoice === 1 && userSelection === "scissors") {
      console.log("You Won");
      increaseUserScore();
    } else if (computerChoice === 2 && userSelection === "rock") {
      console.log("You Won");
      increaseUserScore();
    } else if (computerChoice == 0 && userSelection === "scissors") {
      console.log('You Lose');
      increaseCompScore();
    } else if (computerChoice === 1 && userSelection === "rock") {
      console.log('You Lose');
      increaseCompScore();
    } else if (computerChoice === 2 && userSelection === "paper") {
      console.log('You Lose');
      increaseCompScore();
    };
      increaseRound();
      console.log(roundCount);
      console.log("Comp Score =" + computerScore);
      console.log("User Score =" + userScore);
  }); // END GAME LOGIC

  function increaseRound() {
    roundCount++;
  };

  function increaseUserScore() {
    userScore++;
  };

  function increaseCompScore() {
    computerScore++;
  };

  $("#roundCount").html(roundCount);
  $("#userScore").html(userScore);
  $("#computerScore").html(computerScore);

  $("#reset").on("click", function() {
    $("#userScore").html(userScore = 0)
    $("#computerScore").html(computerScore = 0)
    $("#roundCount").html(roundCount = 1)
  });
});
