export function parse(phrase: string): string {
    const words: string [] = [];

    const parts: string[] = phrase.split(new RegExp("-| "));
    parts.forEach(part => {
        //split camel case
        const split = part.match(/([A-Z]+(?=[A-Z][a-z])|[A-Z]?[a-z]+)/g) || [];
        if(split.length > 0){
            words.push(...split);
        }
        else {
            words.push(part);
        }
    });

    let acronym: string = "";
    console.warn(words)
    words.forEach((word: string) => {
        acronym += word[0];
    });

    return acronym.toUpperCase();
}