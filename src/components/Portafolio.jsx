import React from "react";
import "../styles/portafolios.css";
import project_one from "../assets/WeTravel_Landing.jpg";

const Portafolio = () => {
  return (
    <div className="portfolio">
      <div className="title_portfolio">
        <h1>Pagina de Portafolio</h1>
        <h2>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
          dolores corporis dolore. Dolor nostrum soluta beatae autem earum nemo
          molestias impedit, quibusdam adipisci maxime eum repellat non hic
          laudantium nam.
        </h2>
      </div>

      <div className="contain_projects">
        <div className="card_project">
          <div className="img_project">
            <img src={project_one} alt="weTravel" />
          </div>

          <div className="content_card_project">
            <h2>Project title</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque
              quas veritatis soluta, cupiditate pariatur harum, ab, perspiciatis
              iste nam et itaque voluptatibus accusantium! Maiores, porro
              commodi distinctio corporis facere ea.
            </p>
            <article>
              <h4>Tecnologias:</h4>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>Redux</li>
              </ul>
            </article>
            <button> Link </button>
          </div>
        </div>

        <div className="card_project">
          <div className="img_project">
            <img src={project_one} alt="weTravel" />
          </div>

          <div className="content_card_project">
            <h2>Project title</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque
              quas veritatis soluta, cupiditate pariatur harum, ab, perspiciatis
              iste nam et itaque voluptatibus accusantium! Maiores, porro
              commodi distinctio corporis facere ea.
            </p>
            <article>
              <h4>Tecnologias:</h4>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>Redux</li>
              </ul>
            </article>
            <button> Link </button>
          </div>
        </div>

        <div className="card_project">
          <div className="img_project">
            <img src={project_one} alt="weTravel" />
          </div>

          <div className="content_card_project">
            <h2>Project title</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque
              quas veritatis soluta, cupiditate pariatur harum, ab, perspiciatis
              iste nam et itaque voluptatibus accusantium! Maiores, porro
              commodi distinctio corporis facere ea.
            </p>
            <article>
              <h4>Tecnologias:</h4>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>Redux</li>
              </ul>
            </article>
            <button> Link </button>
          </div>
        </div>

        <div className="card_project">
          <div className="img_project">
            <img src={project_one} alt="weTravel" />
          </div>

          <div className="content_card_project">
            <h2>Project title</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque
              quas veritatis soluta, cupiditate pariatur harum, ab, perspiciatis
              iste nam et itaque voluptatibus accusantium! Maiores, porro
              commodi distinctio corporis facere ea.
            </p>
            <article>
              <h4>Tecnologias:</h4>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>Redux</li>
              </ul>
            </article>
            <button> Link </button>
          </div>
        </div>

        <div className="card_project">
          <div className="img_project">
            <img src={project_one} alt="weTravel" />
          </div>
          <div className="content_card_project">
            <h2>Project title</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque
              quas veritatis soluta, cupiditate pariatur harum, ab, perspiciatis
              iste nam et itaque voluptatibus accusantium! Maiores, porro
              commodi distinctio corporis facere ea.
            </p>
            <article>
              <h4>Tecnologias:</h4>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>Redux</li>
              </ul>
            </article>
            <button> Link </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portafolio;
