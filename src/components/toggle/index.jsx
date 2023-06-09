import "./style.scss";
import { useEffect, useState } from "react";

export function Toggle() {
  const [checked, setChecked] = useState(false);

  function handleChecked() {
    setChecked(!checked);
  }

  useEffect(()=> {
    console.log(checked)
  },[checked])

  return (
    <input
      type="checkbox"
      className={`toggleButton ${checked ? "checked" : ""}`}
      onClick={handleChecked}
    />
  );
}
