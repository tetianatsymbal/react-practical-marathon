import { useState } from "react";
import { useErrorHandler } from "react-error-boundary";
import { getData } from "../api";

function DataReceiver() {
  const [data, setData] = useState(0);
  const handleError = useErrorHandler();
  return (
    <>
      <div className="data">
        <button
          onClick={() => {
            try {
              setData(getData());
            } catch (e) {
              handleError(e);
            }
          }}
        >
          Get new data
        </button>
        <div>{data}</div>
      </div>
    </>
  );
}

export default DataReceiver;
