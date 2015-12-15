$(document).ready(function() {
// Hide alerts from start
  $("#sameChoice").hide();
  $("#winAlert").hide();
  $("#loseAlert").hide();

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
    $("#sameChoice").hide();
    $("#winAlert").hide();
    $("#loseAlert").hide();

    userSelection = $(this).attr('value');
    computerChoice = Math.floor(Math.random() * gameChoices.length);

    if (computerChoice === 0 && userSelection === "rock") {
    $("#roundCount").html(roundCount = roundCount + 1);
    $("#sameChoice").show();
  };

  if (computerChoice === 1 && userSelection === "paper") {
    $("#roundCount").html(roundCount = roundCount + 1);
    $("#sameChoice").show();
  };

  if (computerChoice === 2 && userSelection === "scissors") {
    $("#roundCount").html(roundCount = roundCount + 1);
    $("#sameChoice").show();
  };

  if (computerChoice === 0 && userSelection === "paper") {
    $("#roundCount").html(roundCount = roundCount + 1);
    $("#userScore").html(userScore = userScore + 1);
    $("#winAlert").show();
  };

  if (computerChoice === 1 && userSelection === "scissors") {
    $("#roundCount").html(roundCount = roundCount + 1);
    $("#userScore").html(userScore = userScore + 1);
    $("#winAlert").show();
  };

  if (computerChoice === 2 && userSelection === "rock") {
    $("#roundCount").html(roundCount = roundCount + 1);
    $("#userScore").html(userScore = userScore + 1);
    $("#winAlert").show();
  };

  if (computerChoice == 0 && userSelection === "scissors") {
    $("#roundCount").html(roundCount = roundCount + 1);
    $("#computerScore").html(computerScore = computerScore + 1);
    $("#loseAlert").show();
  };

  if (computerChoice === 1 && userSelection === "rock") {
    $("#roundCount").html(roundCount = roundCount + 1);
    $("#computerScore").html(computerScore = computerScore + 1);
    $("#loseAlert").show();
  };

  if (computerChoice === 2 && userSelection === "paper") {
    $("#roundCount").html(roundCount = roundCount + 1);
    $("#computerScore").html(computerScore = computerScore + 1);
    $("#loseAlert").show();
  };

  }); // END GAME LOGIC

  $("#reset").on("click", function() {
    $("#userScore").html(userScore = 0)
    $("#computerScore").html(computerScore = 0)
    $("#roundCount").html(roundCount = 1)
  });

});