// the prepareTea and getTea functions are already defined for you.
// Call the getTea function to get 40 cups of tea for the team, and store them in the tea4TeamFCC variable.

// Function that returns a string representing a cup of green tea
const prepareGreenTea = () => "greenTea"
const prepareBlackTea = () => "BlackTea"

/*
Given a function (representing the tea type) and number of cups needed, the
following function returns an array of strings (each representing a cup of
a specific type of tea).
*/

let getTea = (prepareTea,numberOfCup) => {
    let cupTeas = [];
    for(let cups = 1;cups<=numberOfCup;cups+=1){
        const teacup = prepareTea();
        cupTeas.push(teacup);
    }
    return cupTeas;
}

console.log(getTea(prepareBlackTea, 3));
console.log(getTea(prepareGreenTea, 5));