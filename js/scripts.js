function Player(mark) {
  this.mark = mark;
};

Player.prototype.mark = function() {

  return this.mark;

};

var spaceArray = ["", "", "",
                  "", "", "",
                  "", "", ""];

console.log(spaceArray);
function Space(x_coordinate, y_coordinate) {
  this.x_coordinate = x_coordinate;
  this.y_coordinate = y_coordinate;
}

Space.prototype.x_coordinate = function() {
  return this.x_coordinate;
}

Space.prototype.y_coordinate = function() {
  return this.y_coordinate;
}

Space.prototype.mark_by = function() {

    var x = this.x_coordinate;
    var y = this.y_coordinate;

    if (this.y_coordinate == 2) {
    spaceArray.splice((x + y), 1, "X");
  } else if (this.y_coordinate == 1) {
    spaceArray.splice((4 + x + y), 1, "X");
  } else if (this.y_coordinate == 3) {
    spaceArray.splice((x + y) - 4, 1, "X");
  }
    console.log(spaceArray);
};

Space.prototype.marked_by = function() {

  var x = this.x_coordinate;
  var y = this.y_coordinate;
  var add = x + y;
  if (this.y_coordinate == 2) {
    return spaceArray[add];
} else if (this.y_coordinate == 1) {
  return spaceArray[4 + add];
} else if (this.y_coordinate == 3) {
  return spaceArray[add - 4];
}

};



$(document).ready(function() {


  var userprompt = prompt("Welcome to Tic Tac Toe! Would you like to be X or O?");
  if (userprompt.toLowerCase() == "x") {
    alert("You are player x!");
      var inputtedMark = "X";
  } else if (userprompt.toLowerCase() == "y") {
    alert("You are player y!");
    var inputtedMark = "Y";
  } else {
    prompt("Please enter an X or Y");
  }

  $(".hiddenDiv").show();


  $(".one_one").click(function() {
    $(this).text(inputtedMark);
  });

  $(".one_two").click(function() {
    $(".one_two").text(inputtedMark);
  });

  $(".one_three").click(function() {
    $(".one_three").text(inputtedMark);
  });

  $(".two_one").click(function() {
    $(".two_one").text(inputtedMark);
  });

  $(".two_two").click(function() {
    $(".two_two").text(inputtedMark);
  });

  $(".two_three").click(function() {
    $(".two_three").text(inputtedMark);
  });

  $(".three_one").click(function() {
    $(".three_one").text(inputtedMark);
  });

  $(".three_two").click(function() {
    $(".three_two").text(inputtedMark);
  });

  $(".three_three").click(function() {
    $(".three_three").text(inputtedMark);
  });


});
