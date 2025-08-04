export function isPangram(sentence: string):boolean {
  const pattern: RegExp = /^[A-Za-z]+$/;
  const characters: Set<string> = new Set();
  const sentenceToCheck: string = sentence.trim().toLowerCase();
  
  for(let i=0; i < sentenceToCheck.length; i++){
    if(sentenceToCheck[i].match(pattern) != null){
        characters.add(sentenceToCheck[i]);
    }
  }

  return characters.size == 26;
}
