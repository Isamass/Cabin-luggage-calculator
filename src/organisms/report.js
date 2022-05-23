import React from 'react'
import '../molecules/list.css'
import {useSearchParams} from "react-router-dom";
import Item from '../atoms/item'
import './itemSelector.css'
import './report.css'

function Report(props) {
    let [searchParams, setSearchParams] = useSearchParams();
  
    const items = searchParams.get("items")
    const weights = searchParams.get("weights")

    const airlineCompany = searchParams.get("airline")
    const totalWeight = searchParams.get("totalWeight")


    const itemList = items.split(',')
    const weightList = weights.split(',')
    
    const data = []
    itemList.map((el, index) => {
        const it = { label: el, weight: weightList[index]}
        data.push(it)
        return data;
    })

    return (
    <div className="app-container">
        <div className="company">
            {airlineCompany}
        </div>
        <div className="my-backpack list-box">
            <div>
                <h1>My backpack</h1>
                <hr />
            </div>
            <ul>
                {data.map((el, index) =>
                        <Item key={index} el={el} />
                    )}
            </ul>
            <div className="footer-list">
                <hr />
                <div className="total-container">
                    <p> Total</p>
                    <p>{totalWeight/1000} kg</p>
                </div>
            </div>

        </div>
    </div>
    )
}

export default Report