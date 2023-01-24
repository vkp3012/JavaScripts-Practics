// Rewrite the code so the global array bookList is not changed inside either function. 
// The add function should add the given bookName to the end of the array passed to it and return a new array (list). T
// he remove function should remove the given bookName from the array passed to it.
// Note: Both functions should return an array, and any new parameters should be added before the bookName parameter.


// the global variable
var bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", 
                    "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

/* This function should add a book to the list and return the list */

function add(arr,bookName){
    let newArr = [...arr];
    newArr.push(bookName);
    return newArr
}

var newBookList = add(bookList, 'A Brief History of Time');
console.log(newBookList);

/* This function should remove a book to the list and return the list */

function remove(arr,bookName){
    let newArr = [...arr];
    if(newArr.indexOf(bookName) >= 0){
        newArr.splice(newArr.indexOf(bookName),1);
        return newArr;
    }
}

var newBookList = remove(bookList, 'The Hound of the Baskervilles');
console.log(newBookList);

