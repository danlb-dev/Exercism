export class GradeSchool {
  private _roster: Map<number, string[]> = new Map();

  roster(): Record<string, string[]> {
    if(this._roster.size == 0) return {};

    const record: Record<string, string[]> = {};

    Array.from(this._roster.entries())
    .sort((a, b) => a[0] - b[0]).map(x => x)
    .forEach((x: [number, string[]]) => {
        record[x[0]] = [...x[1]];
    });

    return record;
  }

  add(name:string, grade:number) {
    if(!this._roster.has(grade)){
        const students: string[] = [];
        this._roster.set(grade, students);
    }

    this.removeDuplicate(name);

    const studentsOnGrade: string[] = this._roster.get(grade) as string[];
    studentsOnGrade.push(name);
    studentsOnGrade.sort();
  }

  grade(grade: number): string[] {
    const students: string[] = [...this._roster.get(grade) ?? []];
    return students;
  }

  private removeDuplicate(name: string): void {
    const grades: number[] = Array.from(this._roster.keys());
    for(let i=0; i < grades.length; i++){
        const students: string[] = (this._roster.get(grades[i]) as string[]);
        if(students.includes(name)){
            this._roster.set(grades[i], students.filter((n: string) => n !== name));
            break;
        }
    }
  }
}