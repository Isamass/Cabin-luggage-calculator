import React from 'react';
import Lists from '../molecules/lists'
import Companies from '../atoms/companies'
import { useState } from 'react';

import './itemSelector.css'

function ItemSelector() {
    const [limit, setLimit] = useState(0)
    const [airline, setAirline] = useState('Airlines')
    return (    
        <div className="app-container">
            <Companies airline={airline} setAirline={setAirline} setLimit={setLimit} />
            <Lists airline={airline} limit={limit} />
        </div>
    )
}

export default ItemSelector

