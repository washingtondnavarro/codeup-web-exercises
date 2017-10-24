// (function () {

    "use strict";


//     // var car = {};
//     // car.make = "Toyota";
//     // car.model = "Camry";
//     // car.logMakeModel = function () {
//     //     console.log("Car make/model is: " + this.make + " " + this.model);
//     // };
//
//     var car = {
//         make: "Toyota",
//         model: "Camry",
//         logMakeModel: function () {
//             console.log("Car make/model is: " + this.make + " " + this.model);
//         }
//     };
//
// // log the make/model
//     car.logMakeModel();
//
//     var carOne = {
//     color: "red",
//     year: "2017",
//     logColorYear: function () {
//         console.log("car color/ year is: " + this.color + " " + this.year);
//     }
//
//     };
//
//     carOne.logColorYear();
//
//     console.log(typeof car);
//
//     //testing the value
//
//     var arraya = ['a','b','c'];
//
//     console.log(typeof arraya);
//
//     var sayHi = ("hello");
//
//     console.log(typeof sayHi);
//
// //    Syntax
// //
// //     var car = {};
// //
// //     console.log(typeof car);
// // "object"
//
// //    Example
// //    var newobject = {
// //    proterties: "anything",
// //    }
// //    or
// //    var newonject ={}
// //    newobject.property = "anything";
//
//     var cars = [
//         {
//             make: "Toyota",
//             model: "Camry",
//             features: ["Automatic Windows", "Bluetooth Connectivity", "GPS Navigation"],
//             owner: {
//                 name: "Jane Doe",
//                 age: 30
//             }
//         },
//         {
//             make: "Honda",
//             model: "Accord",
//             features: ["Automatic Windows", "Great Gas Mileage", "AM/FM Radio"],
//             owner: {
//                 name: "John Doe",
//                 age: 31
//             }
//         }
//     ];
//
//     console.log("The first car is a " + cars[0].make + " " + cars[0].model + ".");
//     console.log("The owner of the second car is " + cars[1].owner.name + ".");
//
//     console.log("Here are all the features of all the cars:");
//     cars.forEach(function(car) {
//         car.features.forEach(function(feature) {
//             console.log(feature);
//
//
//         });
//     });




//  -------------------------  EXERCISE

        /**
         * TODO:
         * Create an object with firstName and lastName properties that are strings
         * with your first and last name. Store this object in a variable named
         * `person`.
         *
         * Example:
         *  > console.log(person.firstName) // "Rick"
         *  > console.log(person.firstName) // "Sanchez"
         */

        /**
         * TODO:
         * Add a sayHello method (FUNCTION) to the person object that returns a greeting using
         * the firstName and lastName properties.
         * console.log the returned message to check your work
         *
         * Example
         * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
         *
         */

//         var person = {
//             firstName: "Washington",
//             lastName: "Navarro",
//             sayHello: function() {
//             console.log("Hello from " + person.firstName + " " + person.lastName);
//             }};
//
//                 //one way to call the function
//                 person.sayHello();
//                 // other way to call the fucntion
//                 console.log(person.sayHello());
//
// //                if the function is defined outside of the  object
//
// function sayHello() {
//     console.log("Hello from " + person.firstName + " " + person.lastName);
// }
//
//         console.log("This is my name: " + person.firstName + " " + person.lastName);


