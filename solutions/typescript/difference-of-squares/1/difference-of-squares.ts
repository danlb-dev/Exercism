export class Squares {
  private listOfNumbers: number[];

  constructor(count: number) {
    this.listOfNumbers = this.getListOfNumbers(count);
  }

  get sumOfSquares(): number {
    let sum: number = 0;
    this.listOfNumbers.forEach(x => sum += Math.pow(x, 2));
    return sum;
  }

  get squareOfSum(): number {
    let sum: number = 0;
    this.listOfNumbers.forEach(x => sum += x);
    return Math.pow(sum, 2);
  }

  get difference(): number {
    return this.squareOfSum - this.sumOfSquares;
  }

  private getListOfNumbers(count: number): number[] {
    if(count == 0){
      return [];
    }

    const returnList: number[] = [];
    for(let i = 1; i <= count; i++){
      returnList.push(i);
    }

    return returnList;
  }
}
