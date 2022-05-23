import React from 'react'
import './item.css'

function Item(props) {
    function handleOver(e) {
       e.target.textContent=props.onHover      
       if (props.onHover==='Add') {
           e.target.style = 'color:rgba(0, 173, 152, 1)'
       } else if (props.onHover==='Remove') {
           e.target.style = 'color: #FF5353'
       }
    }

    function handleLeave(e) {
        e.target.textContent=props.el.weight+'g'
        e.target.style='color:rgba(0, 0, 0, 0.5)'
    }

    function capitalize(word) {
        return word.charAt(0).toUpperCase() + word.slice(1)
    }
    return(
        <div className="item">
            <div className="item-label">{capitalize(props.el.label)} </div> 
            <div  
                onClick={()=>props.handleClick(props.el)}
                onMouseOver={props.onHover && handleOver}
                onMouseLeave={props.onHover && handleLeave}
                className={props.onHover  ? props.onHover + ` item-weight` : `item-weight` }
            >
                {props.el.weight}g
            </div>
        </div>
    )
}

export default Item