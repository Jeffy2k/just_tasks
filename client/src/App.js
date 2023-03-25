import { useState } from "react";
import { Switch,Route } from "react-router-dom";
import "./App.css";
import LoginForm from "./components/login";
import SignupForm from "./components/signup";

function App() {

  return (
    <div className="App">
      {/* <LoginForm/> */}
      <SignupForm/>
    </div>
  );
}

export default App;
