import { Calculation } from "./Calculation";

export class Calculator {
    calculate(calc: Calculation): void {
        switch (calc.operator) {
            case "+":
                calc.result = calc.first + calc.second;
                break;
            case "-":
                calc.result = calc.first - calc.second;
                break;
            case "*":
                calc.result = calc.first * calc.second;
                break;
            case "/":
                if (calc.second !== 0) {
                    calc.result = calc.first / calc.second;
                } else {
                    console.log("Error: Division by zero");
                    calc.result = NaN;
                }
                break;
            default:
                console.log("Error: Unknown operator");
                calc.result = NaN;
        }
    }
}