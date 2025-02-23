function noSpace(str) {
  return str
    .split("")
    .filter((char) => char !== " ")
    .join("");
}
console.log(noSpace("haha hahaha"));
