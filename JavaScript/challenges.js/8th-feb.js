// Problem: Create an array containing different types of teas
const teas = ["harbal tea", "black tea", "cold tea", "hot tea"];


// Problem: Add "Chamomile Tea" to the existing list of teas
teas.push("chamomile tea");
// console.log(teas);

// Problem: Remove "Oolong Tea" from the list of teas
const index = teas.indexOf("oolong tea");
if(index > -1) {
    teas.splice(index, 1)
    // console.log("oolong teas remove successfully!!");
}
else {
    // console.log("oolong tea not found!");
}


// Problem: Filter the list to only include teas that are caffeinated
const caffeinatedTeas = teas.filter((tea) => tea !== "harbal tea")
// console.log(caffeinatedTeas);


// Problem: Sort the list of teas in alphabetical order
const sortedTea = teas.sort();
// console.log(sortedTea);


// Problem: Use a for loop to print each type of tea in the array

for(let i = 0; i < teas.length; i++){
    // console.log(teas[i]);
}


// Problem: Use a for loop to count how many teas are caffeinated (excluding "Herbal Tea")
let caffeinatedMyTeas = 0;
for(let i = 0; i < teas.length; i++){
    if(teas[i] == "harbal tea"){
        caffeinatedMyTeas = teas[i];
        // console.log(caffeinatedMyTeas);
    }

}

// Problem: Use a for loop to create a new array with all tea names in uppercase
const upperCaseTeas = [];
for(let i = 0; i < teas.length; i++){
    upperCaseTeas.push(teas[i].toUpperCase());
}
// console.log(upperCaseTeas);


// const star = 5;
// for(let i = 0; i < star; i++){
//     let upperCaseTeas = "*".repeat(i) ;
//     console.log(upperCaseTeas);
// }


// Problem: Use a for loop to find the tea name with the most characters

let bigTeas = "";
for(let i = 0; i < teas.length; i++ ) {
    if(teas[i].length > bigTeas.length){
        bigTeas = teas[i];
    }
}
console.log(bigTeas);

// Problem: Use a for loop to reverse the order of the teas in the array
const reversedArray = [];
for(let i = teas.length - 1; i >= 0; i--){
    reversedArray.push(teas[i]);
}
console.log(reversedArray);
