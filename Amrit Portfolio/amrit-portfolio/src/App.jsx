import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles.css";
import Home from "./Home/Home";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Projects from "./Projects/Projects";
import { Container } from "react-bootstrap";


function App() {
  return (
    <BrowserRouter>
     <div>
       <Header />
       <Home />
       <Footer />
     </div>
   </BrowserRouter>
  );
}

export default App;
