const args = process.argv.slice(2);
const num = parseInt(args[0]);
if (isNaN(num)) {
    console.log("Please provide a valid number.");
} else {
    if (num % 2 === 0) {
        console.log("Even");
    } else {
        console.log("Odd");
    }
}
