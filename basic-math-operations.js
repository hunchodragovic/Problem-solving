function basicOp(operation, value1, value2) {
  let results = "";
  if (operation === "+") {
    results = value1 + value2;
  } else if (operation === "-") {
    results = value1 - value2;
  } else if (operation === "*") {
    results = value1 * value2;
  } else if (operation === "/") {
    results = value1 / value2;
  }
  return results;
}
console.log(basicOp("-", 5, 5));
