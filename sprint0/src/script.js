//combineFunctions(negate, halve, square) =======> square(halve(negate(x)))
let negate = (x) => {
  return -x;
};

let halve = (x) => {
  return x / 2;
};

let square = (x) => {
  return x * x;
};

let double = (x) => {
  return 2 * x;
};

// const combineFunctions =
//   (...x) =>
//   (k) =>
//     combineFunctions(k(x));
const combineFunctions =
  (...functions) =>
  (x) =>
    functions.reduce((arg, fn) => fn(arg), x);

console.log(combineFunctions(negate, halve, double));
