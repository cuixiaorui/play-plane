// application service
// 胶水层
export * from "./Plane";
export * from "./Bullet";
import { Plane, setupPlane } from "./Plane";
import { Application } from "pixi.js";
import { Bullet } from "./Bullet";
import { EnemyPlane, initEnemyPlane, runEnemyPlane } from "./EnemyPlane";
import { fighting } from "./fighting";

export let game: Application;

game = new Application({
  width: 500,
  height: 500,
});

document.body.append(game.view);

export function getRootContainer() {
  return game.stage;
}

interface initGameResult {
  plane: Plane;
  bullets: Bullet[];
  enemyPlanes: EnemyPlane[];
}

export function initGame({ plane, bullets, enemyPlanes }): initGameResult {
  setupPlane(plane, bullets);

  initEnemyPlane(enemyPlanes);

  run(plane, enemyPlanes);

  return {
    plane,
    bullets,
    enemyPlanes,
  };
}

export function run(plane, enemyPlanes) {
  // 战斗逻辑
  game.ticker.add(() => {
    plane.run();
    runEnemyPlane(enemyPlanes);
    fighting(plane, enemyPlanes);
  });
}
