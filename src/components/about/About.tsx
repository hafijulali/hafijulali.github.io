import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import portrait from "../../../public/assets/long-portrait-self.png";
import portraitwebp from "../../../public/assets/long-portrait-self.webp";
import "./about.css";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__portrait_image">
            <picture>
              <source srcSet={portraitwebp} type="image/webp" id="card__image"/>
              <img src={portrait}  loading="lazy" alt="Portrait" id="card__image"/>
            </picture>
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Software Engineering</h5>
              <small>problem solver</small>
            </article>
            
            
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <a href="#portfolio"> <h5>Projects</h5></a>
              <small>software development</small>
            </article>
            
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Techy</h5>
              <small>passionate</small>
            </article>           
          </div>
          <p>
            Extremely motivated to constantly develop my skills and grow
            professionally. I am confident in my ability to come up with
            interesting ideas for solving real world business problems.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
