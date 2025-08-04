export class Matrix {
  private _matrix: string;
  private _rows: number[][];
  private _columns: number[][];
  
  constructor(matrix: string) {
    this._matrix = matrix;
    this._rows = [];
    this._columns = [];

    this.setRows();
    this.setColumns();
  }

  get rows(): number[][] {
    return this._rows;
  }

  get columns(): number[][] {
    return this._columns;
  }

  private setRows(): void {
    const rows: string[] = this._matrix.split("\n");
    rows.forEach((x: string) => {
        const row: number[] = [];
        x.split(" ").forEach((y: string) => {
            row.push(Number(y));
        });
        this._rows.push(row);
    });
  }

  private setColumns(): void {
    if(this._rows.length == 0){
        this.setRows();
    }

    const column1: number[] = [];
    const column2: number[] = [];
    const column3: number[] = [];

    this._rows.forEach((row:number[]) => {
        column1.push(row[0]);
        column2.push(row[1]);
        column3.push(row[2]);
    });

    this._columns.push(column1);
    this._columns.push(column2);
    this._columns.push(column3);
  }
}