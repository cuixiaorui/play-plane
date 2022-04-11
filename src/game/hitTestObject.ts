interface Rect {
  x: number;
  y: number;
  width: number;
  height: number;
}

export function hitTestObject(objA: Rect, objB: Rect) {
  return (
    objA.x + objA.width >= objB.x &&
    objB.x + objB.width >= objA.x &&
    objA.y + objA.height >= objB.y &&
    objB.y + objB.height >= objA.y
  );
}
