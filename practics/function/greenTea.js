// the prepareTea and getTea functions are already defined for you.
// Call the getTea function to get 40 cups of tea for the team, and store them in the tea4TeamFCC variable.

// Function that returns a string representing a cup of green tea
const prepareTea = () => "greenTea"

/*
Given a function (representing the tea type) and number of cups needed, the
following function returns an array of strings (each representing a cup of
a specific type of tea).
*/

let getTea = (numberOfCup) => {
    let cupTeas = [];
    for(let cups = 1;cups<=numberOfCup;cups+=1){
        const teacup = prepareTea();
        cupTeas.push(teacup);
    }
    return cupTeas;
}

console.log(getTea(40));