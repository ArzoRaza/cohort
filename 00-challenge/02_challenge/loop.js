// // function countSteps(targetSteps){
// //     let stepsComplete = 0; 
// //     for(let i = 1; i <= targetSteps; i++) {
// //          stepsComplete++;
// //     }
// //     return stepsComplete; //  5
// // }

// // countSteps(5);

// function countSteps(targetSteps) {
//     let stepsComplete = 0; 
//       for(let i = 1; i <= targetSteps; i++) {
//            stepsComplete++;
//       }
//         return stepsComplete;
    
//   }

// function shinyDiamondRug(n) {
//     let result = [];  // Store each row as an array element
  
    // Top half (including middle row)
//     for (let i = 1; i <= n; i++) {
//       let spaces = " ".repeat(n - i);  // Leading spaces
//       let stars = "*".repeat(2 * i - 1);  // Stars pattern
//       result.push(spaces + stars);
//     }
  
//     // Bottom half (excluding middle row)
//     for (let i = n - 1; i >= 1; i--) {
//       let spaces = " ".repeat(n - i);
//       let stars = "*".repeat(2 * i - 1);
//       result.push(spaces + stars);
//     }
  
//     console.log(result.join("\n"));  // Print as a formatted string
//   }
  
//   // Test the function
//   shinyDiamondRug(4);
  




  
// function invertedMountain(n) {
//     let result = [];
//     for(let i = n; i > 0; i--) {
//       let start = "*".repeat(i)
//       result.push(start);
//     }
//     return result.join("\n");
    
//   }


function filterHealthy(foodList) {
    // Remove unhealthy food and return updated list
    foodList.includes("Burget").pop();
    return foodList;
}

filterHealthy(["Burger", "Apple", "Guava", "Orange"]);
console.log(foodList);

