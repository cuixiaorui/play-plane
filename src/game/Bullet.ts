import { Position } from "./Plane";

export class Bullet {
  public position: Position;
  private _speed: number = 5;
  constructor(position: Position, speed?: number) {
    this.position = position;
    if (speed) {
      this._speed = speed;
    }
  }

  public move() {
    this.position.y -= this._speed;
  }
}

export function createBullet({ position, speed = 1 }) {
  return new Bullet(position, speed);
}
