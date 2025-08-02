export function decodedResistorValue(colors: string[]): string {
  const codesForColors: Record<string, number> = {
    black: 0,
    brown: 1,
    red: 2,
    orange: 3,
    yellow: 4,
    green: 5, 
    blue: 6,
    violet: 7,
    grey: 8,
    white: 9
  }
  
  const ohmsPrefix: Record<number, string> = {
    0: " ohms",
    1: "0 ohms",
    2: "00 ohms",
    3: " kiloohms",
    4: "0 kiloohms",
    5: "00 kiloohms",
    6: " megaohms",
    7: "0 megaohms",
    8: "00 megaohms",
    9: " gigaohms",
  }

  let returnValue: string = "";
  let secondCode: string = "";
  for(let i=0; i < colors.length; i++){
    if(i > 2){
      break;
    }

    if(i <= 1){
      const code: string = codesForColors[colors[i].toLowerCase()].toString();
      if(i == 0 && code ==  "0"){
        continue;
      }
      else if(code == "0"){
        secondCode = code;
      }
      else {
        returnValue += code.toString();
      }
    }
    else {
      const numberToSum: number = secondCode == "0" ? 1 : 0;
      const amountOfZeros: number = codesForColors[colors[i].toLowerCase()] + numberToSum;

      if(numberToSum > 0){
        returnValue = returnValue.substring(0);
      }
    
      returnValue += ohmsPrefix[amountOfZeros];
    }
  }

  return returnValue;
}