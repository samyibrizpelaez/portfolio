
import * as React from 'react'
import { App } from './App'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom"
import { ScrollToTop } from './components/ScrollToTop'



console.log( "   .d88888b                               888888ba                    ")
console.log( "   88.   \"'                              88    `8b                   ")
console.log( "   `Y88888b. .d8888b. 88d8b.d8b. dP    dP 88     88 .d8888b. dP   .dP ") 
console.log( "         `8b 88'  `88 88'`88'`88 88    88 88     88 88ooood8 88   d8' ")
console.log( "   d8'   .8P 88.  .88 88  88  88 88.  .88 88    .8P 88.  ... 88 .88'  ") 
console.log( "    Y88888P  `88888P8 dP  dP  dP `8888P88 8888888P  `88888P' 8888P'   ") 
console.log( "                                      .88                             ")                                                                                      
console.log( "                                  d8888P                              ")                                                                                      
console.log( "                                                                      ")                                                                                      
console.log( "   @copyright : Samy Ibriz Pelaez                                     ")                                                                                      
console.log( "   @date      : 29.08.2022                                            ")                                                                                      
console.log( "   @domain    : samydev.com                                           ")                                                                                      

const app = document.getElementById('app')
const root = createRoot(app)
root.render(
    <BrowserRouter>
        <ScrollToTop />
        <App />
    </BrowserRouter>
)