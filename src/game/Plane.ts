import { createBullet, Bullet } from "./Bullet";

//我方飞机
export interface Position {
  x: number;
  y: number;
}

export interface Plane {
  position: Position;
  moveLeft: () => void;
  moveRight: () => void;
  moveDown: () => void;
  moveUp: () => void;
  attack: () => void;
  run: () => void;
  bullets: Bullet[];
}

interface PlaneOptions {
  position?: Position;
  bullets?: Bullet[];
  speed?: number;
}

export function createPlane({
  position = {
    x: 0,
    y: 0,
  },
  speed = 1,
  bullets = [],
}: PlaneOptions): Plane {
  // 移动相关
  function moveLeft() {
    position.x -= speed;
  }

  function moveRight() {
    position.x += speed;
  }

  function moveDown() {
    position.y += speed;
  }

  function moveUp() {
    position.y -= speed;
  }


  // 子弹相关
  function attack() {
    const bullet = createBullet({
      position: { x: position.x + 20, y: position.y },
      speed: 5
    });

    addBullet(bullet);
  }


  function addBullet(bullet) {
    bullets.push(bullet);
  }

  function removeBullet(bullet) {
    const index = bullets.indexOf(bullet);
    bullets.splice(index, 1);
  }

  function run() {
    // 处理所有子弹的移动
    bullets.forEach((bullet) => {
      bullet.move();
      if (bullet.position.y < 100) {
        removeBullet(bullet);
      }
    });
  }

  return {
    bullets,
    position,
    moveLeft,
    moveRight,
    moveDown,
    moveUp,
    attack,
    run,
  };
}
