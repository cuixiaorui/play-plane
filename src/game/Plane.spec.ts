import { expect, describe, it } from "vitest";
import PlaneVue from "../components/Plane.vue";
import { mockTicker } from "../tests/helpers";
import { createPlane } from "./Plane";

describe("Self Plane", () => {
  describe("移动", () => {
    it("可以向左移动", () => {
      const plane = createPlane({});
      plane.moveLeft();

      expect(plane.position).toEqual({
        x: -1,
        y: 0,
      });
    });

    it("可以向右移动", () => {
      const plane = createPlane({});

      plane.moveRight();

      expect(plane.position).toEqual({
        x: 1,
        y: 0,
      });
    });

    it("可以向下移动", () => {
      const plane = createPlane({});

      plane.moveDown();

      expect(plane.position).toEqual({
        x: 0,
        y: 1,
      });
    });

    it("可以向上移动", () => {
      const plane = createPlane({});

      plane.moveUp();

      expect(plane.position).toEqual({
        x: 0,
        y: -1,
      });
    });
  });

  it("飞机可以设置移动速度", () => {
    const plane = createPlane({ speed: 2 });

    plane.moveUp();

    expect(plane.position).toEqual({
      x: 0,
      y: -2,
    });
  });

  it("当发动攻击的时候会发射一个炮弹", () => {
    const bullets: any = [];
    const plane = createPlane({ bullets });

    plane.attack();

    expect(bullets.length).toBe(1);
  });

  it("当子弹移动超过游戏边界的时候会被销毁掉", () => {
    const bullets: any = [];
    const plane = createPlane({ bullets });

    plane.attack();
    // TODO 全局的阈值也需要可以由外部来设置
    // 现在的做法会导致脆弱的测试， 比如如果调整了子弹的速度
    // 如果把执行的数量调大的话， 那么会有性能问题（浪费）
    mockTicker(() => {
      plane.run();
    }, 1000);
    expect(bullets.length).toBe(0);
  });
});
