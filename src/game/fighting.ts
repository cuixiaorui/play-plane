import { EnemyPlane } from "./EnemyPlane";
import { hitTestObject } from "./hitTestObject";
import { Plane } from "./Plane";

export function fighting(plane: Plane, enemyPlanes: EnemyPlane[]) {
  plane.bullets.forEach((bullet, bulletIndex) => {
    enemyPlanes.forEach((enemy, enemyIndex) => {
      if (hitTestObject(bullet, enemy)) {
        plane.bullets.splice(bulletIndex, 1);
        enemyPlanes.splice(enemyIndex, 1);
      }
    });
  });
}
