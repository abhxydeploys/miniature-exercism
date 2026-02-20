
export function translate2d(dx, dy) {
  return function translate(x,y){
    return [dx+x, dy+y]
  }
}

export function scale2d(sx, sy) {
  return function scale(x,y){
    return [sx*x, sy*y]
  }
}

export function composeTransform(f, g) {
  return function (x, y){
    const [newX, newY] = f(x,y)
    return g(newX, newY)
  }
}

export function memoizeTransform(f) {
  let lastX;
  let lastY;
  let lastResult;

  return function (x, y) {
    if (x === lastX && y === lastY) {
      return lastResult;
    }

    lastX = x;
    lastY = y;
    lastResult = f(x, y);

    return lastResult;
  };
}