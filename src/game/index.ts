// application service
// 胶水层
export * from "./Plane";
export * from "./Bullet";
import { createPlane, Plane } from "./Plane";
import { Application } from "pixi.js";
import { Bullet } from "./Bullet";
import { EnemyPlane ,initEnemyPlane} from "./EnemyPlane";

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

export function initGame({ planeInfo, bullets, enemyPlanes }): initGameResult {
  const plane = createPlane({
    position: planeInfo.position,
    speed: planeInfo.speed,
    bullets,
  });

  initEnemyPlane(enemyPlanes)

  // 战斗逻辑

  return {
    plane,
    bullets,
    enemyPlanes,
  };
}
