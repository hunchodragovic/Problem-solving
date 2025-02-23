function doubleChar(str) {
  let result = "";
  for (let index = 0; index < str.length; index++) {
    const element = str[index];
    result += element.repeat(2);
  }
  return result;
}
