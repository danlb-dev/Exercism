export class Triangle {
    private sideA: number;
    private sideB: number;
    private sideC: number;
    private isTriangle: boolean;

    constructor(a:number, b: number, c: number) {
        this.sideA = a;
        this.sideB = b;
        this.sideC = c;
        this.isTriangle = this.checkIfValidTriangle();
    }

    get isEquilateral() {
        return (this.sideA == this.sideB && this.sideA == this.sideC && this.sideB == this.sideC) && this.isTriangle;
    }

    get isIsosceles() {
        return (this.sideA == this.sideB || this.sideA == this.sideC || this.sideB == this.sideC) && this.isTriangle;
    }

    get isScalene() {
        return (this.sideA != this.sideB && this.sideA != this.sideC && this.sideB != this.sideC) && this.isTriangle;
    }

    private checkIfValidTriangle(): boolean {
        const val1: boolean = this.sideA > 0  && this.sideB > 0 && this.sideC > 0;
        const val2: boolean = (this.sideA + this.sideB) >= this.sideC;
        const val3: boolean = (this.sideB + this.sideC) >= this.sideA;
        const val4: boolean = (this.sideA + this.sideC) >= this.sideB;
        const isValidTriangle = val1 && val2 && val3 && val4;
        return isValidTriangle;
    }
}