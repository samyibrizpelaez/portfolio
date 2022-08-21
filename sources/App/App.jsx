
import * as React from 'react'
import { Route, Routes, Link} from 'react-router-dom'
import { HomePage } from './views/Home'
import { AboutPage } from './views/About'
import { ContactPage } from './views/Contact'
import { ProjectsPage } from './views/Projects'

const NotFoundPage  = ()    => <h1 id="page-title">Not Found</h1>

export function App()
{
    return (
        <div className='App'>

            <header>
                <div id="nav-logo-container">
                    <a href="/" id="nav-logo-link">
                        <img id="nav-logo" src="assets/LogoSamyCurve.png" alt="Logo"/>
                        <h1 id="nav-title">SamyDev</h1>
                    </a>
                </div>
            </header>
            <div id="nav">
                    <ul id="nav-collection">
                        <li className="nav-item"><Link to="/">Home</Link></li>
                        <li className="nav-item"><Link to="projects">Projects</Link></li>
                        <li className="nav-item"><Link to="about">About</Link></li>
                        <li className="nav-item"><Link to="contact">Contact</Link></li>
                    </ul>
            </div>

            <Routes>
                <Route path="/"             element={<HomePage />}      />
                <Route path="/about"        element={<AboutPage />}     />
                <Route path="/projects"     element={<ProjectsPage />}   />
                <Route path="/contact"      element={<ContactPage/>}     />
                <Route path="*"             element={<NotFoundPage />}  />
            </Routes>
        </div>
        
    )
}


