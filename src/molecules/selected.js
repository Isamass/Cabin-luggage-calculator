import React from 'react'
import Item from '../atoms/item'
import './list.css'

import { useNavigate, createSearchParams } from 'react-router-dom';


function Selected(props) {
    let navigate = useNavigate()
    function handleClick() {
        const stringData =  props.listItems.map((el) => `${el.label}`).join(',');
        const weightData =  props.listItems.map((el) => `${el.weight}`).join(',');

        navigate({
            pathname: "report",
            search: `?${createSearchParams({
              items:stringData,
              weights: weightData,
              airline: {...props}.airline,
              totalWeight: props.totalWeight
            })}`
          });
          //queryParams: { myArray: arrayOfValues }
      }

    return (
    <div  className={props.listItems.length === 0 ? `list-box empty selected` : `list-box not-empty selected`}>
        <div className="header-list">
            <h1>Selected</h1>
            <hr />
        </div>
        <div className="content-list">
            <ul>
                {props.listItems.map((el, index) => (
                    <li key={index}><Item handleClick={props.handleClick} el={el} onHover="Remove" /></li>
                ))}
            </ul>
        </div>
        <div className="footer-list">
            <hr />
            <div className="total-container">
                <p> Total</p>
                <p className={props.totalWeight>={...props}.limit ? `red` : ``}>{props.totalWeight/1000} kg</p>
            </div>
            <hr />
            <div className="button-container">
                <button disabled={props.totalWeight>={...props}.limit || props.totalWeight===0} onClick={handleClick}> See Resume </button>
            </div>
        </div>
    </div>
    )
}

export default Selected