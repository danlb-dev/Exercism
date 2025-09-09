const Actions: Record<number, string> = {
  4: "wink",
  3: "double blink",
  2: "close your eyes",
  1: "jump",
  0: "Reverse the order of the operations in the secret handshake."
}

function GetBinary(n: number): string {
  let binary: string = n.toString(2);

  while(binary.length < 5){
    binary = `0${binary}`;
  }

  return binary;
}

export function commands(n: number): string[] {
  const returnValue: string[] = [];
  const binaryString: string = GetBinary(n);
  const lastIndex: number = binaryString.length - 1;

  for(let i = lastIndex; i >= 0; i--){
    if(binaryString[i] == "1"){
      if(i !== 0){
        returnValue.push(Actions[i]);
      }
      else {
        returnValue.reverse();
      }
    }
  }

  return returnValue;
}
