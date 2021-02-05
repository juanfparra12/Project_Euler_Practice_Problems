/*  
    If we list all the natural numbers below 10 that are multiples of 3 or 5, 
    we get 3, 5, 6 and 9. The sum of these multiples is 23.

    Find the sum of all the multiples of 3 or 5 below the provided parameter value 
    number. 
*/

    function multiplesOf3and5(number) {

        //Had to subtract by one because 10,100,1000, ... cases would fail
        let currNumber = number - 1;
        let sum = 0;

        /*  
            This is very much so a brute-force solution to this problem;
            first algo that came to mind 
        */
        while (currNumber >= 3){

            //check if currNumber is mutiple of 3 or 5, if so add to sum
            if ( (currNumber % 3 === 0 )  
                ||  (currNumber % 5 === 0))  {
                
                //console.log(`Current Number: ${currNumber}`);
                sum += currNumber;
                //console.log(`Current Sum: ${sum}`);
            }

            currNumber--;
        }

        //console.log(sum);
        return sum;
    }
    
    multiplesOf3and5(10);
    multiplesOf3and5(49);
    multiplesOf3and5(1000);
    multiplesOf3and5(8456);
    multiplesOf3and5(19564);
