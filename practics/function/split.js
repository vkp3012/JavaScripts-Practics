// The split method splits a string into an array of strings.
//  It takes an argument for the delimiter, which can be a character to use to break up the string or a regular expression.
//   For example, if the delimiter is a space, you get an array of words, and if the delimiter is an empty string, 
//   you get an array of each character in the string.

// Here are two examples that split one string by spaces, then another by digits using a regular expression:

const str = "Hello World";
const bySpace = str.split(" ");

const otherString = "How9are7you2today";
const byDigits = otherString.split(/\d/);


// /\W/ Matches any non-word character. This includes spaces and punctuation, but not underscores. 
// It’s equivalent to /[^A-Za-z0-9_]/.

function splitify(str) {
    return str.split(/\W/)
}

splitify("Hello World,I-am code");

//q-3
// function urlSlug(title) {
//     return title
//             .toLowerCase()
//             .trim()
//             .split(/\s+/)
//             .join("-")
// }

function urlSlug(title) {
    return title
      .split(" ")
      .filter(substr => substr !== "")
      .join("-")
      .toLowerCase();
}
// Only change code above this line
console.log(urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone"))