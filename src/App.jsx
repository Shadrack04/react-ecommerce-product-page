import { useState } from "react";

import "./App.css";
import Header from "./components/Header";
import Product from "./components/Product";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="">
      <Header />
      <Product />
    </div>
  );
}

export default App;
