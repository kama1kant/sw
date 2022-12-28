import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Portfolio from './CominSoon';


function Main() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Portfolio />} />
            </Routes>
        </div>
    )
}

export default Main;