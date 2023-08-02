const prompts = require("prompts");

function isPrimeNumber(number) {
    const notPrimeCheck = (n) => {
        // 0 and 1 can't be prime starts in 2
        for(let i = 2; i < n; i++){
            if (!(n % i)) {
                return 0;
            }
        }
        return n; 
    }

    return (!(number % 2)) ? 0 : notPrimeCheck(number); 
}

function getFirstPrimeNumbers(quantity) {
    const primeList = [];
    let aux = 0;

    while (primeList.length < quantity) {
        if (isPrimeNumber(aux)) {
            primeList.push(aux);
        }
        aux++;
    }

    return primeList;
}

function run() {
    console.log("The number 4 is a prime number?", isPrimeNumber(4))
    console.log("First 10 prime numbers", getFirstPrimeNumbers(10))
}

module.exports = run;