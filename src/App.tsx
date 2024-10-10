import { Component } from "react";
import About from "./components/about/About";
import "./index.css";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import Contact from "./components/contact/Contact";
import Toast from "./components/contact/Toast";
import Experience from "./components/experience/Experience";
import Footer from "./components/footer/Footer";
import Portfolio from "./components/portfolio/Portfolio";

class App extends Component {
  render() {
    return (
      <div id="home">
        <Header />
        <Nav />
        <About />
        <Experience />
        <Portfolio />
        <Contact />
        <Toast />
        <Footer />
      </div>
    );
  }
}

export default App;
