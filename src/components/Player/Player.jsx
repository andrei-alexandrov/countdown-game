import { useState, useRef, useEffect } from "react";

import "./Player.scss";

export default function Player() {
  const [input, setInput] = useState("");
  const playerName = useRef();

  useEffect(() => {
    const storedName = localStorage.getItem("playerName");
    if (storedName) {
      setInput(storedName);
    }
  }, []);

  function handleClick() {
    const newInput = playerName.current.value;
    setInput(newInput);
    localStorage.setItem("playerName", newInput);
    playerName.current.value = "";
  }

  return (
    <section className="player">
      <h2>Welcome, {input ? input : "unknown"}</h2>
      <p>
        <input ref={playerName} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}

//Друг по-дълъг начин със State
// import { useState } from "react";

// export default function Player() {
//   const [input, setInput] = useState("");
//   const [submit, setSubmit] = useState(false);

//   function handleClick() {
//     setSubmit(true);
//   }

//   function getInput(e) {
//     setSubmit(false);
//     setInput(e.target.value);
//   }
//   return (
//     <section id="player">
//       <h2>Welcome, {submit ? input : "unknown"}</h2>
//       <p>
//         <input type="text" value={input} onChange={getInput} />
//         <button onClick={handleClick}>Set Name</button>
//       </p>
//     </section>
//   );
// }
