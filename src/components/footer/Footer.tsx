import "./footer.css";
import { FiInstagram, FiTwitter } from "react-icons/fi";
import { AiOutlineLinkedin } from "react-icons/ai";
import { RiTelegramLine } from "react-icons/ri";
import logo from "../../assets/logo-text-animated.gif";

const Footer = () => {
  return (
    <footer>
      <a href="#home" className="footer__logo">
        <img src={logo} alt="brand-logo" />
      </a>
      <ul className="permalinks">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a
          href="https://instagram.com/hafijuldev"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiInstagram />
        </a>
        <a
          href="https://telegram.me/hafijuldev"
          target="_blank"
          rel="noopener noreferrer"
        >
          <RiTelegramLine />
        </a>
        <a
          href="https://www.linkedin.com/in/hafijulali"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiOutlineLinkedin />
        </a>
        <a
          href="https://twitter.com/hafijuldev"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiTwitter />
        </a>
      </div>
      <div className="footer__copyright">&copy; All Rights reserved.</div>
    </footer>
  );
};

export default Footer;
