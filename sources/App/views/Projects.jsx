import React from 'react';

const count = 0;

const projects = [];
projects.push({
    id: "0",
    name: "Portfolio",
    catchphrase: "\"Code is my Hammer!\"",
    image: "assets/projects/portfolio.gif",
    description: "Building your own web portfolio as a developer is the best way to present yourself. Starting with a simple concept is key. \n \n"+
    "It is built as a responsible single page application. The 3D earth crowns the scene while the landing application makes a first contact with the visitor.",
    technologies: ["HTML5", "CSS3", "Javascript","React", "Three.js", "Anime.js", "ReCaptcha"]
});
projects.push({
    id: "1",
    name: "PasswordCard",
    catchphrase: "\"Anywhere, Everywhere!\"",
    image: "assets/projects/passwordCards.gif",
    description: "PasswordCard, brings a software solution to generate password cards " +
    "which can be printed in a credit card (ISO/IEC 7810) and bring to the user a flexible, secure and persistent solution to generate, manage and bring their credentials everywhere in their pockets.",
    technologies: ["C#", "XAML", "UWP", "MySQL", "PDFSharpCore"],
});
projects.push({
    id: "2",
    name: "Web HUD Project",
    catchphrase: "\"First Person Web\"",
    image: "assets/projects/projectHUD.gif",
    description: "A concept project of video-game like HUD based in SVG and inspired in Cyberpunk to be implemented with 3D Web Technologies or just a new way to present a standard web.",
    technologies: ["HTML5", "CSS3", "PHP", "Javascript", "SVG"],
});
projects.push({
    id: "3",
    name: "Appointments App",
    catchphrase: "\"Let me check our last talk...\"",
    image: "assets/projects/iam.gif",
    description: "This data management application has been made to cover specific cases where inter-disciplinary teams of professionals need platforms to schedule and monitor appointements with people. In addition, it provides the possibility to keep on track with peers appointements respecting the data protection division between them. \n\n",
    technologies: ["HTML5", "CSS3", "Javascript", "Bootstrap", "Bootstrap Charts", "PHP", "MySQL"],
});
projects.push({
    id: "4",
    name: "Weather Component",
    catchphrase: "\"Did you check the weather?\"",
    image: "assets/projects/Weather-LA.gif",
    description: "Did you ever wanted to go to the swimming pool and forget to check the weather? If yes, then a weather component has never been more usefull. It might even become a good assets for your customers or communities!",
    technologies: ["HTML5", "CSS3", "Javascript",  "PHP", "Weather API"],
});
projects.push({
    id: "5",
    name: "Yatzee Mobile App",
    catchphrase: "\"The dice are cast!\"",
    image: "assets/projects/Yatzee.gif",
    description: "Yatzee is based in a traditional dice game, adapted by Milton Bradley. The player roll the dices and score combinations in the board. The game is won by the player who scores the most points.",
    technologies: ["Android SDK", "Java", "SQLite", "Smarphone sensors"],
});
projects.push({
    id: "6",
    name: "RATP Remake",
    catchphrase: "\"Simpler, Faster, Easier!\"",
    image: "assets/projects/ratp3.gif",
    description: "This redesign of the ticket terminal software of the RATP (Paris urban transport), seeks to improve the ergonomics and the UX. \n\n With a minimal interface, high contrast and big elements, it provides the shortest and fastest journey for the user. In addition, i18n built-in-architecture allows the language change at any moment without interrupting the user journey.",
    technologies: ["C#", "Windows Form", "MySQL", "i18N"],
});
projects.push({
    id: "7",
    name: "Knight's Tour II",
    catchphrase: "\"My kingdom for a horse!\"",
    image: "assets/projects/knightsTour.gif",
    description: "A videogame in Windows Forms based in the Knight's Tour mechanics. The knight visits every square at least once with out returning a second time. The game is lost when no possible movements are available. It is won when avery square of the board has been visited.",
    technologies: ["C#", "Windows Form"],
});
projects.push({
    id: "87",
    name: "Knight's Tour I",
    catchphrase: "\"My console for a horse!\"",
    image: "assets/projects/knightsTourConsole.gif",
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
                <div className="project-section-catchphrase">
                    <i>{project.catchphrase}</i>
                </div>
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
