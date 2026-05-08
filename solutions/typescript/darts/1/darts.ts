export function score(x: number, y: number): number {
  // Calculate distance from the center (0,0)
  const distance = Math.sqrt(x * x + y * y);

  if (distance <= 1) {
    return 10; // Inner circle (bullseye)
  } else if (distance <= 5) {
    return 5; // Middle circle
  } else if (distance <= 10) {
    return 1; // Outer circle
  } else {
    return 0; // Missed the target
  }
}
