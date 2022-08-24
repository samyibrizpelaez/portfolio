import React from 'react';


const projects = [];
projects.push({
    id:"1",
    name: "Portfolio",
    image: "assets/projects/portfolio.png",
    description: "Building your own web portfolio as a developer is the best way to present yourself. Starting with a simple concept is key. \n"+
    "It is built as a responsibe single page application. The 3D earth crowns the scene while the landing application makes a first contact with the visitor.",
    technologies: ["Javascript","React", "Three.js", "Anime.js", "ReCaptcha", "HTML5", "CSS3"]
});
projects.push({
    id:"2",
    name: "Portfolio",
    image: "assets/projects/portfolio.png",
    description: "Building your own web portfolio as a developer is the best way to present yourself. Starting with a simple concept is key. \n"+
    "It is built as a responsibe single page application. The 3D earth crowns the scene while the landing application makes a first contact with the visitor.",
    technologies: ["Javascript","React", "Three.js", "Anime.js", "ReCaptcha", "HTML5", "CSS3"],
});

export function ProjectSections(props) {

    const projects = props.projects.map((project) => {

        const technologies = project.technologies.map((technology) => {
            <li key={technology.key}>{technology.value}</li>
        })

        console.log(project)
        console.log( technologies)
        return <section key={project.id} className="project-section">
                <div className="project-section-image">
                    <img src={project.image} alt="Project image not available" />
                </div>
                <h2 className="project-section-name">
                    {project.name}
                </h2>
                <p className="project-section-description">
                    {project.description}
                </p>
                <ul className="project-section-technologies">
                    {technologies}
                </ul>
            </section>
        
    }
    )
    return projects
    
}

export function ProjectsPage() {

    return (
        <div>
            <h1 id="page-title">Projects</h1>
            <div id="page-content">
        
                <ProjectSections projects={projects}/>
            
            </div>
        </div>
              
    )

}
