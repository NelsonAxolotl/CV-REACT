const Main = () => {
  return (
    <>
      <div className="main">
        <div className="frame">
          <h2>
            RÉALISATIONS <span>(PROJETS FORMATIONS)</span>
          </h2>
        </div>
        {/* <div className="projets">
          <h3>CONSIGNES PROJETS DE FORMATION</h3>
        </div> */}
        <div className="realisation-projets">
          <div className="center">
            <h3>PROJET FULL-STACK</h3>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://vinted-exo.netlify.app"
            >
              https://vinted-exo.netlify.app
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://marvel-exo.netlify.app"
            >
              https://marvel-exo.netlify.app
            </a>
          </div>
          <div className="right-side">
            <h3>PROJET FRONT-END</h3>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://site-maquette-gaming.netlify.app"
            >
              https://site-maquette-gaming.netlify.app
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://site-maquette-rando.netlify.app"
            >
              https://site-maquette-rando.netlify.app
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://exo-platform-movies.netlify.app/"
            >
              https://exo-platform-movies.netlify.app/
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://tripadvisorangola-exo.netlify.app/"
            >
              https://tripadvisorangola-exo.netlify.app/
            </a>
          </div>
        </div>
        <div className="frame">
          <h2>EXPÉRIENCE PROFESSIONNELLES</h2>
        </div>
        <div className="realisation">
          <h3>CONCEPTEUR LUMIÈRE / RÉGISSEUR LUMIÈRE</h3>
          <span>2011 - 2024</span>
        </div>
        <div className="experience">
          <ul>
            <li>
              <span>Création lumières:</span>
              <span>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.youtube.com/watch?v=kqubkuQeytw&t=1s"
                >
                  <i class="fa-brands fa-youtube"></i>
                </a>
              </span>
              <br />
              Conception de plans lumière (penser de manière originale chaque
              projets).
              <br /> Gestion de la relation client (définition du besoin, revue
              et adaptation jusqu’à la réalisation finale).
            </li>
            <li>
              <span>Régisseur lumière / général: </span> <br />
              Coordination de l’accueil et de l’installation technique pour
              divers lieux de spectacle.
              <br />
              Clarification du besoin et adaptation au contraintes spécifiques.
            </li>
            <li>
              <span>Technicien lumière: </span>
              <br />
              Maîtrise des équipements et logiciels spécialisés pour la gestion
              des lumières.
            </li>
          </ul>
        </div>
        <div className="realisation">
          <h3>EXPÉRIENCE INTERNATIONNALES</h3>
          <span>2001 - 2010</span>
        </div>
        <div className="real-p">
          <p>
            Emplois saisonniers, restauration, vente (Royaume Uni, Australie,
            Nouvelle Zélande).
          </p>
        </div>
        <div className="frame">
          <h2>FORMATIONS</h2>
        </div>
        <div className="formations">
          <h3>FORMATION DÉVELOPPEUR ET MOBILE FULL-STACK</h3>
          <span>Février - Avril 2024</span>
        </div>
        <div className="form-p">
          <p>Le Réacteur, Paris</p>
        </div>
        <div className="form">
          <ul>
            <li>
              Découvrir et maîtriser les bases de la programmation
              <span> JavaScript, React</span>.
            </li>
            <li>
              Créer des serveurs, récupération et analyse de données (APIs) et
              les déployer.
            </li>
            <li> Développer des sites internet responsive.</li>
            <li>
              Construire des applications mobiles iOS et Android avec
              <span> React Native </span> (initiation).
            </li>
          </ul>
        </div>
        <div className="auto">
          <h3>FORMATIONS EN LIGNE EN AUTODIDACTE</h3>
          <span>Juin - Décembre 2023</span>
        </div>
        <div className="link">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://fromscratch.podia.com/"
          >
            https://fromscratch.podia.com/
          </a>

          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://grafikart.fr/"
          >
            https://grafikart.fr/
          </a>
        </div>
        <div className="formations">
          <h3>FORMATIONS INITIALES</h3>
        </div>
        <div className="school">
          <div className="licence">
            <span>
              Licence aux métiers Technique du Spectacle Vivant, Montpellier.
            </span>
            <div className="date">
              <span>2010</span>
            </div>
          </div>
          <div className="licence">
            <span>Licence de Musicologie, Goldsmiths University, Londres.</span>
            <div className="date">
              <span>2005</span>
            </div>
          </div>
          <div className="licence">
            <span>
              Baccalauréat littéraire, Lycée Georges Clémenceau, Montpellier.
            </span>
            <div className="date">
              <span>1999</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
