const VALUE_BY_LETTER: Map<string, number> = new Map([
    ["a", 1],
    ["e", 1],
    ["i", 1],
    ["o", 1],
    ["u", 1],
    ["l", 1],
    ["n", 1],
    ["r", 1],
    ["s", 1],
    ["t", 1],
    ["d", 2],
    ["g", 2],
    ["b", 3],
    ["c", 3],
    ["m", 3],
    ["p", 3],
    ["f", 4],
    ["h", 4],
    ["v", 4],
    ["w", 4],
    ["y", 4],
    ["k", 5],
    ["j", 8],
    ["x", 8],
    ["q", 10],
    ["z", 10],
]);

export function score(word: string): number {
    if(!word || word.trim() == "") return 0;

    let count: number = 0;
    let wordToLower: string = word.toLowerCase();
    for(let i=0; i < wordToLower.length; i++){
        if(VALUE_BY_LETTER.has(wordToLower[i])){
            count += VALUE_BY_LETTER.get(wordToLower[i]) as number;
        }
    }

    return count;
};;
