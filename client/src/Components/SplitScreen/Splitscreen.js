import React, { Component } from 'react';
import { Alert, Button, Row} from 'reactstrap';
var classNames = require('classnames');


class SplitScreen extends Component {


  state = {
      droite: ['split droite'],
      gauche: ['split gauche'],
      block: ['block splitbody']
  };

  droiteSide = () => {
    this.setState({
      block: ['block splitbody hover-right']
    });
  };

  gaucheSide = () => {
    this.setState({
      block: ['block splitbody hover-left']
    });
  };

  backSide = () => {
    this.setState({
      droite: ['split droite'],
      gauche: ['split gauche'],
      block: ['block splitbody']

    });
  };

  render() {

    document.addEventListener('DOMContentLoaded', function(){
      const block = document.querySelector(".block");
      const droite = document.querySelector(".droite");
      const gauche = document.querySelector(".gauche");
    });

  return (

      <Row className={this.state.block}>
            <div className={this.state.gauche} onMouseEnter={this.gaucheSide} onMouseLeave={this.backSide}>
                  <h1 className="caract">The Analyst</h1>
                  <a href="#" className="button">Info</a>
            </div>
            <div className={this.state.droite} onMouseEnter={this.droiteSide} onMouseLeave={this.backSide}>
                  <h1 className="caract"> <strong className="detail">...</strong>The Developer</h1>
                  <a href="#" className="button"> Info</a>
            </div>
      </Row>

    )
  }
}

export default SplitScreen
