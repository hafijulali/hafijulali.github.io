import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { FaGitlab } from "react-icons/fa";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/hafijulali"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BsLinkedin />
      </a>
      <a
        href="https://www.github.com/hafijulali"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BsGithub />
      </a>
      <a
        href="https://www.gitlab.com/hafijulali"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGitlab />
      </a>
    </div>
  );
};

export default HeaderSocials;
