function noBoringZeros(n) {
  let stringNumber = n.toString();

  if (stringNumber.endsWith("0000")) {
    return Number(stringNumber.slice(0, -4));
  } else if (stringNumber.endsWith("000")) {
    return Number(stringNumber.slice(0, -3));
  } else if (stringNumber.endsWith("00")) {
    return Number(stringNumber.slice(0, -2));
  } else if (stringNumber.endsWith("0")) {
    return Number(stringNumber.slice(0, -1));
  }

  return n; // Return original number if no trailing zeros
}

console.log(noBoringZeros(4500000000)); // Output: 45
console.log(noBoringZeros(1050)); // Output: 105
console.log(noBoringZeros(0)); // Output: 0
console.log(noBoringZeros(100020)); // Output: 10002 (only trailing zeros removed)
