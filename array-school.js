function getAverage(marks) {
  let result = 0;
  for (let index = 0; index < marks.length; index++) {
    const element = marks[index];
    result += element;
  }
  return result / marks.length;
}
console.log(getAverage([2, 2, 2, 2]));
