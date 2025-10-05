const OPERATIONS: string[] = [
    "plus",
    "minus",
    "multiplied",
    "divided"
];

const isNumber = (value: string): boolean => {
    if(value.trim() == ""){
        return false;
    }

    return !isNaN(Number(value));
}

export const answer = (inst: string): number => {
    const words: string[] = inst.split(/[\s?]/);
    const numbers: number[] = [];
    const operations: string[] = [];

    let previousNumberIndex: number;
    let previousOperationIndex: number;
    let returnValue: number = 0;
    let isMathQuestion: boolean = false;

    words.forEach((word: string, index: number) => {
        if(isNumber(word)){
            numbers.push(Number(word));

            if(previousNumberIndex != null && previousNumberIndex == (index - 1)){
                throw new Error('Syntax error');
            }

            previousNumberIndex = index;
        }
        else if(OPERATIONS.includes(word)){
            operations.push(word.toLowerCase());

            if(previousOperationIndex != null && previousOperationIndex == (index - 1)){
                throw new Error('Syntax error');
            }
            
            previousOperationIndex = index;
        }
        else if(word.toLowerCase() == "cubed"){
            throw new Error('Unknown operation');
        }
        else if(word.toLowerCase() == "what"){
            isMathQuestion = true;
        }
    });

    if(numbers.length == 1 && operations.length == 0){
        return numbers[0];
    }
    
    if(numbers.length <= operations.length && isMathQuestion){
        throw new Error('Syntax error');
    }
    else if(numbers.length == 0 || operations.length == 0){
        throw new Error('Unknown operation');
    }
    

    operations.forEach((op: string, i: number) => {
        returnValue = i == 0 ? numbers[0] : returnValue;
        switch(op){
            case "plus":
                returnValue = returnValue + numbers[i + 1];
                break;
            case "minus":
                returnValue = returnValue - numbers[i + 1];
                break;
            case "multiplied":
                returnValue = returnValue * numbers[i + 1];
                break;
            case "divided":
                returnValue = returnValue / numbers[i + 1];
                break;
        }
    })

    return returnValue;
}