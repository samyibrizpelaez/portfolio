
import * as React from 'react'
import { Route, Routes} from 'react-router-dom'

const HomePage      = ()    => <h1>Home</h1>
const SearchPage    = ()    => <h1>Search</h1>
const AboutPage     = ()    => <h1>About</h1>
const NotFoundPage  = ()    => <h1>Not Found</h1>

export function App()
{
    return (
        <div className='App'>

            <header>
            <div id="nav">
                <div id="nav-logo-container">
                    <img id="nav-logo" src="assets/LogoSamyCurve.png" alt="Logo"/>
                </div>
                <h1 id="nav-title">SamyDev</h1>
                <ul id="nav-collection">
                    <li class="nav-item"><a href="/">Home</a></li>
                    <li class="nav-item"><a href="about">About</a></li>
                    <li class="nav-item"><a href="contact">Contact</a></li>
                </ul>
            </div> 
            </header>

            <Routes>
                <Route path="/"         element={<HomePage />}      />
                <Route path="/search"   element={<SearchPage />}    />
                <Route path="/about"    element={<AboutPage />}     />
                <Route path="*"         element={<NotFoundPage />}  />
            </Routes>
        </div>
        
    )
}


