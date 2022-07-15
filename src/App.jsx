import { Component } from "react";
import "./index.css";
import About from "./components/about/About";
import Header from "./components/header/Header";
import Contact from "./components/contact/Contact";
import Nav from "./components/footer/Footer";
import Experience from "./components/experience/Experience";
import Portfolio from "./components/portfolio/Portfolio";
import Testimonials from "./components/testimonials/Testimonials";
import Footer from "./components/footer/Footer";
import Services from "./components/services/Services";

class App extends Component {
  render() {
    return (
      <div> 
        <Header/>
        <Nav/>
        <About/>
        <Experience/>
        <Services/>
        <Portfolio/>
        <Testimonials/>
        <Contact/>
        <Footer/> 
      </div>
    );
  }
}

export default App;
