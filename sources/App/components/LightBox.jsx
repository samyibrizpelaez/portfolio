import React from 'react';
import {useState} from 'react';





export function LightBoxDisplay(image){

    const [visible, setVisible] = useState(false)
    const imgClassName = visible ? "lightbox-on" : "project-section-image"

    return (
        <div 
            className={imgClassName}
            onClick={ () => { setVisible(!visible) }} >
            <img src={image.image} 
                alt="Project image">
            </img>
           
        </div>
    )
}