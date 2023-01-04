import "./App.css";
import { useState } from "react";

function App() {
  const [isShown, setIsShown] = useState(false);

  const handleClick = (event) => {
    // 👇️ toggle shown state
    setIsShown(true);
  };

  const handleClickClose = (event) => {
    // 👇️ toggle shown state
    setIsShown(false);
  };

  return (
    <>
      <h1>Products</h1>
      <div id="main">
        <div className="divStyle">
          <button id="button" onClick={handleClick}>
            DETAILS
          </button>
        </div>
        <Window onClick={handleClickClose} />
      </div>
    </>
  );
}

function Window(isShown, onClick) {
  return <>{isShown && <div id="window" onClick={onClick}></div>}</>;
}

export default App;
