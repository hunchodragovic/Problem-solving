function positiveSum(arr) {
  let sum = 0; // Initialize sum

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      sum += arr[i]; // Add only positive numbers
    }
  }

  return sum; // Return the total sum
}

const arr = [1, -4, 7, 12, -6];
console.log(positiveSum(arr)); // Output: 20
