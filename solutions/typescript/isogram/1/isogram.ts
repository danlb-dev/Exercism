export function isIsogram(word: string): boolean {
    let wordToCheck = word.split(new RegExp('-| ')).join('').toLowerCase();

    let isIsogram = true;
    for(let i = 0; i < wordToCheck.length; i++){
        const firstIndex = wordToCheck.indexOf(wordToCheck[i]);
        const lastIndex = wordToCheck.lastIndexOf(wordToCheck[i]);
        if(firstIndex != lastIndex){
            isIsogram = false;
            break;
        }
    }

    return isIsogram;
}