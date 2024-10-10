import * as data from "../../assets/projects.json";

import "./portfolio.css";

const Portfolio = () => {
  for (let i = 0; i < data.length; i++) {
    data[i].image = "";
    console.log(data[i].image);
  }

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {Array.from(data).map(
          ({ id, name, description, image, demo, source }, i) => {
            return (
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={`${image}`} alt={name} key={i} id="card__image" />
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
