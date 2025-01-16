import { useState } from "react";

import "./App.css";
import Header from "./components/Header";
import Product from "./components/Product";
import Details from "./components/Details";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className=" sm:px-2 md:px-4 lg:px-40">
      <Header />
      <div className=" sm:grid grid-cols-2">
        <Product />
        <Details />
      </div>
    </div>
  );
}

export default App;
