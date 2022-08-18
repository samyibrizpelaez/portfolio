
import * as React from 'react'
import { App } from './App'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom"

const app = document.getElementById('app')
const root = createRoot(app)
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
)