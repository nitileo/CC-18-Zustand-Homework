import { useState } from "react";
import NavBar from "./components/NavBar";
import Todo from "./components/Todo";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <ToastContainer />
      <NavBar />
      <Todo />
    </>
  );
}

export default App;
