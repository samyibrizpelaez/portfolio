import React from 'react';
import {useState} from 'react';

// @Name        : Slider
// @Description : Generate and return a input:type:range component
// @Output      : Component
export default class Slider
{

    constructor(name, options)
    {
        this.name = name
        this.props = options
        this.value = options[0]
        this.component = this.setComponent()
    }

    // Generate and build the component with a range of years
    setComponent()
    {
        const [selectedValue, setValue] = useState(this.props.min)

        this.value = selectedValue

        return (

            <div className="sliderContainer">

                <label htmlFor={this.name}>Selected Year</label>

                <p>
                    {selectedValue}
                </p>

                <input 
                    name    ={this.name} 
                    type    ="range" 
                    min     ={this.props.min} 
                    max     ={this.props.max}  
                    step    ={this.props.step} 
                    onInput ={ (e) => { 
                                        setValue(e.target.value) 
                                    }
                                }/>

            </div>

        )
    }

    // Return component
    renderComponent()
    {
        return this.component
    }

}







