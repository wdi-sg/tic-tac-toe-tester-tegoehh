// write the java script codes here
var player = 1
var grid = [null, null, null, null, null, null, null, null, null]

function isGameOver () {
  if (whoWon()) {
    return true
  } else {
    return false
  }
}

function restart () {
  grid = [null, null, null, null, null, null, null, null, null]
}

function playTurn (index) {
  if (grid[index] || isGameOver()) {
    return false
  } else {
    grid[index] = player
    if (player === 1) {
      player = 2
    } else player = 1
    return true
  }
}

function whoWon () {
  if (grid[0] === grid[1] === grid[2]) {
    return grid[0]
  } else if (grid[3] === grid[4] === grid[5]) {
    return grid[3]
  } else if (grid[6] === grid[7] === grid[8]) {
    return grid[6]
  } else if (grid[0] === grid[3] === grid[6]) {
    return grid[0]
  } else if (grid[1] === grid[4] === grid[7]) {
    return grid[1]
  } else if (grid[2] === grid[5] === grid[8]) {
    return grid[2]
  } else if (grid[0] === grid[4] === grid[8]) {
    return grid[0]
  } else if (grid[2] === grid[4] === grid[6]) {
    return grid[2]
  } else if (grid[0] === grid[1] === grid[2] === grid[3] === grid[4] ===
    grid[5] === grid[6] === grid[7] === grid[8]) {
    return 3
  } else {
    return 0
  }
}
