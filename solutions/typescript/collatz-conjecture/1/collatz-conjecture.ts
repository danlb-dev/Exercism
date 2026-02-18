export function steps(value: number): number {
    if(value <= 0 || value % 1 !== 0){
        throw new Error('Only positive integers are allowed');
    }

    let steps: number = 0;
    let newValue: number = value;

    while(newValue !== 1){
        steps++;

        if(newValue % 2 == 0){
            newValue = newValue/2;
        }
        else {
            newValue = newValue*3 + 1;
        }

    }

    return steps;
};