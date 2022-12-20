// JavaScript Code

//Task 1

// for (let n = 1; n <= 500; n++) {
//   console.log("I am so happy!");
// }

//Task 2

// for (let i = 12; i <= 800; i++) {
//   if (i % 4 === 0) {
//     console.log(i);
//   }
// }

//Task 3

// for (let i = 55; i >= 11; i--) {
//   if (i % 2 !== 0) {
//     console.log(i);
//   }
// }

//Task 4

// let sum = 0;

// for (let i = 5; i <= 50; i++) {
//   sum += i;
// }

// console.log(sum);

//Task 5

const canvas = document.getElementById("game-canvas");
const ctx = canvas.getContext("2d");

let playerX = canvas.width / 2;
let playerY = canvas.height - 50;

const gameLoop = function () {
  // Update game state

  // Draw game
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillRect(playerX, playerY, 50, 50);

  requestAnimationFrame(gameLoop);
};

gameLoop();

document.addEventListener("keydown", function (event) {
  if (event.key === "ArrowLeft") {
    playerX -= 10;
  } else if (event.key === "ArrowRight") {
    playerX += 10;
  } else if (event.key === "ArrowUp") {
    playerY -= 10;
  } else {
    playerY += 10;
  }
});
