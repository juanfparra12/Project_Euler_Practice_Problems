/*

   The prime factors of 13195 are 5, 7, 13 and 29.

    What is the largest prime factor of the given number?

*/

function largestPrimeFactor(number) {

    //Smallest prime number is 2, this is our start point
    let primeNumber, largestPrimeFactor = 2,

    while (primeNumber <= number) {

        //If remainder === 0, primeNumber is a prime number
        if (number % primeNumber === 0) {

            //We know number is divisble by primeNumber, so reducing number.
            number /= primeNumber;
            largestPrimeFactor = primeNumber;
        }
        //primeNumber is not a prime number incrementing till next prime number
        else
            primeNumber++;
    }

    //console.log(largestPrimeFactor);
    return largestPrimeFactor;
}

largestPrimeFactor(2);
largestPrimeFactor(3);
largestPrimeFactor(5)
largestPrimeFactor(7);
largestPrimeFactor(8);
largestPrimeFactor(13195);
largestPrimeFactor(600851475143);
