// function Player(mark) {
//   this.mark = mark;
// };
//
// Player.prototype.mark = function() {
//
//   return this.mark;
//
// };
//
// var spaceArray = ["", "", "",
//                   "", "", "",
//                   "", "", ""];
//
// function Space(x_coordinate, y_coordinate) {
//   this.x_coordinate = x_coordinate;
//   this.y_coordinate = y_coordinate;
// }
//
// Space.prototype.x_coordinate = function() {
//   return this.x_coordinate;
// }
//
// Space.prototype.y_coordinate = function() {
//   return this.y_coordinate;
// }
//
// Space.prototype.mark_by = function() {
//
//     var x = this.x_coordinate;
//     var y = this.y_coordinate;
//
//     if (this.y_coordinate == 2) {
//     spaceArray.splice((x + y), 1, "X");
//   } else if (this.y_coordinate == 1) {
//     spaceArray.splice((4 + x + y), 1, "X");
//   } else if (this.y_coordinate == 3) {
//     spaceArray.splice((x + y) - 4, 1, "X");
//   }
//     console.log(spaceArray);
// };
//
// Space.prototype.marked_by = function() {
//
//   var x = this.x_coordinate;
//   var y = this.y_coordinate;
//   var add = x + y;
//   if (this.y_coordinate == 2) {
//     return spaceArray[add];
// } else if (this.y_coordinate == 1) {
//   return spaceArray[4 + add];
// } else if (this.y_coordinate == 3) {
//   return spaceArray[add - 4];
// }
//
// };
//
//
//
//

$(document).ready(function() {
  var userprompt = prompt("Welcome to Tic Tac Toe! Would you like to be X or O?");

  if (userprompt.toLowerCase() == "x") {
    alert("You are player x!");
      var playerOneMark = "X";
      var playerTwoMark = "O";
  } else if (userprompt.toLowerCase() == "o") {
    alert("You are player O!");
    var playerTwoMark = "X";
    var playerOneMark = "O";
  } else {
    prompt("Please enter an X or O");
  }

  // function setTurn() {
  //   var r =
  // }

  $(".hiddenDiv").show();

  var counter = 0;
  $(".ticTacToe").click(function()
  {
    counter++;
          if (counter % 2 === 0)
          {

            $(this).text(playerTwoMark);
            $(this).unbind();

          } else
          {

            $(this).text(playerOneMark);
            $(this).unbind();
          }

          if ($("#one_three").text() == "X" && $("#two_three").text() == "X" && $("#three_three").text() == "X" ||
          $("#one_two").text() == "X" && $("#two_two").text() == "X" && $("#three_two").text() == "X" ||
          $("#one_one").text() == "X" && $("#two_one").text() == "X" && $("#three_one").text() == "X" ||
          $("#one_one").text() == "X" && $("#one_two").text() == "X" && $("#one_three").text() == "X" ||
          $("#two_one").text() == "X" && $("#two_two").text() == "X" && $("#two_three").text() == "X" ||
          $("#three_one").text() == "X" && $("#three_two").text() == "X" && $("#three_three").text() == "X" ||
          $("#one_three").text() == "X" && $("#two_two").text() == "X" && $("#three_one").text() == "X" ||
          $("#one_one").text() == "X" && $("#two_two").text() == "X" && $("#three_three").text() == "X")
          {
            alert("Player one wins!");
          } else if ($("#one_three").text() == "O" && $("#two_three").text() == "O" && $("#three_three").text() == "O" ||
          $("#one_two").text() == "O" && $("#two_two").text() == "O" && $("#three_two").text() == "O" ||
          $("#one_one").text() == "O" && $("#two_one").text() == "O" && $("#three_one").text() == "O" ||
          $("#one_one").text() == "O" && $("#one_two").text() == "O" && $("#one_three").text() == "O" ||
          $("#two_one").text() == "O" && $("#two_two").text() == "O" && $("#two_three").text() == "O" ||
          $("#three_one").text() == "O" && $("#three_two").text() == "O" && $("#three_three").text() == "O" ||
          $("#one_three").text() == "O" && $("#two_two").text() == "O" && $("#three_one").text() == "O" ||
          $("#one_one").text() == "O" && $("#two_two").text() == "O" && $("#three_three").text() == "O")
          {
            alert("Player two wins!");
          }
    });

});
