import React, { useState } from 'react';
import {Row, Col, Container } from 'reactstrap';
import { MdEqualizer, MdEuroSymbol, MdTouchApp, MdTrendingUp } from "react-icons/md";


const ToastSkills = (props) => {
  const { buttonLabel } = props;
  const [show, setShow] = useState(false);

  const toggle = () => setShow(!show);

  return (

      <Row className="">
        <Col className="b"> <MdEqualizer size ={45}/>
          <br/><br/>
          <h3 className="b">Etudes Sectorielles</h3>
          <br/>
          <p>
              <ul>
                <li> <em>Étude de marché & Benchmark : </em> étude comparée du projet du client à l’échelle locale, régionale, nationale ou mondiale , recommandations business
                </li>
                <li> <em> Business plan : </em> Plan marketing & étude de la concurrence, plan opérationnel, élaboration d’un plan de financement
                </li>
              </ul>
          <br/>
          </p>
        </Col>

        <Col className="b"> <MdEuroSymbol size ={45}/>
          <br/><br/>
          <h3 className="b">Lancement et levée de fonds</h3>
          <br/>
          <p>
              <ul>
                <li> <em>Accompagnement de votre projet :</em> Accompagnemnet à la création d'entreprise ainsi qu'a la recherche de fonds pour réaliser votre projet. Cette offre est réalisée en partenariat avec un cabinet d'expertise comptable
                </li>
              </ul>
          </p>
        </Col>

        <Col className="b"> <MdTouchApp size ={45}/>
          <br/><br/>
          <h3 className="b"> Transformation digitale </h3>
          <br/>
          <p>
              <ul>
                <li> Développement d’applications Web et de sites sur mesures, déploiement de votre activité en ligne
                </li>
                <li> Intégration de modules (paiement en ligne, chatbox, intégration d'API)
                </li>
              </ul>
          </p>
        </Col>

        <Col className="b"> <MdTrendingUp size ={45}/>
          <br/><br/>
          <h3 className="b"> Logiciel de gestion sur-mesure</h3>
          <br/>
          <p>
              <ul>
                <li> Bringing your idea to code from zero to one as a minimal viable product (MVP) and beyond within a well-architected application.
                </li>
                <li> Développement d’outils sur mesure et automatisation des tâches : ERP, gestion de ressources en temps réel, pilotage, reporting
                </li>
              </ul>
          </p>
        </Col>

      </Row>
  );
}

export default ToastSkills;
