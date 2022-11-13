import React from 'react';
import {useState} from 'react';

export default class Select 
{

    constructor(name, options, /*parentContext*/)
    {
        this.name = name
        this.options = options
        this.value = options[0]
        this.component = this.setComponent()
        // this.parentContext = parentContext
    }


    // notifyValueChange(){
    //     this.parentContext.valueUpdated()
    // }


    setComponent()
    {
        const [selectedValue, setValue] = useState(this.options[0])

        this.value = selectedValue

        return (

            <select 
                name={this.name}
                onChange={ (e) => { 
                            setValue(e.target.value)
                            //this.notifyValueChange()
                        } 
                    }>
    
                {
                    this.options.map( (option) => {
    
                        return <option key={option} value={option}>{option}</option>
    
                    })
                }
    
            </select> 
        )
    }

    renderComponent()
    {
        return this.component
    }

}

