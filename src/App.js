import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  // Your code below

  useEffect(() => {
    function handleWindowResizing() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleWindowResizing);

    return () => {
      window.removeEventListener("resize", handleWindowResizing);
    };
  }, []);

  return (
    <div className="App">
      <p>Window Width: {windowWidth} </p>
    </div>
  );
}

export default App;
