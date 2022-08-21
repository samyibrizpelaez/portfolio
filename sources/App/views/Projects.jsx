import React from 'react';
import { DiAndroid, DiCss3, DiGithubAlt } from "react-icons/di";

export function ProjectsPage()
{
  return (
      <div>
          <h1 id="page-title">Projects</h1>
          <div id="page-content">
              <section className="project-section">
                <div className="project-section-image">
                    <img src="https://img.icons8.com/color-glass/96/000000/blueprint.png" alt="Project image not available" />
                </div>
                <h2 className="project-section-name">
                    Project name
                </h2>
                <p className="project-section-description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo praesentium reiciendis beatae veritatis at, quaerat cupiditate necessitatibus tempore voluptatum aperiam sequi quae inventore voluptates qui eum assumenda error culpa ab.
                </p>
                < DiAndroid /><DiCss3 /><DiGithubAlt />
              </section>
              <section className="project-section">
                <div className="project-section-image">
                    <img src="https://img.icons8.com/color-glass/96/000000/blueprint.png" alt="Project image not available" />
                </div>
                <h2 className="project-section-name">
                    Project name
                </h2>
                <p className="project-description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo praesentium reiciendis beatae veritatis at, quaerat cupiditate necessitatibus tempore voluptatum aperiam sequi quae inventore voluptates qui eum assumenda error culpa ab.
                </p>
              </section>
              <section className="project-section">
                <div className="project-section-image">
                    <img src="https://img.icons8.com/color-glass/96/000000/blueprint.png" alt="Project image not available" />
                </div>
                <h2 className="project-section-name">
                    Project name
                </h2>
                <p className="project-description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo praesentium reiciendis beatae veritatis at, quaerat cupiditate necessitatibus tempore voluptatum aperiam sequi quae inventore voluptates qui eum assumenda error culpa ab.
                </p>
              </section>

          </div>
      </div>
  )
  
}
