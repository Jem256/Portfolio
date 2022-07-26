import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import useLocalStorage from "use-local-storage";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";
import "./App.css";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Projects from "./components/Projects";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Projects />
      </BrowserRouter>
    </div>
  );
}

export default App;
