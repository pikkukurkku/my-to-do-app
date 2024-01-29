import React from "react";
import Navbar from "./components/Navbar.jsx";
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'
import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <Footer />
    </div>
  );
}

export default App;
