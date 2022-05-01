import React, { useState } from "react";
import Header from "./components/Header";
import Home from "./pages/Home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Header />
      <Home />
    </div>
  );
}

export default App;
