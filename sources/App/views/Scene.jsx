import React from 'react'
import {useState, forceUpdate, useRef} from 'react'

import Slider  from '../components/Slider'
import Select from '../components/Select'
import EarthDataHandler from '../components/EarthHandler'
import UNDataAdapter from '../components/UNDataAdapter'

// @Name        : ScenePage
// @Description : Page for scene experiments
// @Output      : Component
export function ScenePage() {

    // Data Loader & ETL
    const unDataAdapter     = new UNDataAdapter()

    // Filters components
    const religionSelect    = new Select("ReligionSelect",  unDataAdapter.Religions)
    const sexSelect         = new Select("SexSelect",       unDataAdapter.Sexes)
    const slider            = new Slider("YearSlider", {
                                                        min:unDataAdapter.TimeAxis[0], 
                                                        max:unDataAdapter.TimeAxis[unDataAdapter.TimeAxis.length - 1], 
                                                        step:1
                                                        }
                                                    )


    // Filters data before serving                                                    
    unDataAdapter.setFilter(
        slider.value,
        religionSelect.value,
        sexSelect.value
    )

    // Recover data
    const vizData = unDataAdapter.ResultingData
    
    // Enable raycasting & data re-render via react state
    const [raycastedValue, setRaycasted]    = useState(null);
    const earthDataViz                      = new EarthDataHandler(vizData)

    // Mouse event for raycasting data update
    window.addEventListener('mousemove', (event) =>
    {
        setRaycasted(earthDataViz.raycastBindValue)

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


// @Name        : RayCastedData
// @Description : Component for Raycasted Obj data.
//                Display data if available.
// @Output      : Component
export default function RayCastedData(props)
{

    if(props.data != null)
    {
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



