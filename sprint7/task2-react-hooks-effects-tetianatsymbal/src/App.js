import { useEffect, useState } from "react";
import "./App.css";

export default function App() {
  const [appData, setAppData] = useState("");

  useEffect(() => {
    const value = localStorage.getItem("appData");
    setAppData(value);
  }, [appData]);

  return (
    <div>
      React Marathon, appData:<input size="5" defaultValue={appData}></input>
    </div>
  );
}
