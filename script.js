// get the form element
const form = document.getElementById("form");

// get the result element
const result = document.getElementById("result");

// add a submit event listener to the form
form.addEventListener("submit", function(event) {

  // prevent the default form submission
  event.preventDefault();

  // get the values of a and b from the input fields
  const a = parseInt(document.getElementById("a").value);
  const b = parseInt(document.getElementById("b").value);

  // check if a and b are valid
  if (a < 1 || b < 2 || a >= b) {
  
    // show an error message
    result.textContent = "Nhập sai. Vui lòng nhập a và b thoả mãn 1 <= a < b.";
  } else {

    // calculate the sum of prime numbers between a and b
    let sum = 0;
    let primes = [];

    // loop from a to b
    for (let i = a; i <= b; i++) {

      // check if i is prime
      if (isPrime(i)) {

        // add i to the sum and primes array
        sum += i;
        primes.push(i);
      }
    }

    // show the sum and primes array
    result.innerHTML = `Các số nguyên tố ở giữa ${a} và ${b} là: ${primes.join(", ")}.<br>Tổng của các số là ${sum}.`;
  }
});

// define a function to check if a number is prime
function isPrime(n) {

  // if n is less than 2, it is not prime
  if (n < 2) {
    return false;
  }

  // loop from 2 to the square root of n
  for (let i = 2; i * i <= n; i++) {
    
    // if n is divisible by i, it is not prime
    if (n % i === 0) {
      return false;
    }
  }

  // otherwise, it is prime
  return true;
}
