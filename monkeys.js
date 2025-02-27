function monkeyCount(n) {
  let arr = [];
  for (let index = 1; index <= n; index++) {
    arr.push(index);
  }
  return arr;
}

console.log(monkeyCount(10));
