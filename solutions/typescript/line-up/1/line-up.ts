export function format(name: string, number: number): string {
    return `${name}, you are the ${number}${getSufix(number)} customer we serve today. Thank you!`;
}

function getSufix(n: number): string {
    let sufix: string;

    const nString: string[] = n.toString().split('');
    const lastDigit: string = nString[nString.length - 1];
    const preLastDigit: string = nString[nString.length - 2] ?? "";

    switch(lastDigit) {
        case "1":
            sufix = "st";
            break;
        case "2":
            sufix = "nd";
            break;
        case "3":
            sufix = "rd";
            break;
        default:
            sufix = "th";
            break;
    }

    if(preLastDigit !== ""){
        const twoLastDigits: string = preLastDigit + lastDigit;
        if(twoLastDigits == "11" || twoLastDigits == "12" || twoLastDigits == "13"){
            sufix = "th";
        }
    }
    
    return sufix;
}
