function greet(language) {
  for (let index = 0; index < arr.length; index++) {
    if (arr[index][0] === language) {
      return arr[index][1];
    }
  }
  return "Welcome";
}

console.log(greet("german")); // "Willkommen"
console.log(greet("unknown")); // "Welcome"
