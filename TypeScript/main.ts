import { Calculation } from "./Calculation";
import { Calculator } from "./Calculator";

const calc1 = new Calculation(10, 2, "+");
const calculator = new Calculator();
calculator.calculate(calc1);
console.log(`10 + 2 = ${calc1.result}`); 

const calc2 = new Calculation(10, 2, "-");
calculator.calculate(calc2);
console.log(`10 - 2 = ${calc2.result}`); 

const calc3 = new Calculation(10, 2, "*");
calculator.calculate(calc3);
console.log(`10 * 2 = ${calc3.result}`);

const calc4 = new Calculation(10, 0, "/");
calculator.calculate(calc4);
console.log(`10 / 0 = ${calc4.result}`);