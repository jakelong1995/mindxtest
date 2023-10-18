function numberonetriangle() {
    // ask the user to input a number from 1 to 10
    let n = parseInt(prompt("Enter a number from 1 to 10: "));
    // check if the number is valid
    if (n < 1 || n > 10) {
        console.log("Invalid number. Please try again.");
        return;
    }
    // loop from 1 to n
    for (let i = 1; i <= n; i++) {
        // print i asterisks in each line
        console.log("*".repeat(i));
    }
}

