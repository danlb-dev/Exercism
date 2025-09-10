export function find(haystack: number[], needle: number): number {
  const index: number = haystack.indexOf(needle);

  if(index == -1){
    throw(new Error('Value not in array'));
  }

  return index;
}