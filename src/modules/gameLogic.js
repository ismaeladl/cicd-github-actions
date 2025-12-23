// gameLogic.js

// Move the snake
export function getNextPosition(head, dx, dy) {
  return { x: head.x + dx, y: head.y + dy };
}

// Check wall collision
export function isWallCollision(pos, tileCount) {
  return pos.x < 0 || pos.x >= tileCount || pos.y < 0 || pos.y >= tileCount;
}

// Check self collision
export function isSelfCollision(snake, head) {
  return snake.some(s => s.x === head.x && s.y === head.y);
}

// Place food (ensures it doesn't appear on the snake)
export function placeFood(tileCount, snake) {
  let x, y;
  do {
    x = Math.floor(Math.random() * tileCount);
    y = Math.floor(Math.random() * tileCount);
  } while (snake.some(s => s.x === x && s.y === y));
  return { x, y };
}

// Update score if the snake eats food
export function eatFood(head, food, score) {
  if(head.x === food.x && head.y === food.y) return score + 1;
  return score;
}

// Prevent snake from reversing direction
export function canChangeDirection(currentDx, currentDy, newDx, newDy) {
  return !(currentDx + newDx === 0 && currentDy + newDy === 0);
}
