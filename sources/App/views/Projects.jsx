import React from 'react';


const projects = [];
projects.push({
    id:"1",
    name: "Portfolio",
    catchphrase: "Code is my Hammer!",
    image: "assets/projects/portfolio.png",
    description: "Building your own web portfolio as a developer is the best way to present yourself. Starting with a simple concept is key. \n \n"+
    "It is built as a responsible single page application. The 3D earth crowns the scene while the landing application makes a first contact with the visitor.",
    technologies: ["HTML5", "CSS3", "Javascript","React", "Three.js", "Anime.js", "ReCaptcha"]
});
projects.push({
    id:"2",
    name: "PasswordCard",
    catchphrase: "Anywhere, Everywhere!",
    image: "assets/projects/passwordCards.png",
    description: "The user constant need to authentify itself, has motivated the market to produce a whole range of solutions to help the user manage its credetials. \n"+
    "Therefore, most of them require direct access to the internet or a specific device. \n\n Consequently, PasswordCard, brings a software solution to generate password cards " +
    "which can be printed in a credit card (ISO/IEC 7810) and bring to the user a flexible, secure and persistent solution to bring their credentials everywhere in their pockets.",
    technologies: ["C#", "XAML", "UWP", "MySQL", "PDFSharpCore"],
});
projects.push({
    id:"3",
    name: "Knight's Tour",
    catchphrase: "My kingdom for a horse!",
    image: "assets/projects/knightsTour.png",
    description: "A videogame in Windows Forms based in the Knight's Tour mechanics. The knight visits every square at least once with out returning a second time. The game is lost when no possible movements are available. It is won when avery square of the board has been visited.",
    technologies: ["C#", "Windows Form"],
});
projects.push({
    id:"3",
    name: "Knight's Tour",
    catchphrase: "My console for a horse!",
    image: "assets/projects/knightsTourConsole.png",
    description: "A videogame in windows console based in the Knight's Tour mechanics. The knight visits every square at least once with out returning a second time. The game is lost when no possible movements are available. It is won when avery square of the board has been visited.",
    technologies: ["C#"],
});

export function ProjectSections(props) {

    const projects = props.projects.map((project) => {

        console.log(project)
        console.log(project.technologies[0])
        return <section key={project.id} className="project-section">
                <div className="project-section-image">
                    <img src={project.image} alt="Project image not available" />
                </div>
                <h2 className="project-section-name">
                    {project.name}
                </h2>
                <i className="project-section-catchphrase">
                    {project.catchphrase}
                </i>
                <p className="project-section-description">
                    {project.description}
                </p>
                <ul className="project-section-technologies">
                    {
                        project.technologies.map((technology) => {
                            return <li key={technology}>{technology}</li>
                        })
                    }
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
