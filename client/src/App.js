import React from 'react';
import './App.css';
import BackgroundVideo from './Components/VideoBackground/backgroundVideo';
import AppNavbar from './Components/Navbar';
import ToastSkills from './Components/ToastSkills';
import Timeline from './Components/Timeline/Timeline';
import SplitScreen from './Components/SplitScreen/Splitscreen';
import Footer from './Components/Footer.js';



import { Card, Button, CardTitle, CardText, Row, Col, Container, Alert } from 'reactstrap';
import Image from './JG.jpg';




function App() {
  return (
    <div className="App">
      <AppNavbar/>
      <BackgroundVideo/>

        <section className="themed-container prez" fluid={true} >
            <div className="container">
              <h1 > About Me </h1>
              <p> Get to know me and my formation before dive into my offer </p>
              <p> I am a self-employed student dedicated to help dynamic young entreprise.
              I am currently doing A triple Master's Degree in Finance, computer science, and Management. I gained experience from my several internships
              as financial analyst in ETF Crypto-fund and M&A Parisian Boutique. I am dedicated to used intensively my skills during both my professional life and spare time.
              Eventually it led me to create a plateform for companies and individuals who share my enthusiasm and beliefs.
              I am happy to welcome you on my website :-) </p>

              <div class="social">
                <i class="fa fa-facebook-square" aria-hidden="true"></i>
                <a href="https://twitter.com/traversymedia" target="_blank"> <i className="fab fa-twitter fa-3x"> </i></a>
                <a href="https://facebook.com/traversymedia" target="_blank"> <i className="fab fa-facebook fa-3x"> </i></a>
                <a href="https://github.com/bradtraversy" target="_blank"><i className="fab fa-github fa-3x"></i></a>
                <a href="https://www.linkedin.com/in/bradtraversy" target="_blank"><i className="fab fa-linkedin fa-3x"></i></a>
              </div>

              <div className="themed-container" fluid={true}>
                <Row xs={6} md={6} className="portrait">
                <img src={Image} className="rounded-circle" alt="Portrait"/>
                </Row>


              </div>
          </div>
      </section>

    <div className="backgroundAccueil toastbody">
      <br/>
        <h1 > What I offer </h1>
        <p> My services are mainely based one <strong>business analyses</strong> and <strong>programming</strong></p>
      <br/>
        <ToastSkills/>
      <br/>

    </div>
      <div id="SplitScreen">
      <SplitScreen/>
      </div>
      <br/>
    <div id="Vita" className="container-fluid vita"> <h2>VITA </h2> <p>My Professional Story</p></div>
      <Timeline/>
      <Footer/>
    </div>



  );
}

export default App;
