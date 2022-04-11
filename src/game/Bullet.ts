export class Bullet {
  public speed: number = 5;
  public x: number = 0;
  public y: number = 0;
  public width: number = 0;
  public height: number = 0;
  constructor() {}

  public move() {
    this.y -= this.speed;

    if (this.y <= 0) {
      this._destroyFn && this._destroyFn(this);
    }
  }

  private _destroyFn;
  onDestroy(destroyFn) {
    this._destroyFn = destroyFn;
  }
}
