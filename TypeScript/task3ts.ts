type ArrayValues = {
    sum: number;
    count: number;
};

function calcArray(arr: number[]): ArrayValues {
    const sum = arr.reduce((acc, curr) => acc + curr, 0);
    const count = arr.length;
    return { sum, count };
}

const arrayNumbers: number[] = [1, 5, 5, 5, 6];
const test = calcArray(arrayNumbers);
console.log(`Sum: ${test.sum} & count: ${test.count}`); 