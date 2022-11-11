import React from 'react'
import {useState, useRef} from 'react'

import  Slider  from '../components/Slider'
import  Select from '../components/Select'
import { EarthHandler} from '../components/EarthHandler'
import UNDataAdapter from '../components/UNDataAdapter'

// @Name        : ScenePage
// @Description : Page for scene experiments
// @Output      : React Component
export function ScenePage() {

    const religionSelect    = new Select("ReligionSelect", ["Christian", "Muslim", "Papaya"])
    const sexSelect         = new Select("SexSelect", ["Both", "Male", "Female"])
    const slider            = new Slider("YearSlider", {min:1990, max:2023, step:1})
    const experience        = useRef(null)
    const unDataAdapter     = new UNDataAdapter()
    console.log(unDataAdapter.parsedData)



    return (

        <div>

            <h1 id="page-title">RTS</h1>

            <div id="page-content">
            
                <h2>Religion in time and space</h2>

                
                {console.log(slider)}
                {console.log(religionSelect)}
                {console.log(sexSelect)}
                {religionSelect.renderComponent()}
                {sexSelect.renderComponent()}
                {slider.renderComponent()}




            </div>

        </div>

    )

}

