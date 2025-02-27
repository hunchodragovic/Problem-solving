function findAverage(array) {
  if (array.length === 0) return 0;
  let result = 0;
  for (let index = 0; index < array.length; index++) {
    result += array[index];
  }
  return result / array.length;
}
console.log(findAverage([2, 2, 2, 6]));
