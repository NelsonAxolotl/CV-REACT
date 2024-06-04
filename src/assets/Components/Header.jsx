import imgcv from "../img/cv.jpg";
import imghtml from "../img/html.png";
import imgcss from "../img/css.png";
import imgsass from "../img/sass.png";
import imgjavascript from "../img/javascript.webp";
import imgnode from "../img/node.png";
import imgreact from "../img/react.webp";
import imgvite from "../img/vite.png";
import imgvue from "../img/vue.png";
import imgyarn from "../img/yarn.png";
import imgnpm from "../img/npm.webp";
import imgpostman from "../img/postman.webp";
import imgmongo from "../img/mongo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faHouse,
} from "@fortawesome/free-solid-svg-icons";
const Header = () => {
  return (
    <>
      <div className="container">
        <div className="left-band">
          <h2>Compétences</h2>
          <div className="skills">
            <h3>Soft Skills</h3>
            <ul>
              <li>Collaboration</li>
              <li>Flexibilité</li>
              <li>Organisé</li>
              <li>déterminé</li>
              <li>curieux</li>
            </ul>
          </div>
          <div className="langages">
            <h3>Langages de Programmation</h3>
          </div>
          <div className="icons">
            <img src={imghtml} alt="html" />
            <img src={imgcss} alt="css" />
            <img src={imgsass} alt="sass" />
          </div>
          <div className="icons">
            <img src={imgjavascript} alt="javascript" />
            <img src={imgnode} alt="node" />
          </div>
          <div className="langages">
            <h3>frameworks</h3>
          </div>
          <div className="icons">
            <img src={imgreact} alt="react" />
            <img src={imgvue} alt="vue" />
          </div>
          <div className="langages">
            <h3>Tools</h3>
          </div>
          <div className="icons">
            <img src={imgyarn} alt="yarn" />
            <img src={imgvite} alt="vite" />
            <img src={imgnpm} alt="npm" />
          </div>
          <div className="icons">
            <img src={imgmongo} alt="mongo" />
            <img src={imgpostman} alt="postman" />
          </div>

          <div className="langages">
            <h3>Langues</h3>
            <p>Anglais (courant)</p>
          </div>
          <div className="hobbie">
            <h3>Centre d'intérêts</h3>
            <ul>
              <li>Design / Photographie</li>
              <li>Arts / Spectcales / Musique</li>
              <li>Sport</li>
            </ul>
          </div>
        </div>

        <div className="header">
          <div className="picture">
            <img src={imgcv} alt="cv" />
          </div>
          <div className="rightside">
            <h1>NELSON PARAÏSO</h1>
            <h2>
              <span>Stage </span>- Développeur Web - <span>Front End</span>
            </h2>
            <div className="contact">
              <div className="house">
                <span>
                  <FontAwesomeIcon icon={faHouse}></FontAwesomeIcon>
                </span>
                <span>5 rue Frédéric Mistral 69100 Villeurbanne</span>
              </div>
              <div className="mail">
                <span>
                  <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
                </span>
                <span>
                  <a target="_blank" href="mailto:paraisonelson@gmail.com">
                    paraisonelson@gmail.com
                  </a>
                </span>
              </div>
              <div className="phone">
                <span>
                  <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>
                </span>
                <span>06 17 80 67 15</span>
              </div>
              <div className="supericons">
                <div className="linkedin">
                  <span>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://www.linkedin.com/in/nelson-paraiso-98a6b12b5/"
                    >
                      <i class="fa-brands fa-linkedin"></i>
                    </a>
                  </span>
                </div>
                <div className="github">
                  <span>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://github.com/NelsonAxolotl"
                    >
                      <i class="fa-brands fa-github"></i>
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
