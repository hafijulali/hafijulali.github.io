import Buttons from "./Buttons";
import profilepicture from "../../assets/profile-picture.jpg";
import HeaderSocials from "./HeaderSocials";
import "./header.css";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Sheikh Hafijul Ali</h1>
        <h5 className="text-light">Developer</h5>
        <Buttons />
        <HeaderSocials />
        <div className="header__profile">
          <img src={profilepicture} alt="me" className="image"></img>
        </div>
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
