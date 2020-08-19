import React from 'react';
import './App.css';
import Skills from './Skills';
import Education from './Education';
import WorkExperience from './WorkExperience';
import Projects from './Projects';
import Contact from './Contact';
import ImageBox from './Image';


export default class App extends React.Component {
  render() {
    return (
      <div className="container my-5">
        <div className="row">
          <div className="col-9">
            <h1 className="text-center">Resume</h1>
            <h4 className="text-center">Renji Joseph Sabu</h4>
            <Skills />
            <WorkExperience />
            <Education />
            <Projects />
            <Contact />
          </div>
          <ImageBox />
        </div>
      </div>
    );
  }
}
