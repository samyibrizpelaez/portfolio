
import * as React from 'react'
import { Route, Routes, Link } from 'react-router-dom'
import { HomePage } from './views/Home'
import { AboutPage } from './views/About'
import { ContactPage } from './views/Contact'
import { ProjectsPage } from './views/Projects'
import { ScenePage } from './views/Scene'

const NotFoundPage = () => <h1 id="page-title">Not Found</h1>

export function App() {
    return (
        <div className='App'>

            <header>
                <div id="nav-logo-container">
                    <a href="/" id="nav-logo-link">
                        <img id="nav-logo" src="assets/LogoSamyRainbow.png" alt="Logo" />
                        <h1 id="nav-title">SamyDev</h1>
                    </a>
                </div>
            </header>
            <div id="nav">
                <ul id="nav-collection">

                    <li className="nav-item">
                        <Link to="/">
                            <span>Home</span>
                            <img src="assets/icons/home.svg" alt="Home" />
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link to="projects">
                            <span>Projects</span>
                            <img src="assets/icons/project.svg" alt="Projects" />
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link to="about">
                            <span>About</span>
                            <img src="assets/icons/about.svg" alt="About" />
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link to="contact">
                            <span>Contact</span>
                            <img src="assets/icons/contact.svg" alt="Contact" />
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link to="scene">
                            <span>Demo</span>
                            <img src="assets/icons/wip.svg" alt="Demo" />
                        </Link>
                    </li>

                </ul>
                <footer>&copy; <em>2022</em> Samy Ibriz Pelaez</footer>
            </div>

            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/projects" element={<ProjectsPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/scene" element={<ScenePage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>


        </div>

    )
}


