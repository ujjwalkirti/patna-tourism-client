import React, { useEffect } from "react";
import "./App.css";
import MainSection from "./components/MainSection";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  useEffect(() => {
    document.title = "Patna Tourism API 1.0";
  }, []);
  return (
    <div className="App">
      <p className="text-center text-3xl  lg:text-5xl font-bold">
        <span className="text-yellow-300">P</span>atna{" "}
        <span className="text-yellow-300">T</span>ourism{" "}
        <span className="text-yellow-300">API</span> 1.0
      </p>
      <MainSection />
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
