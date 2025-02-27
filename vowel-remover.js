function sumMix(x) {
  const y = x.map((z) => Number(z));
  const n = y.reduce((acc, curr) => acc + curr, 0);
  return n;
}
console.log(sumMix([]));
