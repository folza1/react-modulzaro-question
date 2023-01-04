import "./App.css";

const window = document.getElementById("window");
console.log(window);
window.style.display = "none";

function Window() {
  return (
    <>
      <div id="window"></div>
    </>
  );
}

function Div() {
  return (
    <>
      <div className="divStyle">
        <button
          id="button"
          onClick={function () {
            window.style.display = "block";
          }}
        >
          DETAILS
        </button>
      </div>
    </>
  );
}

function App() {
  return (
    <>
      <h1>Products</h1>
      <div id="main">
        <Div />
        <Window />
      </div>
    </>
  );
}

export default App;
