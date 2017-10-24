(function () {
    "use strict";


    //
    // Write a function that accepts an array whose elements are arrays of numbers. The
    // function should return the original array, but in the place of each element, the
    // sum of the numbers from the inner array.
    //
    // sumEmUp([[1], [1, 2, 3], [5, 5, 5], [1, 1, 1, 1, 1]]) // returns [1, 6, 15, 5]

    var one = aceptingArray("First");
    var two = aceptingArray("Second");
    var three = aceptingArray("Third");


    var numbersaccepted = [one, two, three];

    function aceptingArray(a) {
        var aa = prompt(a + " number");
  return aa;
    }


    var add = one + two + three;

    console.log(add);
    console.log(numbersaccepted);

// function hello(a) {
//     console.log(a)
//
// }

// hello(5)

    //
    // ---
    //
    //     Write a function that converts 12 to 24 hour time, and one that does the inverse
    //
    // twelveToTwentyFour('1:00pm') // returns '13:00'
    // twelveToTwentyFour('9:00pm') // returns '21:00'
    // twelveToTwentyFour('9:00am') // returns '09:00'
    // twelveToTwentyFour('12:00pm') // returns '12:00'
    // twelveToTwentyFour('12:00am') // returns '00:00'
    //
    // twentyFourToTwelve('13:00') // returns '1:00pm'
    // twentyFourToTwelve('06:30') // returns '6:30am'
    // twentyFourToTwelve('23:00') // returns '11:00pm'
    // twentyFourToTwelve('12:00') // returns '12:00pm'
    // twentyFourToTwelve('00:45') // returns '12:45am'
    //
    // ---
    //
    //     Write a split function. You can call `.split` on a string, but the point of this challenge is to implement it yourself. You function should accept a string and a delimeter, and return an array.
    //
    // split('1-2-3-4-5', '-') // returns [1, 2, 3, 4, 5]
    //
    // ---
    //
    //     Write a function named `parseDate`. It should accept a string that is a date, and return a more human-friendly representation.
    //
    //
    // parseDate('2017-10-19') // returns "October 19, 2017"
    // parseDate('2017-12-25') // returns "December 25, 2017"
    //
    // ---
    //
    //     Write a function that accepts an array whose elements are arrays where each
    // inner array consists of two numbers. The function should return the index of the
    // element whose two inner numbers add up to 9, or -1 if no pairs add up to 9.
    //
    // findIndexWhereSumIs9([[1, 2], [3, 4], [4, 5], [9, 1]]) // returns 2
    // findIndexWhereSumIs9([[10, 2], [11, -2], [2, 5], [9, 1]]) // returns 1
    // findIndexWhereSumIs9([[10, 2], [11, -7], [2, 5], [9, 1]]) // returns -1
    //
    //

}());