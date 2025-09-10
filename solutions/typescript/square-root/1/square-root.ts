export function squareRoot(radicand: number): number {
    const sRoot: number = Math.sqrt(radicand);

    if(sRoot > 0 && Number.isInteger(sRoot)){
        return sRoot;
    }

    throw new Error('Parameter must be a positive number');
}
