import React, { Component } from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import classes from './Timeline.module.css'


class Timeline extends Component {
  render() {
    return (
      <div className={classes.Content}>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#2c3e50', color: '#fff' }}
          contentArrowStyle={{ borderRight: '3px solid  #2c3e50' }}
          date="2018 - present"
          iconStyle={{ background: '#2c3e50', color: '#fff' }}
        >
          <h3 className="vertical-timeline-element-title">CEO GKP Corp</h3>
          <h4 className="vertical-timeline-element-subtitle">NYC</h4>
          <p>
            Grande Banque qui a percé dans le game
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2019"
          iconStyle={{ background: '#2c3e50', color: '#2c3e50' }}
        >
          <h3 className="vertical-timeline-element-title">M&A Analyst - Internship</h3>
          <h4 className="vertical-timeline-element-subtitle">Paris</h4>
          <p>
          •	Produced and presented various M&A summary reports (urban mobility,
            start-ups valuation, water industry) </p>
          <p>
          •	Realized company profiles and analysed development path
          opportunities </p>
          <p>
          •	Contributed to deal process: M&A advisory and financial
          modelling (deal value over EUR 30m) </p>

        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2008 - 2010"
          iconStyle={{ background: '#2c3e50', color: '#2c3e50' }}
        >
          <h3 className="vertical-timeline-element-title">Financial Analyst</h3>
          <h4 className="vertical-timeline-element-subtitle">Paris</h4>
          <p>
            User Experience, Visual Design
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2006 - 2008"
          iconStyle={{ background: '#2c3e50', color: '#2c3e50' }}
        >
          <h3 className="vertical-timeline-element-title">Web Designer</h3>
          <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
          <p>
            User Experience, Visual Design
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="April 2013"
          iconStyle={{ background: '#2c3e50', color: '#2c3e50' }}
        >
          <h3 className="vertical-timeline-element-title">Content Marketing for Web, Mobile and Social Media</h3>
          <h4 className="vertical-timeline-element-subtitle">Online Course</h4>
          <p>
            Strategy, Social Media
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="November 2012"
          iconStyle={{ background: '#2c3e50', color: '#2c3e50' }}
        >
          <h3 className="vertical-timeline-element-title">Agile Development Scrum Master</h3>
          <h4 className="vertical-timeline-element-subtitle">Certification</h4>
          <p>
            Creative Direction, User Experience, Visual Design
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
      </div>
    );
  }
}

  export default Timeline;
