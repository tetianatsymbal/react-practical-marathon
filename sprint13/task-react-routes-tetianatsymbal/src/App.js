import React, { useState } from 'react';
import { Routes, Route, useParams, useSearchParams, Link, useNavigate } from 'react-router-dom';
import './App.css';


const AppWrapper1 = () => {
  const { param } = useParams();
  return <div>Subtask1, parameter: {param}</div>
};

const AppWrapper2 = () => {
  const [searchParams] = useSearchParams ();
  let queryParams = searchParams.toString().split("&").join(", ");
  // console.log(queryParams);
  return <div>Subtask2, query parameters: {queryParams}</div>
};

const AppWrapper3 = () => {
  return <div>Subtask3, protected information</div>
};

const AppWrapper4 = () => {
  return <div>Subtask4, navigated programmatically</div>
};


export default function App() {

  const [inputNum, setInputNum] = useState("");

  const navigated = useNavigate();
  
  return (
    <div className="App">
      <h1>React Marathon</h1>
      <h2>The topic 'Routes'</h2>
      <Link to={ inputNum % 2 !== 0 ? '/subtask3' : "/" } >Show protected information if</Link>
      <span>&nbsp;</span>
      <input size="5" onChange={(e)=>setInputNum(e.target.value)} value={inputNum}></input> is odd
      <div className="mainClass">
        Go to the component programmatically, by checking the box:{" "}
        <input type="checkbox" checked={false} onChange={()=>navigated('/subtask4')} ></input>
      </div>
      <Routes>
        <Route path='/subtask1/:param' element={<AppWrapper1/>} />
        <Route path='/subtask2/*' element={<AppWrapper2/>} />
        <Route path='/subtask3' element={<AppWrapper3/>} />
        <Route path='/subtask4' element={<AppWrapper4/>} />
      </Routes>
    </div>
  );
}
