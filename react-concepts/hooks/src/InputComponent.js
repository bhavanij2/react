import { useState } from "react";

export default function InputComponent() {
  const [inputText, setText] = useState("hello");

  const handleChange = (e) => setText(e.target.value);

  return (
    <>
      <input type="text" value={inputText} onChange={handleChange} />
      <p>You Typed: {inputText} </p>
      <button onClick={() => setText("hello")}>Reset</button>
    </>
  );
}
