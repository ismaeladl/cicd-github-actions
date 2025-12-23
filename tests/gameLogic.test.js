import { describe, test, expect } from "vitest";
import { getNextPosition, isWallCollision, isSelfCollision, placeFood, eatFood, canChangeDirection } from "../src/modules/gameLogic.js";

describe("Snake game logic – unit tests (demo)", () => {

  // Movement tests
  test("snake moves right", () => {
    expect(getNextPosition({x:5,y:5},1,0)).toEqual({x:6,y:5});
  });

  test("snake moves left", () => {
    expect(getNextPosition({x:5,y:5},-1,0)).toEqual({x:4,y:5});
  });

  test("snake moves up", () => {
    expect(getNextPosition({x:5,y:5},0,-1)).toEqual({x:5,y:4});
  });

  test("snake moves down", () => {
    expect(getNextPosition({x:5,y:5},0,1)).toEqual({x:5,y:6});
  });

  // Collision tests
  test("detects wall collision", () => {
    expect(isWallCollision({x:-1,y:5},20)).toBe(true);
    expect(isWallCollision({x:5,y:20},20)).toBe(true);
    expect(isWallCollision({x:5,y:5},20)).toBe(false);
  });

  test("detects self collision", () => {
    const snake = [{x:2,y:2},{x:3,y:2}];
    expect(isSelfCollision(snake,{x:3,y:2})).toBe(true);
    expect(isSelfCollision(snake,{x:4,y:2})).toBe(false);
  });

  // Food placement test
  test("placeFood avoids snake", () => {
    const snake = [{x:0,y:0},{x:1,y:1}];
    const food = placeFood(5, snake);
    expect(snake.some(s => s.x === food.x && s.y === food.y)).toBe(false);
  });

  // Score update test
  test("eatFood increases score when eating", () => {
    expect(eatFood({x:2,y:2},{x:2,y:2},0)).toBe(1);
    expect(eatFood({x:2,y:2},{x:3,y:2},0)).toBe(0);
  });

  // Direction change test
  test("prevents reverse direction", () => {
    expect(canChangeDirection(1,0,-1,0)).toBe(false); // reverse move not allowed
    expect(canChangeDirection(1,0,0,1)).toBe(true);   // turning allowed
  });

});
