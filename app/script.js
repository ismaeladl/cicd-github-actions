const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const gridSize = 20;
const tileCount = canvas.width / gridSize;

let snake = [{x: 10, y: 10}];
let dx = 0;
let dy = 0;
let foodX = 15;
let foodY = 15;
let score = 0;
let highScore = parseInt(localStorage.getItem('snakeHighScore')) || 0;
let gameLoop;
let gameRunning = false;

document.getElementById('highScore').textContent = highScore;

function drawGame() {
    if (!gameRunning && (dx !== 0 || dy !== 0)) {
        gameRunning = true;
    }

    // Clear canvas
    ctx.fillStyle = '#f0f4f8';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Move snake
    if (gameRunning) {
        const head = {x: snake[0].x + dx, y: snake[0].y + dy};

        // Check wall collision
        if (head.x < 0 || head.x >= tileCount || head.y < 0 || head.y >= tileCount) {
            endGame();
            return;
        }

        // Check self collision
        if (snake.some(segment => segment.x === head.x && segment.y === head.y)) {
            endGame();
            return;
        }

        snake.unshift(head);

        // Check food collision
        if (head.x === foodX && head.y === foodY) {
            score++;
            document.getElementById('score').textContent = score;
            if (score > highScore) {
                highScore = score;
                localStorage.setItem('snakeHighScore', highScore);
                document.getElementById('highScore').textContent = highScore;
            }
            placeFood();
        } else {
            snake.pop();
        }
    }

    // Draw snake
    snake.forEach((segment, index) => {
        ctx.fillStyle = index === 0 ? '#4CAF50' : '#66BB6A';
        ctx.fillRect(segment.x * gridSize, segment.y * gridSize, gridSize - 2, gridSize - 2);
    });

    // Draw food
    ctx.fillStyle = '#FF5252';
    ctx.beginPath();
    ctx.arc(foodX * gridSize + gridSize/2, foodY * gridSize + gridSize/2, gridSize/2 - 2, 0, Math.PI * 2);
    ctx.fill();
}

function placeFood() {
    do {
        foodX = Math.floor(Math.random() * tileCount);
        foodY = Math.floor(Math.random() * tileCount);
    } while (snake.some(segment => segment.x === foodX && segment.y === foodY));
}

function changeDirection(direction) {
    if (!gameRunning) gameRunning = true;
    
    switch(direction) {
        case 'up':
            if (dy === 0) { dx = 0; dy = -1; }
            break;
        case 'down':
            if (dy === 0) { dx = 0; dy = 1; }
            break;
        case 'left':
            if (dx === 0) { dx = -1; dy = 0; }
            break;
        case 'right':
            if (dx === 0) { dx = 1; dy = 0; }
            break;
    }
}

document.addEventListener('keydown', (e) => {
    switch(e.key) {
        case 'ArrowUp':
            e.preventDefault();
            changeDirection('up');
            break;
        case 'ArrowDown':
            e.preventDefault();
            changeDirection('down');
            break;
        case 'ArrowLeft':
            e.preventDefault();
            changeDirection('left');
            break;
        case 'ArrowRight':
            e.preventDefault();
            changeDirection('right');
            break;
    }
});

function endGame() {
    gameRunning = false;
    clearInterval(gameLoop);
    document.getElementById('finalScore').textContent = score;
    document.getElementById('gameOver').classList.add('show');
}

function restartGame() {
    snake = [{x: 10, y: 10}];
    dx = 0;
    dy = 0;
    score = 0;
    gameRunning = false;
    document.getElementById('score').textContent = score;
    document.getElementById('gameOver').classList.remove('show');
    placeFood();
    gameLoop = setInterval(drawGame, 100);
}

// Start game
placeFood();
gameLoop = setInterval(drawGame, 100);
