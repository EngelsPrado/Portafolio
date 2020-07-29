import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Engels Prado</h1>
      </header>
      <Footer/>
    </div>
  );
}

export default App;
