const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

export const digitToDoubleCharacter = (num: Number) => {
    return num.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})
}

export class Collection {
    public arr: Array<any>;

    constructor(arr: any[]) {
        this.arr = arr;
    }

    groupBy = function(key) {
        return this.arr.reduce(function(rv, x) {
          (rv[x[key]] = rv[x[key]] || []).push(x);
          return rv;
        }, {});
    };
}

export function parseViewDate(datetime: string) {
    const d = new Date(datetime); //(or .toString()
    return `${months[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`;
}

export const range = (min, max) => Array.from({ length: max - min + 1 }, (_, i) => min + i);
