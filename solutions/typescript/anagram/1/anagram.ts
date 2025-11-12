export class Anagram {
    private readonly _input:string;

    constructor(input: string) {
        this._input = input.toLowerCase().trim();
    }

    public matches(...potentials: string[]): string[] {
        const solution: string[] = [];
        const sortedInput: string = this._input.split('').sort().join('');

        potentials.forEach((x: string) => {
            const fPotencial: string = x.toLowerCase().trim();
            if(fPotencial.length === this._input.length && fPotencial !== this._input){
                const sorted: string = fPotencial.split('').sort().join('');
                if(sorted === sortedInput){
                    solution.push(x);
                }
            }
        });

        return solution;
    }
}