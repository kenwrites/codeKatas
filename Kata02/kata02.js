/*

This is a solution to the challenge at http://codekata.com/kata/kata02-karate-chop/

*/

'use strict';


// Recursive method 

let index_base = 0;

function recursiveChop(search_term, array) {
    let keepGoing = true;
    let index;
    while (keepGoing){
        index = Math.round((array.length / 2) -1);
        let current_value = array[index];
        if (current_value === search_term){
            return index + index_base;
        } else if (current_value > search_term){
            array = array.slice(0, index + 1);
            recursiveChop(search_term, array);
        } else {
            array = array.slice(index + 1);
            index_base += index;
            recursiveChop(search_term, array);
        }
    }
}

let array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// console.log(`Recursive method: ${recursiveChop(9, array1)}`);

// Iteration Method

function iterativeChop(search_term, array){
    let index = Math.round(array.length / 2);
    let maxIterations = index;
    let current_value;
    for (let i = 0; i < maxIterations; i++){
        current_value = array[index];

        // Found value
        if (current_value === search_term){
            return index;

        // Look down
        } else if (search_term < current_value){
            index = Math.round(index / 2);
            // TODO: handle case:  array.length = 2 (infinite loop)

        // Look up
        } else {
            let upper_range = array.length - (index + 1);
            index = index + Math.round(upper_range / 2);
        }
    } // end for loop
} // end iterativeChop()

console.log(`Iterative Method: ${iterativeChop(8, array1)}`);

