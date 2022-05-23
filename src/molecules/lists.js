import React from 'react';
import { useState } from 'react';
import axios from 'axios'
import arrow from '../assets/arrow.svg'


import Selected from './selected'
import './lists.css'
import Inventory from './inventory';



function Lists(props) {

    const data=[]


    function handleClickSelect(item) {
        const itemSelected = listItems.find(it => it.label === item.label)
        setListItems(listItems.filter(it => it.label !== itemSelected.label))
        listSelected.push(itemSelected)
        setListSelected(listSelected)
        setTotalWeight(totalWeight+itemSelected.weight)
    }

    function handleClickRemove(item) {
        const itemSelected = listSelected.find(it => it.label === item.label)
        setListSelected(listSelected.filter(it => it.label !== itemSelected.label))
        listItems.push(itemSelected)
        setListItems(listItems)
        setTotalWeight(totalWeight-itemSelected.weight)
    } 


    const [listItems, setListItems] = useState(data)
    const [listSelected, setListSelected] = useState(Array)
    const [totalWeight, setTotalWeight] = useState(0)
    const [dataIsFetched, setDataFetched] =  useState(false)





    async function getRequest() {
        const response = await axios ({
            url: "https://the-offline-back.herokuapp.com/api/v2/cabin-luggage-inventory",
            method: "GET"
        })
    
        setListItems(response.data.items)
        setDataFetched(true)
    }

    if (!dataIsFetched) {
        getRequest()
    }

    return (
        <div className="lists">
            <Inventory handleClick={handleClickSelect} listItems={listItems} dataIsFetched={dataIsFetched} />
            <img src={arrow} alt="arrow" className="centered" />
            <Selected handleClick={handleClickRemove} listItems={listSelected} totalWeight={totalWeight} {...props} />
        </div>
    )
}

export default Lists

