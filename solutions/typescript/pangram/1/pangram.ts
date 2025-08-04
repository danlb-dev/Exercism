export function isPangram(sentence: string):boolean {
  const eAlphabet: string[] = ["q","w","e","r","t","y","u","i","o","p","a","s","d","f","g",
                               "h","j","k","l","z","x","c","v","b","n","m"];
  const characters: Set<string> = new Set();
  const sentenceToCheck: string = sentence.trim().toLowerCase();
  
  for(let i=0; i < sentenceToCheck.length; i++){
    if(eAlphabet.includes(sentenceToCheck[i])){
        characters.add(sentenceToCheck[i]);
    }
  }

  return characters.size == 26;
}
