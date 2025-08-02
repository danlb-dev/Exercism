export function toRna(dnaString: string): string {
  const dictionary: Record<string, string> = {
    "G": "C",
    "C": "G",
    "T": "A",
    "A": "U",
  };

  let rnaString = "";
  let invalidInput = false;
  
  const nucleotides: string[] = Array.from(dnaString);
  for(let i= 0; i < nucleotides.length; i++){
    const rnaChar: string = dictionary[nucleotides[i]];
    
    if(rnaChar == null){
      invalidInput = true;
      break;
    }

    rnaString += rnaChar;
  }

  if(invalidInput){
    throw new Error("Invalid input DNA.");
  }

  return rnaString;
}
