import React from "react";
import style from "./input.module.css";

function Input() {
  return <input type="text" className={style.active} placeholder="your text" />;
}

export default Input;
