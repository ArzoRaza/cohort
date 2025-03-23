let arr = ["Apple", "Bnana", "mango"];

let numberArr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]


//  ___________________________Basic Methods of Array ______________
numberArr.shift();
// console.log(numberArr);  // removed 10 at first index

numberArr.unshift(200)
// console.log(numberArr);  // Added 200 at first index

numberArr.pop()
// console.log(numberArr);  // removed 100 at last index

numberArr.push(300)
// console.log(numberArr)  // added 300 at last index

const numberLength = numberArr.length
// console.log(numberLength)  // Calculating length of numberArray

//  _________________________ Looping over array ___________________
// 1.for, 2.forEach, 3.map, 4.filter, 5.reduce 

// 1.for
for(let i = 0; i < arr.length; i++) {
    let value = arr[i];
    // console.log(value); //    Apple Bnana mango
}

// 2.forEach
arr.forEach(function (fruits, index) {
    return fruits, index;
})





// __________________________  Modifying & Seaching _________________
// splice, slice, indexOf, includes, find


// ___________________________  Advance Operations __________________
// Sort, join, flat, reverce, split

