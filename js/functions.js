


(function () {







"use strict";

/**
 * TODO:
 * Create a function called 'sayHello' that takes a parameter 'name'.
 * When called, the function should return a message that says hello to the passed in name.
 *
 * Example
 *  > sayHello("codeup") // returns "Hello, codeup!"
 *

 */

 // function sayHello(name) {
 //           return "hello " + name + "!";
 //       }
 //    console.log(sayHello("Washington"))



/**
 * TODO:
 * Call the function 'sayHello' and pass your name as a string literal argument.
 * Store the result of the function call in a variable named 'helloMessage'.
 *
 * console.log 'helloMessage' to check your work
 */
//
// var helloMessage = sayHello("Washington");
//
//     console.log(helloMessage);

/**
 * TODO:
 * Store your name as a string in a variable named 'myName', and pass that
 * variable to the 'sayHello' function. You should see the same output in the
 * console.
 */
//
// var myName = ("washington");
// console.log (sayHello(myName));
//
// Don't modify the following line, it generates a random number between 1 and 3
// and stores it in a variable named random
// var random = Math.floor((Math.random() * 3) + 1);

/**
 * TODO:
 * Create a function called 'isTwo' that takes a number as a parameter.
 * The function should return a boolean value based on whether or not the passed
 * number is the number 2.
 *
 * Example
 *  > isTwo(1) // returns false
 *  > isTwo(2) // returns true
 *  > isTwo(3) // returns false
 *
 * Call the function 'isTwo' passing the variable 'random' as a argument.
 *
 * console.log *outside of the function* to check your work (you should se
 * different result everytime you refresh the page if you are using the random
 * number)
 */

//  function isTwo (number) {
//      if (number === 2){
//          return "true"
//      }
// else {return "false" ;
//
//      }
// }
//
// console.log( isTwo(random));


/**
 * TODO:
 * Create a function named 'calculateTip' to calculate a tip on a bill at a
 * restaurant. The function should accept a tip percentage and the total of the
 * bill, and return the amount to tip
 *
 * Example:
 * > calculateTip(0.20, 20) // returns 4
 */

// alert("Welcome to Taco Cabana")
//
// var bill = prompt("What is the total of the Bill?");
// var gratitude = prompt("What is the % of the gratitude?");
//
// function calculateTip (percentageofTip, amountofthebill) {
//     var tip = amountofthebill * (percentageofTip/100);
//     return tip;
// }
//
//  console.log(calculateTip(gratitude, bill));
//
//  function totalofthebill (thetotalofthefood, theamountofthetip) {
//      var youpay = parseFloat(thetotalofthefood) + parseFloat(theamountofthetip);
//      console.log(youpay)
//      return youpay;
//  }
//
//  console.log(totalofthebill(bill, calculateTip(gratitude,bill)));
//
//  alert("Smile and say thank you to the customer" )
//
// var finalbill= alert("Your bill is " + bill + " the tip is " + calculateTip(gratitude, bill) + " and the total is " + totalofthebill(bill, calculateTip(gratitude,bill)))
/**
 * TODO:
 * Use prompt and alert in combination with your calculateTip function to
 * prompt the user for the bill total and a percentage they would like to tip,
 * then display the dollar amount they should tip
 */



    // Write a function called `identity(input)` that takes in an argument called input and returns that input.

// function identity(input) {
//     return input;
//
// }
// console.log(identity('hello'));

        // Write a function called `getRandomNumber(min, max)` that returns a random number between min and max values sent to that funciton call.


// var min = prompt("Enter the minimum number");
// var max = prompt("Enter the maximum number");
//
// function getRandomIntInclusive(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
// }
//
// console.log(getRandomIntInclusive(min,max))

        // Write a function called `first(input)` that returns the first character in the provided string.

    var wordProvided = prompt("Enter a Word");
        //
        function first(input) {
            return input.charAt(0)
                                 }
        console.log(first(wordProvided));
//
//         Write a fuction called `last(input)` that returns the last character of a string


    function last (input) {
        var lastletter =input.length;
        return input.charAt(lastletter - 1);
    }
    console.log(last(wordProvided));


        //




//
//     Write a function called `rest(input)` that returns everything but the first character of a string.



    function rest(input) {
        return input.substr(1)

    }
    console.log(rest(wordProvided));
//
//         Write a function called `reverse(input)` that takes a string and returns it reversed.

    function detras(input) {
        // Step 1. Use the split() method to return a new array
        var splitString = input.split(""); // var splitString = "hello".split("");
        // ["h", "e", "l", "l", "o"]

        // Step 2. Use the reverse() method to reverse the new created array
        var reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
        // ["o", "l", "l", "e", "h"]

        // Step 3. Use the join() method to join all elements of the array into a string
        var joinArray = reverseArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join("");
        // "olleh"

        //Step 4. Return the reversed string
        return joinArray; // "olleh"

    }

    console.log(detras(wordProvided))
//
//         Write a function called `isNumeric(input)` that takes an input and returns a boolean if the input is numeric.

    //
    // function  isNumeric(input) {
    //     return isNaN(input);
    // }
    //
    //
    // console.log(isNumeric(wordProvided))
    //
    console.log(isNaN (wordProvided))
//
//         Write a function called `count(input)` that takes in a string and returns the number of characters.

    function cabana(input) {
     var cuenta = input.length;
        return cuenta;

    }
        console.log(cabana(wordProvided));

//         Write a function called `add(a, b)` that returns the sum of a and b

    alert("Enter 2 numbers")

    var primeronumber = parseFloat(prompt("Enter First number"));
    var segundonumber = parseFloat(prompt("Enter Second Number"));

    function adding(a, b) {
        var lasuma = a + b;
        return lasuma;
    }

        console.log(adding(primeronumber, segundonumber));


//
//     Write a function called `subtract(a, b)` that return the difference between the two inputs.
    function substract(a, b) {
        var laresta = a - b;
        return laresta;

    }

    console.log(substract(primeronumber, segundonumber));


//
//         Write `multiply(a, b)` function that returns the product
    function multiply(a, b) {
        var lamulti = a * b;
        return lamulti;
    }
    console.log(multiply(primeronumber, segundonumber));

//
//     Write a divide(numerator, denominator) function that returns a divided by b
    function divide(a, b ) {
        var ladivi = a / b;
        return ladivi;

    }

    console.log(divide(primeronumber, segundonumber));
//
//     Write a remainder(number, divisor) function that returns the remainder left over when dividing `number` by the `divisor`

    function remainder(a, b) {
        var residuo = a % b;
        return residuo;

    }
    console.log(remainder(primeronumber, segundonumber));

//
//     Write the function `square(a)` that takes in a number and returns the number multiplied by itself.
    function square(a) {
        var exponentea = a * a;
        return exponentea;
    }

         console.log(square(primeronumber));
        console.log(square(segundonumber));




//
// # Super Duper Gold-Star Bonus

//     Write a function called sumOfSquares(a, b) that uses only your add() function and your square function and not + or * operators
        function sumOfSquares(a,b) {
            return adding(square(a),square(b))

        }
//
        console.log(sumOfSquares(primeronumber, segundonumber));

//     Write a function called doMath(operator, a, b) that takes 3 parameters. The first parameter is the name of the math function you want to apply. a and b are the two numbers to run that function on.

    alert("Let's do some Calculation");

    var doMath = parseFloat(prompt("what operation do you want to do?\n 1. Addition\n 2. Subtraction\n 3. Multiplication\n 4. Divition"));

    // alert("Enter 2 numbers")
    //
    // var primeronumberCAL = parseFloat(prompt("Enter First number"));
    // var segundonumberCAL = parseFloat(prompt("Enter Second Number"));

        // function doMath(operator, a, b) {
            if (doMath === 1) {
                alert("We are Adding");
            } else if (doMath === 2) {
                alert("We are substracting");
            } else if (doMath === 3) {
                alert ("We are Multiplying");
            } else if (doMath === 4) {
                alert ("We are Dividing");
            } else {
                alert("Get a life")
            }



//Justin

//
// 1) Make a function called returnTwo() that returns the number 2 when called
// ---Test this function with console.log(returnTwo())
//     console.log(test)
//     2) Make a function called returnName() that returns the string of your name
// ---Test this function with console.log(returnName())

        // function returnname() {
        //     return "Washington"
        // }
        // console.log
//     3) Make a function called addThree() which takes in a number input and returns the number plus 3. Remember to define a parameter.
// ---Test this function with console.log(addThree(5))
//
//     4) Make a function called sayString() which returns the string input passed in.
// ---Test this function with console.log(sayString())
//
//     5) Make a function called sayHowdy() which console.logs the string “Howdy!”
//     ---Test this function by directly calling sayHowdy()
// ---Remember this function does not need a defined return value


    // CONDITIONALS BONUSES
    //
    // Bonus 1
    //
    // Create a function that prompts a user for their favorite day of the week and alerts a unique message based on the day.
    // - Catch any invalid inputs.
    // - Write the logic using if/else ifs and then refactor using a switch case


    alert(" Welcome to Inspirational Quote of the Day")

    //
    //     Bonus 2
    //
    // Create a function that prompts the user for an input and then alerts if the input is a number or not a number.
    // - use an if/else
    // - refactor to use a ternary operator
    //
    // Bonus 3
    //
    // Create a function that prompts a user for a season (Spring, Summer, Fall (or Autumn), Winter). The function then alerts the months available in that season and then asks the user to pick a given month. After selecting the month, alert a unique message for the month.
    // - account for any invalid user input
    // - case of input should not matter
    // - accept both abbreviations and full names of the months
    //
}());
