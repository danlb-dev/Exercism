export function transform(old: { [key: string]: string[] }):{ [key: string]: number } {
    const oldTransformed: { [key: string]: number } = {};
    for(const key in old){
        old[key].forEach(x => {
            oldTransformed[x.toLowerCase()] = Number(key);
        });
    }
    return oldTransformed;
}
