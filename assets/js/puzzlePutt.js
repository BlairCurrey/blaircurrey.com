// Get the canvas element and context
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

// Define some constants for the game
const WIDTH = canvas.width;
const HEIGHT = canvas.height;



// const GRID_SIZE = 5;
// const GRID_WIDTH = WIDTH / GRID_SIZE;
// const GRID_HEIGHT = HEIGHT / GRID_SIZE;

// // Set up the initial game state
// var snake = [{x: 5, y: 5}];
// var food = randomPosition();
// var direction = "right";
// var score = 0;

// Start the game loop
setInterval(gameLoop, 100);

// Handle keyboard input to change direction
// document.addEventListener("keydown", function(event) {
//   switch (event.keyCode) {
//     case 37:
//       if (direction !== "right") {
//         direction = "left";
//       }
//       break;
//     case 38:
//       if (direction !== "down") {
//         direction = "up";
//       }
//       break;
//     case 39:
//       if (direction !== "left") {
//         direction = "right";
//       }
//       break;
//     case 40:
//       if (direction !== "up") {
//         direction = "down";
//       }
//       break;
//   }
// });

function gameLoop() {
  draw()
}

function draw(){
  ctx.clearRect(0,0,WIDTH,HEIGHT)
  ctx.strokeStyle="rgba(0,0,0,1)";
  ctx.strokeRect(0,0,WIDTH,HEIGHT)
}

// The main game loop
// function gameLoop() {
//   // Move the snake in the current direction
//   var head = snake[0];
//   switch (direction) {
//     case "left":
//       snake.unshift({x: head.x - 1, y: head.y});
//       break;
//     case "up":
//       snake.unshift({x: head.x, y: head.y - 1});
//       break;
//     case "right":
//       snake.unshift({x: head.x + 1, y: head.y});
//       break;
//     case "down":
//       snake.unshift({x: head.x, y: head.y + 1});
//       break;
//   }

//   // Check for collision with the walls
//   if (snake[0].x < 0 || snake[0].x >= GRID_WIDTH ||
//       snake[0].y < 0 || snake[0].y >= GRID_HEIGHT) {
//     gameOver();
//     return;
//   }

//   // Check for collision with the food
//   if (snake[0].x === food.x && snake[0].y === food.y) {
//     score++;
//     document.getElementById("score").innerHTML = score;
//     food = randomPosition();
//   } else {
//     snake.pop();
//   }

//   // Check for collision with the snake's body
//   for (var i = 1; i < snake.length; i++) {
//     if (snake[0].x === snake[i].x && snake[0].y === snake[i].y) {
//       gameOver();
//       return;
//     }
//   }

//   // Draw the game
//   draw();
// }

// // Draw the game
// function draw() {
//   // Clear the canvas
//   ctx.clearRect(0, 0, WIDTH, HEIGHT);

//   // Draw the food
//   ctx.fillStyle = "red";
//   ctx.fillRect(food.x * GRID_SIZE, food.y * GRID_SIZE, GRID_SIZE, GRID_SIZE);

//   // Draw the snake
//   ctx.fillStyle = "green";
//   for (var i = 0; i < snake.length; i++) {
//     ctx.fillRect(snake[i].x * GRID_SIZE, snake[i].y * GRID_SIZE, GRID_SIZE, GRID_SIZE);
//   }
//   // ctx.fillStyle = "cyan";
//   // for (var i = 0; i < snake.length; i++) {
//   //   ctx.fillText("[  ]", snake[i].x * GRID_SIZE, (snake[i].y + 1) * GRID_SIZE);
//   // }
// }

// // End the game
// function gameOver() {
//   // alert("Game Over! Your score is: " + score);
//   // Reset the game state
//   snake = [{x: 5, y: 5}];
//   food = randomPosition();
//   direction = "right";
//   score = 0;
//   document.getElementById("score").innerHTML = score;
// }

// function randomPosition() {
//   return {
//     x: Math.floor(Math.random() * GRID_WIDTH),
//     y: Math.floor(Math.random() * GRID_HEIGHT)
//   };
// }
