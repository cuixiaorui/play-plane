import { expect, describe, it } from "vitest";
import { mockTicker } from "../tests/helpers";
import { setupPlane } from "./Plane";

describe("Self Plane", () => {
  describe("移动", () => {
    const planeOptions = {
      x: 0,
      y: 0,
      speed: 1,
    };

    function createPlane() {
      const plane = setupPlane({}, [], planeOptions);
      return plane;
    }
    it("可以向左移动", () => {
      const plane = createPlane();

      plane.moveLeft();

      expect(plane.x).toBe(-1);
      expect(plane.y).toBe(0);
    });

    it("可以向右移动", () => {
      const plane = createPlane();

      plane.moveRight();

      expect(plane.x).toBe(1);
      expect(plane.y).toBe(0);
    });

    it("可以向下移动", () => {
      const plane = createPlane();

      plane.moveDown();

      expect(plane.x).toBe(0);
      expect(plane.y).toBe(1);
    });

    it("可以向上移动", () => {
      const plane = createPlane();

      plane.moveUp();

      expect(plane.x).toBe(0);
      expect(plane.y).toBe(-1);
    });
  });

  describe("攻击", () => {
    it("当发动攻击的时候会发射一个炮弹", () => {
      const bullets: any = [];
      const plane = setupPlane({}, bullets);

      plane.attack();
      expect(bullets.length).toBe(1);
    });
  });
});
