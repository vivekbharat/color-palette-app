import React from "react";
import Palette from "./Palette";
import seeColors from "./seeColors";
function App() {
  return (
    <div className="App">
      <Palette {...seeColors[5]} />
    </div>
  );
}

export default App;
