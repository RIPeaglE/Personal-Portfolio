import React, { useState } from 'react';
import '../style/projects.css';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projectClickHandler = (projectName) => {
    setSelectedProject(projectName);
  };

  return (
    <section id='projects'>
      <h1 className='title'>Projects</h1>
      <div className='projectContainer'>
        <div className='projectDisplay'>
          {selectedProject ? (
            <h1>{selectedProject}</h1>
          ) : (
            <p>Select a project from the list</p>
          )}
        </div>
        <div className='projectList'>
          <button className='projects' onClick={() => projectClickHandler('Project 1')}>Project 1</button>
          <button className='projects' onClick={() => projectClickHandler('Project 2')}>Project 2</button>
          <button className='projects' onClick={() => projectClickHandler('Project 3')}>Project 3</button>
          <button className='projects' onClick={() => projectClickHandler('Project 4')}>Project 4</button>
          <button className='projects' onClick={() => projectClickHandler('Project 5')}>Project 5</button>
          <button className='projects' onClick={() => projectClickHandler('Project 6')}>Project 6</button>
          <button className='projects' onClick={() => projectClickHandler('Project 7')}>Project 7</button>
          <button className='projects' onClick={() => projectClickHandler('Project 8')}>Project 8</button>
          <button className='projects' onClick={() => projectClickHandler('Project 9')}>Project 9</button>
          <button className='projects' onClick={() => projectClickHandler('Project 10')}>Project 10</button>
        </div>
      </div>

    </section>

  );
};

export default Projects;
