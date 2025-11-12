export class List<T> {
    private readonly _values: T[];

    constructor(values: T[]){
        this._values = [...values];
    }

    public static create<T>(...values: T[]): List<T> {
        const valuesToUse: T[] = [];
        if(values.length > 0){
            values.forEach((v: T) =>  {
                if(v && v instanceof List){
                    v.forEach(x => valuesToUse[valuesToUse.length] = x);
                }
                else {
                    valuesToUse[valuesToUse.length] = v;
                }
            })
        }
        return new List(valuesToUse);
    }

    public forEach(func: (value: T, index: number) => void): void {
        this._values.forEach((v: T, i: number) =>  {
            func(v, i);
        });
    }

    public append(list: List<T>): List<T> {
        const iList = [...this._values];
        list.forEach((x, i) => {
            iList[iList.length] = x;
        });
        return new List(iList);
    }

    public concat(list: List<T>): List<T> {
        const iList = [...this._values];
        list.forEach((x, i) => {
            iList[iList.length] = x;
        });
        return new List(iList);
    }

    public filter(predicate: (item: T) => boolean): List<T> {
        const fList: T[] = [];

        this._values.forEach(x => {
            if(predicate(x)){
                fList[fList.length] = x;
            }
        });

        return new List(fList);
    }

    public length(): number {
        return this._values.length;
    }

    public map(func: (item: T) => T): List<T> {
        const fList: T[] = [];

        this._values.forEach(x => {
            fList[fList.length] = func(x);
        });

        return new List(fList);
    }

    public foldl(reducer: (acc: T, curr: T) => T, initialValue: T): T {
        let accumulator = initialValue;
        this._values.forEach(x => {
            accumulator = reducer(accumulator, x);
        });
        return accumulator;
    }

    public foldr(reducer: (acc: T, curr: T) => T, initialValue: T): T {
        let accumulator = initialValue;
        this._values.reverse().forEach(x => {
            accumulator = reducer(accumulator, x);
        });
        return accumulator;
    }

    public reverse(): List<T> {
        const rList:T[] = [];

        for(let i = this._values.length - 1; i >= 0; i--){
            rList[this._values.length - 1 - i] = this._values[i];
        }

        return new List(rList);
    }
}