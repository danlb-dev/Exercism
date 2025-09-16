export function encode(code: string): string {
    let encoded: string = "";

    let counter = 0;
    let previousChar = "";
    for(let i=0; i <= code.length; i++){
        if(i == 0){
            previousChar = code[i];
            counter++;
            continue;
        }

        if(previousChar == code[i]){
            counter++;
        }
        else {
            encoded += counter > 1 ? (counter.toString() + previousChar) : previousChar;
            previousChar = code[i];
            counter = 1;
        }
    }

    return encoded;
}

export function decode(code: string): string {
  let decoded = "";

  let counter = "";
  for(let i=0; i < code.length; i++){
    if(Number.isNaN(Number(code[i])) || code[i] == " "){
        if(counter == ""){
            decoded += code[i];
        }
        else {
            const c: number = Number(counter);
            const extra: string = "".padStart(c, code[i]);
            decoded += extra;
            counter = "";
        }
    }
    else {
        counter += code[i];
    }
  }

  return decoded;
}
