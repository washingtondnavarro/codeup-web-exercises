(function () {
    "use strict";


    // var soldcones = Math.floor(Math.random() * 50) + 1;

    var getAnumber;

    do
    {
        getAnumber = prompt("Key in an Odd number")

    } while ((getAnumber % 2 === 0) || (getAnumber <= 1) || (getAnumber >= 50));

        console.log("Great Work, Here are the rest");

        console.log(" The number to skip is " + getAnumber);


        for (var counter = 1; counter < 50; counter = counter + 2) {
            if (getAnumber == counter) {
                console.log("yikes this is horrible " + getAnumber);
            } else {
                console.log("Here is an odd number " + counter);
                    }
        }
}());