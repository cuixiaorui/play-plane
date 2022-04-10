import { describe, it, expect } from "vitest";
import { createEnemyPlane } from "./EnemyPlane";
describe("EnemyPlane", () => {
  it("移动的时候会向下移动", () => {
    const enemy = createEnemyPlane({
      position: {
        x: 0,
        y: 0,
      },
      speed: 1,
    });
    const nextY = enemy.position.y + enemy.speed;

    enemy.move();

    expect(enemy.position.y).toBe(nextY);
  });

  it.todo("移动的时候会随机移动", () => {
    // spy 给 Math.random 处理掉
  });
});
