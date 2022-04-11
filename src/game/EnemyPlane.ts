export class EnemyPlane {
  public speed: number = 2;
  public x: number = 0;
  public y: number = 0;
  public width: number = 0;
  public height: number = 0;
  constructor() {}

  _dir: number = 1;
  _interval: number = 30;
  move() {
    this.y += this.speed;

    // 随机移动左右测处理
    this.x += (this.speed / 2) * this._dir;
    this._interval--;
    if (this._interval <= 0) {
      this._dir = this._dir * -1;
      this._interval = 30;
    }
  }
}

export function initEnemyPlane(enemyPlanes) {
  const enemyPlane = new EnemyPlane();

  enemyPlanes.push(enemyPlane);
}

export function runEnemyPlane(enemyPlanes) {
  enemyPlanes.forEach((enemy) => {
    enemy.move();
  });
}
