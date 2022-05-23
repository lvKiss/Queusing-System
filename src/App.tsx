import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { Login } from "./components/Login";
import { GivePassAgain } from "./components/ForgotPass";

function App() {
  return (
    <div className="App">
      <Login></Login>
    </div>
  );
}

export default App;
