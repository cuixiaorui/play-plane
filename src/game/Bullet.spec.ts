import { describe, it, expect, vi } from "vitest";
import { Bullet } from "./Bullet";

function createBullet() {
  const bullet = new Bullet();
  bullet.speed = 1;

  return bullet;
}
describe("Bullet", () => {
  it("移动的时候是向上移动的", () => {
    const bullet = createBullet();

    bullet.move();

    expect(bullet.y).toBe(-1);
  });

  it("当移动超出边界的时候子弹会移除, 暂时子弹的边界还不可以被外部设置, 默认为 < 0 ", () => {
    const bullet = createBullet();
    bullet.x = 0
    bullet.speed = 1
    const destroyFn = vi.fn();
    bullet.onDestroy(destroyFn);
    
    bullet.move()

    expect(destroyFn).toBeCalled()
  });
});
