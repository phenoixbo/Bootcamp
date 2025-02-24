const args = process.argv.slice(2);
const num = parseInt(args[0]);
if (isNaN(num)) {
    console.log("Please provide a valid number.");
} else {
    for (let i = 1; i <= 10; i++) {
        console.log(`${num} x ${i} = ${num * i}`);
    }
}
