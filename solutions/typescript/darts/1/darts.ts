export function score(x: number, y: number): number {
  let points = 0;
  
  const radius = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
  if(radius <= 1){
    points = 10;
  }
  else if(radius <= 5){
    points = 5;
  }
  else if(radius <= 10){
    points = 1;
  }

  return points;
}
