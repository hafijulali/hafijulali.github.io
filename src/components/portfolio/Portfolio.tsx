import data from "../../../public/assets/projects.json";
import "./portfolio.css";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {Array.from(data).map(
          ({ id, name, description, image, webpimage, demo, source }, i) => {
            return (
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <picture>
                    <source srcSet={`/assets/${webpimage}`} type="image/webp" id="card__image"/>
                    <img src={`/assets/${image}`} key={i} loading="lazy" id="card__image"/>
                  </picture>
                </div>
                <h3>{name}</h3>
                <h5>{description}</h5>
                <div className="portfolio__item-buttons">
                  {demo ? (
                    <a
                      href={demo}
                      className="btn btn-primary"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Demo
                    </a>
                  ) : (
                    <a
                      className="btn btn-primary"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Native App
                    </a>
                  )}
                  <a
                    href={source}
                    className="btn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Source Code
                  </a>
                </div>
              </article>
            );
          },
        )}
      </div>
    </section>
  );
};

export default Portfolio;
