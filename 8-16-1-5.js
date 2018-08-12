/*
 * Programming Quiz: Using the Rest Parameter (1-5)
 */

// your code goes here

function average(...nums) {
    // When no arguments are provided, return 0
    if (nums.length === 0){
      return 0;
    }

    let average = 0;
    let total = 0;

    // Add up all arguments
    for (const num of nums ){
        total += num;
    }

    // Calculate average
    average = total / nums.length;
    
    return average;
}


console.log(average(2, 6));
console.log(average(2, 3, 3, 5, 7, 10));
console.log(average(7, 1432, 12, 13, 100));
console.log(average());
