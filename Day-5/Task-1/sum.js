const args = process.argv.slice(2);
const num1 = parseFloat(args[0]);
const num2 = parseFloat(args[1]);
if (isNaN(num1) || isNaN(num2)) {
    console.log("Please provide two valid numbers.");
} else {
    console.log(`The sum is: ${num1 + num2}`);
}
