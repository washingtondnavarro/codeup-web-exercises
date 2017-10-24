(function(){
    "use strict";

    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */

    // var names = ["Betsy", "Ruth", "David" ,"Wacho"];

    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */
    // var numberOfnames = names.length;
    // console.log(numberOfnames);

    /* or */

    // console.log(names.length);

    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */
    // console.log(names [0]);
    // console.log(names [1]);
    // console.log(names [2]);
    // console.log(names [3]);

    /* or */

    // names.forEach(function (names) {
    //     console.log(names);
    // });

    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */
    // for(var i = names.length -1; i >=0; i -= 1) {
    //     console.log("here is a member of my family " + names[i]);
// }
    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */

    // names.forEach(function (names) {
    //     console.log("here is a member of my family " + names);
    // });

    /* or with only element*/


    // names.forEach(function (element) {
    //     console.log(element);
    // });


    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */
// var arr = ([1, 2, 3, 4, 5]);
//     function first(arr) {
//         return arr[0];

    // }
    // var tree = ["First", "Second", "Last"];
    //
    //     tree.forEach(function (element, index, array) {
    //     Console.log(element);
    //     console.log(index);
    // })


//     Arrays Review
//
//     Given the following code:
//
//         var myArray = [1, 2, 3, 4, 5];
//         What is the element at index 0?
//              1
//
//         What is the index of the element 3?
//              2
//
//         What is the length of the array i.e. how many elements are in the array?
//                5 and 5
//
//         What is the index of the last element in the array? How does this number relate to the length of the array?
//              4  = length - 1
//
//         Write a for loop that console logs each element in the array. Refactor your code to use a foreach loop. How are they different?

    // console.log(names [1]);
    // console.log(names [2]);
    // console.log(names [3]);
    // console.log(names[0]);
    //
    //
    // names.forEach(function (names) {
    //     console.log("here is a member of my family " + names);
    // });

//
//         Consider the following:
//
//         var myArray = [2, 3, 4];
    // myArray.pop();
    // myArray.unshift(1);
    // console.log(myArray);
//     What will the code output?
//            take the last element out
//              add 1 to the array

//         What is the length of myArray?
//         console.log(myArray.length)
//              2
//         What will myArray.indexOf(2) return?
//         console.log(myArray.indexOf(2));
//                 0

//
//         What will myArray.indexOf('2') return?
//         console.log(myArray.indexOf('2'));
                // -1 because it doesnt exist

//         Using split and join to complete the following:
//
//         var myPhoneNumber = '210.867.5309';
// // TODO: convert myPhoneNumber to an array that contains the area code, the
// // first three digits and the last four numbers in the phone number
//     var bondsArray = myPhoneNumber.split("."); // comma and space = delimiter ("") to separate every single element
//         console.log(bondsArray)
//
// // TODO: convert the array back to a string the contains the phone number with
// // the groups of numbers separated by dashes

    // var bondsString = bondsArray.join("-"); /*(“_”);(“-“)*/
    // console.log(bondsString)

//
// // console log throughout to check your work
//
//
}());