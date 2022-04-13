import { Bullet } from "./Bullet";

export interface Plane {
  bullets: Bullet[];
  x: number;
  y: number;
  speed: number;
  moveLeft: () => void;
  moveRight: () => void;
  moveDown: () => void;
  moveUp: () => void;
  attack: () => void;
  run: () => void;
}

const defaultOptions = {
  x: 150,
  y: 300,
  speed: 5,
};

export function setupPlane(
  plane: any,
  bullets: Bullet[] = [],
  defaultOptions = {}
): Plane {
  // 默认的配置项
  options(plane, defaultOptions);
  plane.bullets = bullets;

  initMove(plane);
  initAttack(plane, bullets);
  initRun(plane, bullets);

  return plane;
}

function options(plane: Plane, options) {
  Object.assign(plane, defaultOptions, options);
}

function initRun(plane: Plane, bullets: Bullet[]) {
  plane.run = function () {
    bullets.forEach((bullet) => {
      bullet.move();
    });
  };
}

function initAttack(plane, bullets) {
  function attack() {
    const bullet = new Bullet();
    bullet.x = plane.x + 20;
    bullet.y = plane.y;
    bullet.speed = 5;
    bullet.onDestroy(removeBullet);

    addBullet(bullet);
  }

  function addBullet(bullet) {
    bullets.push(bullet);
  }

  function removeBullet(bullet) {
    const index = bullets.indexOf(bullet);
    bullets.splice(index, 1);
  }

  plane.attack = attack;
  plane.addBullet = addBullet;
  plane.removeBullet = removeBullet;
}

function initMove(plane: Plane) {
  // 移动相关
  function moveLeft() {
    plane.x -= plane.speed;
  }

  function moveRight() {
    plane.x += plane.speed;
  }

  function moveDown() {
    plane.y += plane.speed;
  }

  function moveUp() {
    plane.y -= plane.speed;
  }

  plane.moveLeft = moveLeft;
  plane.moveRight = moveRight;
  plane.moveDown = moveDown;
  plane.moveUp = moveUp;
}
