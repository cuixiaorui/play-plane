import { describe, it, expect, vi } from "vitest";
import { EnemyPlane, initEnemyPlanes } from "./EnemyPlane";
describe("EnemyPlane", () => {
  it("移动的时候会向下移动", () => {
    const enemy = new EnemyPlane();
    enemy.speed = 1;
    enemy.y = 0;

    enemy.move();

    expect(enemy.y).toBe(1);
  });

  it("移动的时候会左右随机移动", () => {
    const enemy = new EnemyPlane();
    const prevEnemyX = enemy.x;

    enemy.move();

    expect(enemy.x).not.toBe(prevEnemyX);
  });

  it("自动生成 1 秒一个", () => {
    vi.useFakeTimers();
    const enemyPlanes = [];

    initEnemyPlanes(enemyPlanes);
    vi.advanceTimersByTime(4000);

    expect(enemyPlanes.length).toBe(2);
    vi.restoreAllMocks();
  });
});
