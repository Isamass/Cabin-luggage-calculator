import React from 'react'
import axios from 'axios'
import { useState } from 'react';
import './companies.css'
import arrowDown from './../assets/arrow-down.svg'
import arrowUp from './../assets/arrow-up.svg'




function Companies(props) {
    const [dataIsFetched, setDataFetched] =  useState(false)
    const [companies, setCompanies] = useState([])
    const [show, setShow] = useState(false)


    //    async function getRequest() {
    //     const response = await axios ({
    //         url: "https://the-offline-bp-back.herokuapp.com/can-i-haz-the-key",
    //         method: "GET",
    //     })
    //    console.log(response.data)
    // }

    // getRequest()
    
    function decryptKey(key) {
        let code=''
        const keyArray = key.split('')
        let newChar = 0
        keyArray.map((char)=> {
            newChar = char.charCodeAt()-3
            code = code + String.fromCharCode(newChar)
            return null
        })
        return code
    }

    async function getRequest() {
        const response = await axios ({
            url: "https://the-offline-bp-back.herokuapp.com/get-carriers",
            method: "GET",
            params: {
                secret_key: decryptKey('SlfduglhSdvKdxwvGhIudqfh')
            }
        })
        setDataFetched(true)
        setCompanies(response.data.message)
    }

    if (!dataIsFetched) {
        getRequest()
    }

    function handleClick(val) {
        const selectedCompany = companies.find(x => x.label === val)
        props.setAirline(selectedCompany.label)
        props.setLimit(selectedCompany.limit)
        setShow(false)
    }

    return (
    <div className="companies-container">
        <button className="airlines-button" onClick={()=>show ? setShow(false) : setShow(true)}>
            <p>{props.airline}</p>
            <img src={show ? arrowUp : arrowDown} alt="arrow"  />
        </button>

        {show && dataIsFetched ? (
        <ul className="companies">
            {companies.map((el,index) => (
               <li className="list__item" key={index}>
               <label className="label--radio">
                   <p>{el.label}</p>
                   <input type="radio" value={el.label} className={`radio`} checked={el.label===props.airline} name="airlines" onChange={()=>handleClick(el.label)} />
               </label>
             </li>
            ))}
        </ul>) : null}

    </div>
    )
}

export default Companies