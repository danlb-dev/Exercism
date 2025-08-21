export class Clock {
  #hour: number;
  #minutes: number;
  
  constructor(hour: number, minute?: number) {
    this.#hour = hour >= 24 ? hour % 24 : hour;
    this.#minutes = minute ?? 0;
    this.adjustTime();
  }

  get Hour(){
    return this.#hour;
  }

  get Minutes(){
    return this.#minutes;
  }

  public toString(): string {
    const hour: string = (this.#hour < 10) ? `0${this.#hour.toString()}` : this.#hour.toString();
    const minutes: string = (this.#minutes < 10) ? `0${this.#minutes.toString()}` : this.#minutes.toString();
    return `${hour}:${minutes}`;
  }

  public plus(minutes: number): Clock {
    this.#minutes = this.#minutes + minutes;
    this.adjustTime();
    return this;
  }

  public minus(minutes: number): Clock {
    this.#minutes = this.#minutes - minutes;
    this.adjustTime();
    return this;
  }

  public equals(other: Clock): boolean {
    const sameHours: boolean = this.#hour == other.Hour;
    const sameMinutes: boolean = this.#minutes == other.Minutes;
    return (sameHours && sameMinutes);
  }

  private adjustTime(){
    this.#hour = this.#hour + Math.floor(this.#minutes / 60);
    this.#minutes = this.#minutes % 60;
    this.negativeHoursToPositive();
    this.negativeMinutesToPositive();
    this.adjustTo24Hours();
  }

  private negativeHoursToPositive(){
    if(this.#hour < 0){
        while(this.#hour < 0){
            this.#hour += 24;
        }
    }
  }

  private negativeMinutesToPositive(){
    if(this.#minutes < 0){
        this.#minutes += 60;
    }
  }

  private adjustTo24Hours(){
    if(this.#hour >= 24){
        this.#hour = this.#hour % 24;
    }
  }
}