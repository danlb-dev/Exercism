export class Robot {
  private _robotName: string;
  private _usedNames: string[] = [];
  
  constructor() {
    this._robotName = RobotName.generateRobotName();
    this._usedNames.push(this._robotName);
  }

  public get name(): string {
    if(!this._robotName){
      this._robotName = RobotName.generateRobotName();
      this._usedNames.push(this._robotName);
    }
    return this._robotName;
  }

  public resetName(): void {
    this._robotName = "";
  }

  public static releaseNames(): void {
    //
  }
}

export class RobotName {
  static robotNames: string[] = [];
  
  public static generateRobotName(): string{
    let robotName: string = "";
    let canReturn: boolean = false;
    while(!canReturn){
      robotName += this.getRandomLetter();
      robotName += this.getRandomLetter();
      robotName += this.getRandomNumber().toString();
      robotName += this.getRandomNumber().toString();
      robotName += this.getRandomNumber().toString();

      if(!this.robotNames.includes(robotName)){
        canReturn = true;
        this.robotNames.push(robotName);
      }
      else {
        robotName = "";
      }
    }
    return robotName;
  }

  private static getRandomLetter(): string {
    const letters: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numberOfCharacters: number = letters.length;
    const randomIndex: number = Math.floor(Math.random() * numberOfCharacters);
    return letters[randomIndex];
  }

  private static getRandomNumber(): number {
    const numbers: number[] =[1,2,3,4,5,6,7,8,9,0];
    const amountOfNumbers: number = numbers.length;
    const randomIndex: number = Math.floor(Math.random() * amountOfNumbers);
    return numbers[randomIndex];
  }
}