// //with return
//         person.sayHello = function() {
//             return "hello from " person.firstName + " " + person.lastName;
//         };
//
//         console.log(person.sayHello());
//


        //------------Second Exercise



        /** TODO:
         * HEB has an offer for the shoppers that buy products amounting to
         * more than $200. If a shopper spends more than $200, they get a 12%
         * discount. Write a JS program, using conditionals, that logs to the
         * browser, how much Ryan, Cameron and George need to pay. We know that
         * Cameron bought $180, Ryan $250 and George $320. Your program will have to
         * display a line with the name of the person, the amount before the
         * discount, the discount, if any, and the amount after the discount.
         *
         * Uncomment the lines below to create an array of objects where each object
         * represents one shopper. Use a foreach loop to iterate through the array,
         * and console.log the relevant messages for each person
         */

        // var shoppers = [
        //     {name: 'Cameron', amount: 180},
        //     {name: 'Ryan', amount: 250},
        //     {name: 'George', amount: 320}
        // ];
        //
        // shoppers.forEach(function(shopper) {
        //     if (shopper.amount <= 200) {
        //         console.log("Customer " + shopper.name + " the total bill is " + shopper.amount + " has no discount")
        //     } else {
        //         shopper.discount = shopper.amount * .12;
        //         // console.log(parseFloat(twelvediscount.discount));
        //         console.log("Customer " + shopper.name + " the total bill is " + shopper.amount + " has " + shopper.discount + " discount")
        //     }});


// William's Solution'
//     var disThreshold = 200;
//     var disPercentage = .12;
//     disThreshold is the discount Threshold
//     disPercentage is the discount Percentage
//
//     function calculteDiscount(amount, disThreshold, disPercentage) {
//         if (amount > dis)

// }

// log information about each car
// cars.forEach(function(car) {
//   console.log('Make: ' + car.make + ' - Model: ' + car.model)
//   console.log('Owner: ' + car.owner.name);
//   car.features.forEach(function(feature) {
//     console.log('  - ' + feature);
//   });
//   console.log('----------------------------------------')
// });

    // shoppers.forEach(function(discount) {
    //     console.log("Custoner " + discount.name + " the total bill is " + discount.amount)
    // });

        /** TODO:
         * Create an array of objects that represent books and store it in a
         * variable named `books`. Each object should have a title and an author
         * property. The author property should be an object with properties
         * `firstName` and `lastName`. Be creative and add at least 5 books to the
         * array
         *
         * Example:
         * > console.log(books[0].title) // "The Salmon of Doubt"
         * > console.log(books[0].author.firstName) // "Douglas"
         * > console.log(books[0].author.lastName) // "Adams"
         */

        var books = [
            {title: "TITLE", authorproperty: {firstName: "FIRST",lastName:"LAST"}},
            {title: "TITLE1", authorproperty: {firstName: "FIRST1",lastName:"LAST1"}},
            {title: "TITLE2", authorproperty: {firstName: "FIRST2",lastName:"LAST2"}},
            {title: "TITLE3", authorproperty: {firstName: "FIRST3",lastName:"LAST3"}},
            {title: "TITLE4", authorproperty: {firstName: "FIRST4",lastName:"LAST4"}}
            ];


            books.forEach(function(list){
                console.log(list.title, list.authorproperty.firstName, list.authorproperty.lastName)
            });

        /**
         * TODO:
         * Loop through the books array and output the following information about
         * each book:
         * - the book number (use the index of the book in the array)
         * - the book title
         * - author's full name (first name + last name)
         *
         * Example Console Output:
         *
         *      Book # 1
         *      Title: The Salmon of Doubt
         *      Author: Douglas Adams
         *      ---
         *      Book # 2
         *      Title: Walkaway
         *      Author: Cory Doctorow
         *      ---
         *      Book # 3
         *      Title: A Brief History of Time
         *      Author: Stephen Hawking
         *      ---
         *      ...
         */

        books.forEach(function(verticallist, index ){
            console.log("Book # " + (index + 1));
            console.log("Title: " + verticallist.title);
            console.log("Author: " + verticallist.authorproperty.firstName + " " + verticallist.authorproperty.lastName);
                var counter = counter +1;
        });

        /**
         * Bonus:
         * - Create a function named `createBook` that accepts a title and author
         *   name and returns a book object with the properties described
         *   previously. Refactor your code that creates the books array to instead
         *   use your function.
         * - Create a function named `showBookInfo` that accepts a book object and
         *   outputs the information described above. Refactor your loop to use your
         *   `showBookInfo` function.
         */
    // function () {
            
        // }



// }());
