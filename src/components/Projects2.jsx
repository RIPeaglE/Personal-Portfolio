// React component (Projects.js)

import React, { useState, useEffect } from 'react';
import '../style/projects2.css';
import projectsData from '../components/Projects.json';

const Projects = () => {
  const [popupContent, setPopupContent] = useState(null);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(projectsData.projects);
  }, []); 

  const openPopup = (project) => {
    setPopupContent(project);
  };

  const closePopup = () => {
    setPopupContent(null);
  };

  return (
    <section id='projects'>
      <h1 className='projectTitle'>Projects</h1>
      <div className='projectContainer'>
        {projects.map((project) => (
          <div className='projectBox' key={project.id} onClick={() => openPopup(project)}>
            <p className='pTitle'>{project.title}</p>
          </div>
        ))}
      </div>

      {popupContent && (
        <div className='popupContainer'>
          <div className='popupBox'>
            <div className='boxHeader'>
              <h1 className='boxtitle'>{popupContent.title}</h1>
              <button className='popButton' onClick={closePopup}>
                X
              </button>
            </div>

            <div className='boxlinks'>
                {popupContent.link && (
                    <button className='linkButton' onClick={() => window.open(popupContent.link)}>
                        Link
                    </button>
                )}
                {popupContent.demo && (
                    <button className='demoButton' onClick={() => window.open(popupContent.demo)}>
                        Demo
                    </button>
                )}

              </div>
            <div className='boxtext'>
              <p className='boxdesc'>{popupContent.description}</p>
              {popupContent.images && (
                <div className='boximages'>
                  {popupContent.images.map((image, index) => (
                    <img key={index} src={image} alt={`Image ${index + 1}`} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
