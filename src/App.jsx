import React, { Component } from "react";
import About from "./components/about/About";
import Header from "./components/header/Header";
import Contact from "./components/contact/Contact";
import Toast from "./components/contact/Toast";
import Nav from "./components/nav/Nav";
import Experience from "./components/experience/Experience";
import Portfolio from "./components/portfolio/Portfolio";
import Footer from "./components/footer/Footer";
import "./index.css";

class App extends Component {
  render() {
    return (
      <div id='home'>
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
