const CODON_AA_MAP: Map<string, string> = new Map([
  ["AUG", "Methionine"],
  ["UUU", "Phenylalanine"],
  ["UUC", "Phenylalanine"],
  ["UUA", "Leucine"],
  ["UUG", "Leucine"],
  ["UCU", "Serine"],
  ["UCC", "Serine"],
  ["UCA", "Serine"],
  ["UCG", "Serine"],
  ["UAU", "Tyrosine"],
  ["UAC", "Tyrosine"],
  ["UGU", "Cysteine"],
  ["UGC", "Cysteine"],
  ["UGG", "Tryptophan"],
  ["UAA", "STOP"],
  ["UAG", "STOP"],
  ["UGA", "STOP"]
]);

export function translate(codons: string): string[] {
    if(codons.length < 3) return [];

    const aminoacids: string[] = [];
    let hasUsedStop: boolean = false;

    for(let i=2; i < codons.length; i = i + 3){
        const codon: string = codons[i - 2] + codons[i - 1] + codons[i];
        const aminoacid: string = CODON_AA_MAP.get(codon) ?? "";

        if(aminoacid == ""){
            throw new Error('Invalid codon');
        }
        else if(aminoacid == "STOP"){
            hasUsedStop = true;
            break;
        }

        aminoacids.push(aminoacid);
    }

    if(!hasUsedStop && codons.length % 3 !== 0){
        throw new Error('Invalid codon');
    }

    return aminoacids;
};
