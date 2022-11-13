
import React from 'react';
import {useState} from 'react';


export default class Slider
{

    constructor(name, options, /*parentContext*/)
    {
        this.name = name
        this.props = options
        this.value = options[0]
        this.component = this.setComponent()
        // this.parentContext = parentContext
    }

    // notifyValueChange(){
    //     this.parentContext.valueUpdated()
    // }

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
                                        //this.notifyValueChange()
                                    }
                                }/>

            </div>

        )
    }

    renderComponent()
    {
        return this.component
    }

}







