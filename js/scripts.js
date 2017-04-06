function Player(playerName, symbol) {
  this.playerName = playerName
  this.symbol = symbol;
}

function Cell(xCoord, yCoord) {
  this.name = "x" + xCoord + "y" + yCoord
  this.xCoord = xCoord
  this.yCoord = yCoord
  this.playerSymbol = 0
  this.mark = function(playerSymbol) {
    this.playerSymbol = playerSymbol
  }
}

function BoardObj(cols, rows) {
  this.rows = rows || 6;
  this.cols = cols || 7;
  this.board = {};
  this.cells = this.rows * this.cols;
  this.createBoard = function() {
    for (var i = 0; i < this.rows; i++) {
      for (var j = 0; j < this.cols; j++) {
        var newCell = new Cell(i, j);
        this.board[newCell.name] = newCell;
      }
    }
  }
  this.findFirstEmpty = function(col) {
    debugger;
    for (var i = 0; i < this.rows; i++) {
      var checkCell = "x" + col + "y" + i;
      if (this.board[checkCell].playerSymbol === 0) {
        return checkCell;
        break
      }
    }
  }
}
// prototype syntax:

// BoardObj.prototype.createBoard = function() {
//   for (var i = 0; i < this.rows; i++) {
//     for (var j = 0; j < this.cols; j++) {
//       var newCell = new Cell(i, j);
//       this.board[newCell.name] = newCell;
//     }
//   }
// }


// board2 = new BoardObj
// console.log(board2)
//
// board2.createBoard()
// console.log(board2)

function Game(player1, player2, cols, rows) {
  this.player1 = player1
  this.player2 = player2
  this.boardObj = {}
  this.active = this.player1
  this.initializeGame = function() {
    this.boardObj = new BoardObj(cols, rows)
    this.boardObj.createBoard()
  }
  this.turn = function(col) {
    var symbol = this.active.symbol
    console.log(symbol)
    var emptyCell = this.boardObj.findFirstEmpty(col)
    console.log(emptyCell)
    this.boardObj.board[emptyCell].mark(this.active.symbol)
    console.log(this.boardObj)

    if (this.active === this.player1) {
      this.active = this.player2
    } else if (this.active === this.player2 ) {
      this.active = this.player1
    }
  }
}



$(document).ready(function() {
 var player1 = new Player("jeff", "X")
 var player2 = new Player("mark", "O")
 var currentGame = new Game(player1, player2, 4, 4)
 console.log(currentGame)
 currentGame.initializeGame()

 $("#x0y0").click(function() {
   currentGame.turn(0)
 })
 $("#x1y0").click(function() {
   currentGame.turn(1)
 })
 $("#x2y0").click(function() {
   currentGame.turn(2)
 })
 $("#x3y0").click(function() {
   currentGame.turn(3)
 })

});
