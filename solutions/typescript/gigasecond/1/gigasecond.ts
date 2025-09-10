export class Gigasecond {
    private _startDate: Date;
    private _futureDate: Date;

    constructor(startDate: Date){
        this._startDate = startDate;
        this._futureDate = this.getFutureDate();
    }

    public date(): Date {
        return this._futureDate;
    }

    private getFutureDate(): Date {
        const initialSeconds: number = (this._startDate.getTime()/1000);
        const finalSeconds: number = initialSeconds + Math.pow(10, 9);
        return new Date(finalSeconds*1000);
    }
}