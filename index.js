// code your solution here
function superbowlWin(record) {
    const win = record.find(game => game.result === "W");
    return win ? win.year : undefined;
  }
  
  module.exports = superbowlWin;  // Exporting the function to make it available for testing
  