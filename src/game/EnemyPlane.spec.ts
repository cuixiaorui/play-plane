import { describe, it, expect } from "vitest";
import { EnemyPlane } from "./EnemyPlane";
describe("EnemyPlane", () => {
  it("移动的时候会向下移动", () => {
    const enemy = new EnemyPlane();
    enemy.speed = 1
    enemy.y = 0
    
    enemy.move();

    expect(enemy.y).toBe(1);
  });

  it("移动的时候会左右随机移动", () => {
    const enemy = new EnemyPlane();
    const prevEnemyX = enemy.x;

    enemy.move();

    expect(enemy.x).not.toBe(prevEnemyX);
  });
});
