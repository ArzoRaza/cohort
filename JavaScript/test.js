let age = 18;
// console.log(age);

age = 30;
// console.log(age);

let name = "Arzo";
function userName(){
    let SecondName = "Akbar"
    // console.log(SecondName);
    return SecondName;
}
userName();
// console.log(name);



function sum(a, b){
    // console.log(a + b);
}

let total = sum(5, 4);
// console.log(total);


// -------------------------- Closure

function fruits(){
    let firstName = "Pineapple";

    function juice(){
        console.log(firstName);
    }
    return juice;
}
let myJuice = fruits();
myJuice();

// ------------------------- Multiple Closure

function fruit(fruitName) {
    return function breakFast() {
        console.log(`I love to eat ${fruitName}`);
    }
}
let fruits1 = fruit("Guava");
let fruits2 = fruit("Apple");

fruits1();
fruits2();


