import { expect, test } from "vitest";
import { hitTestObject } from "./hitTestObject";

test("两个矩形对象相交的话可以检测有碰撞上", () => {
  const rectA = {
    x: 0,
    y: 0,
    width: 100,
    height: 100,
  };

  const rectB = {
    x: 25,
    y: 0,
    width: 100,
    height: 100,
  };

  const r = hitTestObject(rectA, rectB);

  expect(r).toBe(true);
});



test("两个矩形对象不相交的时候  可以检测到没有碰撞上", () => {
  const rectA = {
    x: 0,
    y: 0,
    width: 100,
    height: 100,
  };

  const rectB = {
    x: 200,
    y: 0,
    width: 100,
    height: 100,
  };

  const r = hitTestObject(rectA, rectB);

  expect(r).toBe(false);
});
