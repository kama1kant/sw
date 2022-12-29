import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ComingSoon from './CominSoon';


function Main() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<ComingSoon />} />
            </Routes>
        </div>
    )
}

export default Main;