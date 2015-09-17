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
//

$(document).ready(function() {
  $(".XObuttons").hide();
  $(".hiddenDivGrid").hide();

  $("#onePlayer").click(function() {
    $(".XObuttons").show();
    $(".playerNumberButtons").hide();
  });

  $("#twoPlayer").click(function() {
    $(".XObuttons").show();
    $(".playerNumberButtons").hide();
  });

  $("#X").click(function() {
    playerOneMark = "X";
    playerTwoMark = "O";
    $(".XObuttons").hide();
    $(".hiddenDivGrid").show();
  });

  $("#O").click(function() {
    playerOneMark = "O";
    playerTwoMark = "X";
    $(".XObuttons").hide();
    $(".hiddenDivGrid").show();
  });

  var counter = 0;
  $(".ticTacToe h1").click(function()
  {
    counter++;

          if (counter == 9)
          {
            setTimeout(function()
            {
              alert("Tie! You're both losers");
              location.reload();
            }, 500);
          }


          if (counter % 2 === 0)
          {

            $(this).text(playerTwoMark).hide().fadeIn();
            $(this).unbind();

          } else
          {

            $(this).text(playerOneMark).hide().fadeIn();
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
            setTimeout(function(){
              alert("Player one wins!");
              location.reload();
            }, 500);


          } else if ($("#one_three").text() == "O" && $("#two_three").text() == "O" && $("#three_three").text() == "O" ||
          $("#one_two").text() == "O" && $("#two_two").text() == "O" && $("#three_two").text() == "O" ||
          $("#one_one").text() == "O" && $("#two_one").text() == "O" && $("#three_one").text() == "O" ||
          $("#one_one").text() == "O" && $("#one_two").text() == "O" && $("#one_three").text() == "O" ||
          $("#two_one").text() == "O" && $("#two_two").text() == "O" && $("#two_three").text() == "O" ||
          $("#three_one").text() == "O" && $("#three_two").text() == "O" && $("#three_three").text() == "O" ||
          $("#one_three").text() == "O" && $("#two_two").text() == "O" && $("#three_one").text() == "O" ||
          $("#one_one").text() == "O" && $("#two_two").text() == "O" && $("#three_three").text() == "O")
          {
            setTimeout(function(){
              alert("Player two wins!");
              location.reload();
            }, 500);

          }


    });


});
