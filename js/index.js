$(document).ready(function() {
// Hide alerts from start

  var gameChoices = ["rock", "paper", "scissors"]
  var userSelection;
  var computerChoice;
  var roundCount = 1;
  var userScore = 0;
  var computerScore =0;


  //Runs Game on the click!

  $("#roundCount").html(roundCount);
  $("#userScore").html(userScore);
  $("#computerScore").html(computerScore);

  $(".buttonSelection").on("click", function () {

    userSelection = $(this).attr('value');
    computerChoice = Math.floor(Math.random() * gameChoices.length);

  if (computerChoice === 0 && userSelection === "rock") {
    roundCount + 1
    console.log('same choice');
  };

  if (computerChoice === 1 && userSelection === "paper") {
    console.log('same choice');
  };

  if (computerChoice === 2 && userSelection === "scissors") {
    console.log('same choice');
  };

  if (computerChoice === 0 && userSelection === "paper") {
    console.log("You Won");
  };

  if (computerChoice === 1 && userSelection === "scissors") {
    console.log("You Won");
  };

  if (computerChoice === 2 && userSelection === "rock") {
    console.log("You Won");
  };

  if (computerChoice == 0 && userSelection === "scissors") {
    console.log('You Lose');
  };

  if (computerChoice === 1 && userSelection === "rock") {
    console.log('You Lose');
  };

  if (computerChoice === 2 && userSelection === "paper") {
    console.log('You Lose');
  };

  }); // END GAME LOGIC

  $("#reset").on("click", function() {
    $("#userScore").html(userScore = 0)
    $("#computerScore").html(computerScore = 0)
    $("#roundCount").html(roundCount = 1)
  });



});
