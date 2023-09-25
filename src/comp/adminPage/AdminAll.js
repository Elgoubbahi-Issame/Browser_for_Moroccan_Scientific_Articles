import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Auth from './Auth_adm'
import DashBoard from './DashBoard'
import './index.scss'


function AdminAll() {

    return (
        <div className='main-admin'>
            {/*  */}
            <Routes>
                <Route exact path="/Auth" element={<Auth />} />
                <Route exact path="/Dashboard" element={<DashBoard />} />
                <Route exact path="/Dashboard/:id" element={<DashBoard />} />
            </Routes>
        </div>
    )
}

export default AdminAll