import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer"
import SwitchComponents from "./SwitchComponents";
import { BrowserRouter as Router} from "react-router-dom";
import "./styles/main.css"

function App() {
  return (
    <Router>
        <Navbar />
        <SwitchComponents />
        <Footer/>
    </Router>
  );
}

export default App;
