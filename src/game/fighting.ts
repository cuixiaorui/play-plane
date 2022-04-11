import { hitTestObject } from "./hitTestObject";

export function fighting(plane, enemyPlanes) {
  plane.bullets.forEach((bullet, bulletIndex) => {
    enemyPlanes.forEach((enemy, enemyIndex) => {
      if (hitTestObject(bullet, enemy)) {
        plane.bullets.splice(bulletIndex, 1);
        enemyPlanes.splice(enemyIndex, 1);
      }
    });
  });
}
