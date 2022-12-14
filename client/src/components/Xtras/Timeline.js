import React from 'react'
import '../Analytics/Analytics.css'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import SchoolIcon from '@material-ui/icons/School';
import StarIcon from '@material-ui/icons/Star';
import WorkIcon from '@material-ui/icons/Work';

import Sidenav from './Sidenav';
const Timeline = () => {
  return (
    <div>
<Sidenav/>
<div className="wrapper d-flex flex-column min-vh-100 ">
   
   <div  className="body flex-grow-1 px-3">
    <VerticalTimeline>
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
      contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
      date="2011 - present"
      iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
      icon={<WorkIcon />}
     
    
    >
    
   
    </VerticalTimelineElement>
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      date="2010 - 2011"
      iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
      icon={<WorkIcon />}
    >
      <h3 className="vertical-timeline-element-title">Art Director</h3>
      <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
      <p>
        Creative Direction, User Experience, Visual Design, SEO, Online Marketing
      </p>
    </VerticalTimelineElement>
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      date="2008 - 2010"
      iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
      icon={<WorkIcon />}
    >
      <h3 className="vertical-timeline-element-title">Web Designer</h3>
      <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4>
      <p>
        User Experience, Visual Design
      </p>
    </VerticalTimelineElement>
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      date="2006 - 2008"
      iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
      icon={<WorkIcon />}
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
      iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
      icon={<SchoolIcon />}
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
      iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
      icon={<SchoolIcon />}
    >
      <h3 className="vertical-timeline-element-title">Agile Development Scrum Master</h3>
      <h4 className="vertical-timeline-element-subtitle">Certification</h4>
      <p>
        Creative Direction, User Experience, Visual Design
      </p>
    </VerticalTimelineElement>
    <VerticalTimelineElement
      className="vertical-timeline-element--education"
      date="2002 - 2006"
      iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
      icon={<SchoolIcon />}
    >
      <h3 className="vertical-timeline-element-title">Bachelor of Science in Interactive Digital Media Visual Imaging</h3>
      <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>
      <p>
        Creative Direction, Visual Design
      </p>
    </VerticalTimelineElement>
    <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="2002 - 2006"
      iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
      icon={<StarIcon />}
    > 
    <h3 className="vertical-timeline-element-title">Bachelor of Science in Interactive Digital Media Visual Imaging</h3>
    <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>
    <p>
      Creative Direction, Visual Design
    </p>
      </VerticalTimelineElement>
    
  </VerticalTimeline>
  </div></div></div>

  )
}

export default Timeline