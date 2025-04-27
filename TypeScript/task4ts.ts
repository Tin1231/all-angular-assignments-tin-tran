
function castValue(value: unknown): string | number {
    if (typeof value === "string" || typeof value === "number") {
        return value;
    }
    return "Sorry, this is an unsupported type";
}

console.log(castValue("Word")); 
console.log(castValue(525)); 
console.log(castValue(false));