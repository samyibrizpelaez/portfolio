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

    const unDataAdapter     = new UNDataAdapter()



    const religionSelect    = new Select("ReligionSelect",  unDataAdapter.Religions)
    const sexSelect         = new Select("SexSelect",       unDataAdapter.Sexes)
    const slider            = new Slider("YearSlider", {
                                                        min:unDataAdapter.TimeAxis[0], 
                                                        max:unDataAdapter.TimeAxis[unDataAdapter.TimeAxis.length - 1], 
                                                        step:1
                                                        }
                                                    )



    console.log(
        "Filter Initial Values : ", 
        slider.value,
        religionSelect.value,
        sexSelect.value 
        )

    unDataAdapter.setFilter(
        slider.value,
        religionSelect.value,
        sexSelect.value
    )



    
    // unDataAdapter.setFilter(
    //     1995,
    //     "African Methodist Episcopal Church",
    //     "Both Sexes"
    // )

    console.log("Filter Event Resulting Data : ", unDataAdapter.ResultingData)

    const experience        = useRef(null)

   
    const canvas = EarthHandler()

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



