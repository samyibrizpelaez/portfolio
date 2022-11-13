import React from 'react';
import {useState} from 'react';

// @Name        : Select
// @Description : Generate and return a select component
// @Output      : Component
export default class Select 
{

    constructor(name, options)
    {
        this.name = name
        this.options = options
        this.value = options[0]
        this.component = this.setComponent()
    }

    // Build the component with its options
    setComponent()
    {
        const [selectedValue, setValue] = useState(this.options[0])

        this.value = selectedValue

        return (

            <select 
                name={this.name}
                onChange={ (e) => { 
                            setValue(e.target.value)
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

    // Return the component
    renderComponent()
    {
        return this.component
    }

}

