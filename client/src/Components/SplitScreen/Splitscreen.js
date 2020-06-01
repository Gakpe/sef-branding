import React, { Component, useState } from 'react';
import { Alert, Button, Row, Toast, ToastBody, ToastHeader} from 'reactstrap';
var classNames = require('classnames');


class SplitScreen extends Component {


  state = {
      droite: ['split droite'],
      gauche: ['split gauche'],
      block: ['block splitbody'],
      showana:false,
      showdev: false
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

  toggleana = () => {
    this.setState({
      showana: !this.state.showana
    });
  };

  toggleanaback = () => {
    this.setState({
      showana: false
    });
  };

  toggledev = () => {
    this.setState({
      showdev: !this.state.showdev
    });
  };

  toggledevback = () => {
    this.setState({
      showdev: false
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
                  <br/>
                  <h1 className="caract">The Analyst</h1>
                    <h2 className="button" onClick={this.toggleana}> Info </h2>
                    <br />
                    <br />
                    <br />
                    <br />

                      <Toast isOpen={this.state.showana} className="ToastAna">
                     <ToastHeader toggle={this.toggleanaback}>Toast title</ToastHeader>
                     <ToastBody>
                       Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                     </ToastBody>
                     </Toast>
            </div>


            <div className={this.state.droite} onMouseEnter={this.droiteSide} onMouseLeave={this.backSide}>
                  <br/>
                  <h1 className="caract"> <strong className="detail">...</strong>The Developer</h1>
                    <h2 className="button" onClick={this.toggledev}> Info </h2>
                    <br />
                    <br />
                    <br />
                    <br />

                    <Toast isOpen={this.state.showdev} className="ToastDev">
                   <ToastHeader toggle={this.toggledevback}>Toast title</ToastHeader>
                   <ToastBody>
                     Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                   </ToastBody>
                   </Toast>            </div>
      </Row>

    )
  }
}

export default SplitScreen;
