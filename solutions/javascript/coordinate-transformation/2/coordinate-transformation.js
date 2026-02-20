
export function translate2d(dx, dy) {
  return (x, y) => [dx+x, dy+y]
}

export function scale2d(sx, sy) {
  return (x, y) => [sx*x, sy*y]
}

export function composeTransform(f, g) {
  return (x, y) => {
    const [newX, newY] = f(x, y)
    return g(newX, newY)
  }
}

export function memoizeTransform(f) {
  let lastX, lastY, lastResult;
  return (x, y) => {
    if(x === lastX && y === lastY){
      return lastResult
    }
    lastX = x
    lastY = y
    lastResult = f(x, y)
    return lastResult
  }
}
