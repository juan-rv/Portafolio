import React from "react";
import { useTranslation } from "react-i18next";
import kkv from "../assets/logo-kkv-curvas1.png";
import jstor from "../assets/logojstor.png";
import inditrom from "../assets/Logo_Inditrom-removebg.png";
import blog from "../assets/blog.png";
import red from "../assets/social.png";
import project_one from "../assets/WeTravel_Landing.jpg";
import recipe from "../assets/recipe.jpg";
import "../styles/portafolios.css";

const Portafolio = () => {
  const [t, i18n] = useTranslation("global");
  return (
    <div className="portfolio">
      <div className="title_portfolio">
        <h1>{t("portfolio.title")}</h1>
      </div>

      <div className="contain_projects">
        <div className="card_project">
          <div className="img_project">
            <img src={kkv} alt="KingKongV" />
          </div>

          <div className="content_card_project">
            <h2>{t("portfolio.first_title")}</h2>
            <p>{t("portfolio.first_content_one")}</p>
            <p>{t("portfolio.first_content_two")}</p>
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
                <a target="_blank" href="https://kingkongfive.netlify.app/">
              Linkk to
            </a>
            
          </div>
        </div>

        <div className="card_project">
          <div className="img_project">
            <img src={jstor} alt="jstor" />
          </div>

          <div className="content_card_project">
            <h2>{t("portfolio.second_title")}</h2>
            <p>{t("portfolio.second_content_one")}</p>
            <p>{t("portfolio.second_content_two")}</p>

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
            <img src={inditrom} alt="Inditrom" />
          </div>

          <div className="content_card_project">
            <h2>{t("portfolio.third_title")}</h2>
            <p>{t("portfolio.third_content_one")}</p>
            <p>{t("portfolio.third_content_two")}</p>

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
            <img src={blog} alt="blog" />
          </div>

          <div className="content_card_project">
            <h2>{t("portfolio.four_title")}</h2>
            <p>{t("portfolio.four_content_one")}</p>
            <p>{t("portfolio.four_content_two")}</p>
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
            <img src={red} alt="socialNet" />
          </div>
          <div className="content_card_project">
            <h2>{t("portfolio.five_title")}</h2>
            <p>{t("portfolio.five_content_one")}</p>
            <p>{t("portfolio.five_content_two")}</p>
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
            <h2>{t("portfolio.six_title")}</h2>
            <p>{t("portfolio.six_content_one")}</p>
            <p>{t("portfolio.six_content_two")}</p>
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
            <img src={recipe} alt="recipeBook" />
          </div>
          <div className="content_card_project">
            <h2>{t("portfolio.seven_title")}</h2>
            <p>{t("portfolio.seven_content_one")}</p>
            <p>{t("portfolio.seven_content_two")}</p>
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
