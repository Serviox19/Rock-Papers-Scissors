$(document).ready(function() {

  var gameChoices = ["rock", "paper", "scissors"]
  var userSelection;
  var computerChoice;
  var roundCount = 1;
  var userScore = 0;
  var computerScore =0;

  //Runs Game on the click!

  $("#roundCount").html(roundCount);

  $(".buttonSelection").on("click", function () {
    userSelection = $(this).attr('value');
      console.log(userSelection);
    computerChoice = Math.floor(Math.random() * gameChoices.length);
      console.log(computerChoice);

    if (computerChoice === 0 && userSelection === "rock") {
    $("#roundCount").html(roundCount = roundCount + 1);
    alert('Same choice, Nobody Wins!');
  };

  if (computerChoice === 1 && userSelection === "paper") {
    $("#roundCount").html(roundCount = roundCount + 1);
    alert('Same choice, Nobody Wins!');
  };

  if (computerChoice === 2 && userSelection === "scissors") {
    $("#roundCount").html(roundCount = roundCount + 1);
    alert('Same choice, Nobody Wins!');
  };

  if (computerChoice === 0 && userSelection === "paper") {
    $("#roundCount").html(roundCount = roundCount + 1);
    $("#userScore").html(userScore = userScore + 1);
    alert('You won!');
  };

  if (computerChoice === 1 && userSelection === "scissors") {
    $("#roundCount").html(roundCount = roundCount + 1);
    $("#userScore").html(userScore = userScore + 1);
    alert('You won!');
  };

  if (computerChoice === 2 && userSelection === "rock") {
    $("#roundCount").html(roundCount = roundCount + 1);
    $("#userScore").html(userScore = userScore + 1);
    alert('You won!');
  };

  if (computerChoice == 0 && userSelection === "scissors") {
    $("#roundCount").html(roundCount = roundCount + 1);
    $("#computerScore").html(computerScore = computerScore + 1);
    alert('Sorry Computer Won!');
  };

  if (computerChoice === 1 && userSelection === "rock") {
    $("#roundCount").html(roundCount = roundCount + 1);
    $("#computerScore").html(computerScore = computerScore + 1);
    alert('Sorry Computer Won!');
  };

  if (computerChoice === 2 && userSelection === "paper") {
    $("#roundCount").html(roundCount = roundCount + 1);
    $("#computerScore").html(computerScore = computerScore + 1);
    alert('Sorry Computer Won!');
  };

  });   

  

});