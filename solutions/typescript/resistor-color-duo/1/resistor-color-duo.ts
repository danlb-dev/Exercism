export function decodedValue(colors: string[]): number {
  const dictionary: Record<string, string> = {
    "black": "0", 
    "brown": "1", 
    "red": "2", 
    "orange": "3",
    "yellow": "4", 
    "green": "5", 
    "blue": "6", 
    "violet": "7",
    "grey": "8",
    "white": "9"
  }

  let returnValue: string = "";
  for(let i = 0; i <= colors.length; i++){
    if(i > 1){
      break;
    }

    const numberToAdd = dictionary[colors[i].toLowerCase()];
    returnValue += numberToAdd;
  }

  return Number(returnValue);
}
