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

  // var marked = {Player.mark:Space(Space.x_coordinate, Space.y_coordinate)};
  //
  // return marked[Space(Space.x_coordinate, Space.y_coordinate)];

    var add = this.x_coordinate + this.y_coordinate;

    console.log(add);

    var x = this.x_coordinate;
    var y = this.y_coordinate;

    var coordinate = "(" + x + "," + y + ")";

    console.log(coordinate);

    spaceArray.splice(3, 1, "X");

    console.log(spaceArray);
};

Space.prototype.marked_by = function() {

  return spaceArray[3];
};

// function Board() {
//
// }
//
// function Game() {
//
// }
//
//
// $(document).ready(function() {
//
// 
// });
