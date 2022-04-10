import { Position } from "./Plane";
import { game } from "./index";

export class EnemyPlane {
  public position: Position;
  public speed: number;
  constructor(position: Position, speed: number) {
    this.position = position;
    this.speed = speed;
  }
  _dir: number = 1;
  _interval: number = 30;
  move() {
    this.position.y += this.speed;
    // 随机处理
    this.position.x += (this.speed / 2) * this._dir;
    this._interval--;
    if (this._interval <= 0) {
      this._dir = this._dir * -1;
      this._interval = 30;
    }
  }
}

export function createEnemyPlane({ position, speed }) {
  return new EnemyPlane(position, speed);
}

export function initEnemyPlane(enemyPlanes) {
  const enemyPlane = createEnemyPlane({
    position: {
      x: 0,
      y: 0,
    },
    speed: 2,
  });

  enemyPlanes.push(enemyPlane);

  // 移动敌军
  game.ticker.add(() => {
    enemyPlanes.forEach((enemy) => {
      enemy.move();
    });
  });
}
