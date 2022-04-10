import { describe, it, expect } from "vitest";
import { createBullet } from "./Bullet";
describe("Bullet", () => {
  it("移动的时候是向上移动的", () => {
    const bullet = createBullet({ position: { x: 0, y: 0 }, speed: 1 });

    bullet.move();

    expect(bullet.position.y).toBe(-1);
  });
});
