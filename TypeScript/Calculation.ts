export class Calculation {
    first: number;
    second: number;
    operator: string;
    result: number;

    constructor(first: number, second: number, operator: string) {
        this.first = first;
        this.second = second;
        this.operator = operator;
        this.result = 0;
    }
}