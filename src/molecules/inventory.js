import React from 'react'
import Item from '../atoms/item'
import './list.css'

function Inventory(props) {

    return (
    <div className="list-box">
        <div className="header-list">
            <h1>Inventory</h1>
            <hr />
        </div>
        {(()=>{
            if (props.dataIsFetched) {
                return (
                    <div className="content-list">
                        <ul>
                            {props.listItems.map((el,index) => (
                                <li key={index}><Item handleClick={props.handleClick} el={el} onHover="Add" /></li>
                            ))}
                        </ul>
                    </div>
                )
            } else {
                return (
                    <div className="content-list loading">
                        <div className="loading-dot-container">
                            <div className="loading-dot"></div>
                        </div>
                    </div>
                )
            }
        })()}
    </div>
    )
}

export default Inventory