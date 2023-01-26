const whatIsInAName = (collection,source) => {
    // let sourceKeys = Object.keys(source)

    //type - 1
    // return collection.filter(obj => {
    //     for(let i = 0;i<sourceKeys.length;i++){
    //         if(!obj.hasOwnProperty(sourceKeys[i]) || obj[sourceKeys[i]] !== source[sourceKeys[i]]){
    //             return false;
    //         }
    //     }

    //type - 2
    // return collection
    // .filter(obj => sourceKeys
    //                  .every(key => obj.hasOwnProperty(key) &&
    //                         obj[key] === source[key]));

    //type - 3 
    // filter the collection
    // return collection.filter(obj => sourceKeys
    //     .map(key => obj.hasOwnProperty(key) && obj[key] === source[key])
    //     .reduce((a, b) => a && b));

        // return true;
    // })

    // type - 4
    const arr = [];
    for (let i = 0; i < collection.length; i++) {
        let found = true;
        for (const sourceProp in source) {
            if (collection[i][sourceProp] !== source[sourceProp]) {
                found = false;
                break;
            }
        }
        if (found) arr.push(collection[i]);
    }
    return arr
}

let obj = whatIsInAName(
    [
        { first: "Romeo", last: "Montague" },
        { first: "Mercutio", last: null },
        { first: "Tybalt", last: "Capulet" }
    ],
    { last: "Capulet" }
);

console.log(obj);



