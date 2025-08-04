export function count(phrase: string): Map<string, number> {
  const mapToReturn: Map<string, number> = new Map();
  const words: string[] = phrase.match(/\b[\w']+\b/g) || [];

  words.forEach((word: string) => {
    word = word.toLowerCase();
    if(mapToReturn.has(word)){
        mapToReturn.set(word, mapToReturn.get(word) as number + 1);
    }
    else {
        mapToReturn.set(word, 1);
    }
  });

  return mapToReturn;
}
