export class ValueError extends Error {
  constructor() {
    super('Bank account error')
  }
}

export class BankAccount {
    private _isOpen: boolean;
    private _balance: number;

    constructor() {
        this._isOpen = false;
        this._balance = 0;
    }

    open() {
        if(this._isOpen){
            throw new ValueError();
        }
      
        this._isOpen = true;
    }

    close() {
        if(!this._isOpen){
          throw new ValueError();
        }
      
        this._isOpen = false;
        this._balance = 0;
    }

    deposit(value: number) {
        if(!this._isOpen || value < 0){
            throw new ValueError();
        }
        
        this._balance += value;
    }

    withdraw(value: number) {
        if(this._balance < (value || 0) || !this._isOpen || value < 0){
            throw new ValueError();
        }

        this._balance -= value;
    }

    get balance(): number {
        if(!this._isOpen){
            throw new ValueError();
        }

        return this._balance;
    }
}