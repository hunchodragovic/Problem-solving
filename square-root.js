function squareOrSquareRoot(array) {
  let filteredArray = array.map((num) => {
    if (Number.isInteger(Math.sqrt(num))) return Math.sqrt(num);
    else if (!Number.isInteger(Math.sqrt(num))) return num ** 2;
  });
  return filteredArray;
}
console.log(squareOrSquareRoot([4, 3, 9, 7, 2, 1]));
