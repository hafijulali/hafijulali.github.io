import { useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiMessageSquareDetail } from "react-icons/bi";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import "./nav.css";

const Nav = () => {
  const [activeNavButton, setActiveNavButton] = useState("#home");
  return (
    <nav>
      <a
        href="#home"
        className={activeNavButton === "#home" ? "active" : ""}
        onClick={() => setActiveNavButton("#home")}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        className={activeNavButton === "#about" ? "active" : ""}
        onClick={() => setActiveNavButton("#about")}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#experience"
        className={activeNavButton === "#experience" ? "active" : ""}
        onClick={() => setActiveNavButton("#experience")}
      >
        <BiBook />
      </a>
      <a
        href="#portfolio"
        className={activeNavButton === "#portfolio" ? "active" : ""}
        onClick={() => setActiveNavButton("#portfolio")}
      >
        <RiServiceLine />
      </a>
      <a
        href="#contact"
        className={activeNavButton === "#contact" ? "active" : ""}
        onClick={() => setActiveNavButton("#contact")}
      >
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
};

export default Nav;
