import "./style.scss";
import { useEffect, useState } from "react";

export function Toggle(props) {

  return (
    <input
      type="checkbox"
      className={`toggleButton ${props.checked ? "checked" : ""}`}
      onClick={props.functionChecked}
    />
  );
}
