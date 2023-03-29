function fibonacci(num) {
  return num <= 1 ? num : fibonacci(num - 1) + fibonacci(num - 2);
}
onmessage = ({ data }) => {
  postMessage(fibonacci(+data.data));
};
