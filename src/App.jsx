import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
// import Nav from './components/nav/Nav';
// import About from './components/about/About';
// import Experience from './components/experience/Experience';
// import Portfolio from './components/portfolio/Portfolio';
// import Contact from './components/contact/Contact';
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />} />
        </Routes>
        <Footer />
      </BrowserRouter>

      {/* <Nav/> */}
      {/* <About/>
      <Experience/>
      <Portfolio/>
      <Contact/> */}
    </div>
  );
}

export default App;
