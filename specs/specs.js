describe('Player', function() {
    it("returns the player's mark", function() {
      var testPlayer = new Player("X");
      expect(testPlayer.mark).to.equal("X");
   });
});

describe('Space', function() {
    it("returns the player's mark", function() {
      var testSpace = new Space(1,2);
      expect(testSpace.x_coordinate).to.equal(1);
   });

    it("returns the player's mark", function() {
      var testSpace = new Space(1,2);
      expect(testSpace.y_coordinate).to.equal(2);
   });

  it("lets a player mark a space in middle row", function() {
      var testPlayer = new Player("X");
      var testSpace = new Space(1,2);
      testSpace.mark_by();
      expect(testSpace.marked_by()).to.equal("X");
   });
});

// describe(Board) do
//   it("creates 9 spaces when it is initialized") do # You write the rest!
// end
