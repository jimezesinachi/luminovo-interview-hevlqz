export function move(
  { x, y }: { x: number; y: number },
  angle: number,
  distance: number
) {
  const radians = (angle * Math.PI) / 180;
  const newY = Math.sin(radians) * distance;
  const newX = Math.cos(radians) * distance;
  return {
    x: x + newX,
    y: y + newY,
  };
}
