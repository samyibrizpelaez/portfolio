import React from 'react'
import {useState, forceUpdate, useRef} from 'react'

import Slider  from '../components/Slider'
import Select from '../components/Select'
import EarthDataHandler from '../components/EarthHandler'
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



    // console.log(
    //     "Filter Initial Values : ", 
    //     slider.value,
    //     religionSelect.value,
    //     sexSelect.value 
    //     )

    unDataAdapter.setFilter(
        slider.value,
        religionSelect.value,
        sexSelect.value
    )

    const vizData = unDataAdapter.ResultingData
    //console.log("Filter Event Resulting Data : ", vizData)
    
    const [raycastedValue, setRaycasted]    = useState(null);
    const earthDataViz                      = new EarthDataHandler(vizData)

    window.addEventListener('mousemove', (event) =>
    {
        setRaycasted(earthDataViz.raycastBindValue)
        //console.log("RAYCASTED :", raycastedValue)

    })

    return (

        <section className="scene-section">

            <h1 id="page-title">RTS</h1>

            <div id="page-content">
            
                <h2>Religion in time and space</h2>

                {religionSelect.renderComponent()}
                {sexSelect.renderComponent()}
                {slider.renderComponent()}

                <p> 
                    {
                        <RayCastedData data={raycastedValue}/>
                    } 
                </p>


            </div>

        </section>

    )

}

export default function RayCastedData(props)
{
    //console.log("RAYCASTED")

    if(props.data != null)
    {
        //console.log("RAYCASTED")
        return (
            <div className='raycasted'>
                <p>{"Country     : " + props.data["Country or Area"]}</p>
                <p>{"Country Code: " + props.data["alpha2"]}</p>
                <p>{"Year        : " + props.data["Year"]}</p>
                <p>{"Source Year : " + props.data["Source Year"]}</p>
                <p>{"Area        : " + props.data["Area"]}</p>
                <p>{"Sex         : " + props.data["Sex"]}</p>
                <p>{"Religion    : " + props.data["Religion"]}</p>
                <p>{"Reliability : " + props.data["Reliability"]}</p>
                <p>{"Record Type : " + props.data["Record Type"]}</p>
                <p>{"Population  : " + props.data["Value"]}</p>
                
            </div>
        )
        
    }
}



