{
    "use strict";

//    map

    //mapnumbers

    const numbers = [1, 2, 3, 4, 5];

    const aladiez = numbers.map(function (number) {
        return number * 10
    });

    console.log(aladiez);


    const aladiezdos = numbers.map((number) => {
        return number * 10
    });
    console.log(aladiezdos);

//    mapprices
    //

    const prices = numbers.map(function (number) {
        return "$" + number.toFixed(2);

    });
    console.log(prices);

//    mapletters

    // const nombres = ['betsy', 'ruth', 'wacho', 'nichole'];
    // //
    // const namesCapsfirstletter = (string) => {
    //     const rest = string.substr(1, string.length - 1);
    //
    //     return string[0].toUpperCase() + rest;
    // };
    // const uppercasefirstletername = nombres.map(namesCapsfirstletter);
    // console.log(uppercasefirstletername);
    //

    //
    //
    const numbres = ['david', 'dexter','paco','max'];
    //-------------------------thin is a function to to take th first letter out ALFA
    const gettingFuppCase = function(string) {
        console.log(string);
        const resttoo = string.substr(1, string.length - 1);
        //this is just to return the results of the const resttoo

             // return resttoo

        //to the function work with a string
               // console.log(gettingFuppCase("we can send a string here to see the results");


        //to return the string with the first letter capitalized
        //return theaarray[0].upperCase() + rest

        return string[0].toUpperCase() + resttoo;
        };
    const upperCaseFirstLetterNameToo = numbres.map(gettingFuppCase);
    console.log(upperCaseFirstLetterNameToo);


    const naimbs = ['raul', 'lorena', 'carlos','mafer'];

    const primeraLetra = (elnonmbre) =>{
        const elResto = elnonmbre.substr(1, elnonmbre.length - 1);
        return elnonmbre[0].toUpperCase() + elResto;
    };
    console.log(primeraLetra("mama"));

    const todoslosNombres = naimbs.map(primeraLetra);
    console.log(todoslosNombres)



}
//    reduce


// const numbers = [1, 2, 3, 4, 5];

    // const sum = numbers.reduce(function (accumulator, number) {
    //     return accumulator + number;
    //
    // }, 0);
    //
    // console.log(sum);


//     const letters = ['C', 'o','d','e','U','p'];
//
//     const letterReduction = letters.reduce(function (accumulator, letter) {
//         return accumulator + letter;
//     }, );
//
//     console.log(letterReduction)
// }

// <!DOCTYPE html>
// <html lang="en">
//     <head>
//     <meta charset="UTF-8">
//     <title>Title</title>
//     </head>
//     <body>
//
//     <script>
//     "use strict";
//
// // map runs a function on every item on a list
// // returns a list of the same size
// // output a new array with each element w/ a dollar price
// // output = ['$1.00', '$2.00', '$3.00', '$4.00', '$5.00']
// const numbers = [1, 2, 3, 4, 5];
//
// const prices = numbers.map((number) => {
//     return "$" + number.toFixed(2);
// });
// console.log(prices);

// const artists = ['donovan', 'bobby', 'janice', 'aaron'];
//
// const upperCaseFirstCharacter = (string) => {
//     const rest = string.substr(1, string.length - 1);
//
//     return string[0].toUpperCase() + rest;
// };
// const upperCasedArtists = artists.map(upperCaseFirstCharacter);
// console.log(upperCasedArtists);
//
//
// // filtering filters a collection into a (possibly) smaller collection
// const mAndMCandies = ['green', 'green', 'blue', 'red', 'red', 'green', 'blue', 'brown', 'red', 'red', 'yellow', 'brown', 'blue', 'pink', 'white'];
//
// const greenAndBrownMAndMs = mAndMCandies.filter((candy) => {
//     if(candy == "green" || candy == 'brown') {
//         return true;
//     } else {
//         return false;
//     }
// });
//
// console.log(greenAndBrownMAndMs);
//
//
// // reduce method runs on an array and applies a function to all the elements
// // that function "reduces" that list values to a single value
// const sum = numbers.reduce(function(runningTotal, number) {
//     return runningTotal + number;
// });
//
// console.log(sum);
//
// let letters = ['C', 'o', 'd', 'e', 'u', 'p'];
//
// const letterReduction = letters.reduce(function(accumulator, letter) {
//     return accumulator + letter;
// });
//
// console.log(letterReduction);
//
//
//
// </script>
// </body>
// </html>