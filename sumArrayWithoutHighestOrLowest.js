let arr = [1, 2, 3, 4, 5, 6];

function sumArray(arr) {
  if (!Array.isArray(arr) || arr.length <= 1) return 0;
  let sortedArr = arr.slice().sort((a, b) => a - b);
  let newArr = sortedArr.slice(1, -1);
  return newArr.reduce((sum, num) => sum + num, 0);
}
console.log(sumArray(arr));
