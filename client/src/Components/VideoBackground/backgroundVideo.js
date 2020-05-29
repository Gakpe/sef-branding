import React from 'react';
import Video from './Video3.mp4';

import classes from './backgroundVideo.module.css'

const BackgroundVideo = () => {
      return (
        <div className={classes.Container}>

          <video autoPlay="autoplay" loop="loop" muted="muted" className={classes.video}>
            <source src={Video} type="video/mp4"/>
          </video>

          <div className={classes.Content}>
                <div className={classes.SubContent} dark >
                    <h1>Julien GAKPE</h1>
                    <p> French Freelance - Developer Fullstack Junior react | node.js | MERN stack </p>
                    <p> Business and Financial Analyst</p>
                    <button type="button" className="btn btn-outline-dark">Get in touch</button>
                </div>
          </div>

        </div>
      )
}

export default BackgroundVideo;
