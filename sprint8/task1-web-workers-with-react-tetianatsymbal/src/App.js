import { useState } from "react";
import "./App.css";

//Note: please, do dot change placeholder and data-testid attributes

function App() {
  let worker = new Worker("worker.js");

  
  const [num, setNum] = useState("");
  const [result, setResult] = useState("");
  
  const calculate = () => {
    if (worker.inProgress !== undefined) {
      worker.terminate();
      worker = new Worker("worker.js");
    } 

    worker.onmessage = (result) => {
      setResult(result.data);
    };
    
    setResult("Calculating...");
    worker.inProgress = true;
    worker.postMessage({ data: +num });
  };
  return (
    <div className="app">
      <h1>Fibonacci 🌀</h1>
      <input
        type="number"
        onChange={(e) => setNum(e.target.value)}
        value={num}
        placeholder="Insert a number"
      />
      <button onClick={calculate}>Calculate</button>
      <div className="result" data-testid="result">
        Result: {result}
      </div>
    </div>
  );
}

export default App;
