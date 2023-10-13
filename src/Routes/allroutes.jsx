import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/home'
import Private from './private'
import Dashboard from '../pages/dashboard'
import Admin from '../pages/admin'

const AllRoutes = () => {
  return (
      <Routes>
          <Route path='/' element={<Home/> } >Home</Route>
          <Route path='/dashboard' element={<Private> <Dashboard/> </Private>} >Dashboard</Route>
          <Route path='/admin' element={<Admin/> } >Admin</Route>
      </Routes>
  )
}

export default AllRoutes