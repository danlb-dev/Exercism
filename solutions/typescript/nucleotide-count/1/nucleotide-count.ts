type CountOfNucleotides = {
    A: number,
    C: number, 
    G: number, 
    T: number
};

export function nucleotideCounts(sequence: string): CountOfNucleotides {
    const returnValue: CountOfNucleotides = {
        A: 0,
        C: 0,
        G: 0,
        T: 0
    };

    for(let i=0; i < sequence.length; i++){
        if(sequence[i] in returnValue){
            returnValue[sequence[i] as keyof CountOfNucleotides] += 1;
        }
        else {
            throw new Error("Invalid nucleotide in strand");
        }
    };

    return returnValue;
};
