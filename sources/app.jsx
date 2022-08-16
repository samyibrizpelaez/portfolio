
import * as React from 'react'
import { ReactDOM } from 'react'

function ReactStatesJSXComponent(){
    console.log('React States JSX Component');
    const $app = document.getElementById('app')
    const useState = React.useState

    const Avatar = ({id, name = "-", size = "medium"}) => {
        const [enabled, setEnabled] = useState(true)

        var src = ''
        if (!id) src = `https://th.bing.com/th/id/OIP.hxRValICG6OlXI56NUfSjAHaF1?pid=ImgDet&rs=1`
        else src = `https://randomuser.me/api/portraits/women/${id}.jpg`
         
        
        let pictureClassName = ''

        switch(size) {
            case 'small':
                pictureClassName = 'is-small'
                break;
            case 'medium':
                pictureClassName = 'is-medium'
                break;
            case 'large':
                pictureClassName = 'is-large'
                break;
            default:
                pictureClassName = ''
        }

        const imgClassName = enabled ? "" : "disabled"

        return (
            <picture className={pictureClassName}>
                <img 
                    onClick={ () => { setEnabled(!enabled) }}
                    className={imgClassName} 
                    src={src}/>
                <span>{name}</span> 
            </picture>
        )
    
    }

    ReactDOM.render(
        <div>
            <Avatar id={1} name='Linda' size='small'/>    
            <Avatar id={2} name='Sarah' size='medium'/>        
            <Avatar id={3} name='Micah'  size='large'/>        
            <Avatar/>        
            <Avatar id={4} size='small'/>        
        </div>,
        $app
    )
}
ReactStatesJSXComponent()