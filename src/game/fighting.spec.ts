import { expect, describe, it } from "vitest";
import { Bullet } from "./Bullet";
import { EnemyPlane } from "./EnemyPlane";
import { fighting } from "./fighting";
import { setupPlane } from "./Plane";

describe("核心战斗逻辑", () => {
  it("当我方子弹碰到敌军的时候，应该都销毁", () => {
    // given
    const bullet = new Bullet();
    bullet.x = 10;
    bullet.width = 100;
    bullet.height = 100;
    const plane = setupPlane({}, [bullet], {});

    const enemy = new EnemyPlane();
    enemy.x = 25;
    enemy.width = 100;
    enemy.height = 100;
    const enemyPlanes = [enemy];

    // when
    fighting(plane, enemyPlanes);

    // then
    expect(plane.bullets.length).toBe(0);
    expect(enemyPlanes.length).toBe(0);
  });
});
