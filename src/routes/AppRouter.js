import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { App } from '../components/App';

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<App />} />
                <Route path='/*' element={<Navigate to='/' />} />
            </Routes>
        </BrowserRouter>
    )
}