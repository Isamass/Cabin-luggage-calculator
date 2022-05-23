import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Report from './report';
import ItemSelector from './itemSelector'

function App() {
return (
    <Router>
        <Routes>
            <Route path="/" element={<ItemSelector />} />
            <Route path="/report" element={<Report />} />
        </Routes>
    </Router>
)
}

export default App