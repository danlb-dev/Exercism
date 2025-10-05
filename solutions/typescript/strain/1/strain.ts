export function keep(col: number[], rule: (e: number) => boolean): number[] {
  return col.filter((x: number) => rule(x));
}

export function discard(col: number[], rule: (e: number) => boolean): number[] {
  return col.filter((x: number) => !rule(x));
}