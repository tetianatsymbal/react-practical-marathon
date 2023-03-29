let worker = new Worker("worker.js");
function calculate() {
  if (worker.inProgress !== undefined) {
    worker.terminate();
    worker = new Worker("worker.js");
  }

  let inputNum = document.querySelector("#inputNumber").value;

  document.querySelector("#result").innerText = "Calculating...";
  worker.onmessage = (result) => {
    document.querySelector("#result").innerText = `Result: ${result.data}`;
  };

  worker.inProgress = true;
  worker.postMessage({ data: inputNum });
}
