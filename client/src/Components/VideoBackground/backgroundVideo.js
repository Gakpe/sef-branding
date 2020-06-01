import React from 'react';
import Video from './video5.mp4';
import {Button} from 'reactstrap';


const BackgroundVideo = () => {
      return (
        <div className="Container">

          <div className="videocontainer">
          <video autoPlay="autoplay" loop="loop" muted="muted" className="Video">
            <source src={Video} type="video/mp4"/>
          </video>
          </div>

          <div className="Content">
                <div className="SubContent dark">
                    <h1>Julien GAKPE</h1>
                    <p> French Freelance - Developer Fullstack Junior react | node.js | MERN stack </p>
                    <p> Business and Financial Analyst</p>
                    <Button className="btn">Get in touch</Button>
                </div>
          </div>

        </div>
      )
}

export default BackgroundVideo;
