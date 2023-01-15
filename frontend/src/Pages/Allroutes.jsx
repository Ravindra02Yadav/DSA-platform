import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Cars from './Cars'
import Home from './Home'
import Login from './Login'
import SingleCars from './SingleCars'

const Allroutes = () => {
  return (
    <div>
         <Routes>
        <Route path="/" element={<Home />} />;
      <Route path="/cars" element={<Cars />} />;
      <Route path="/login" element={<Login />} />
      <Route path="/watches/:id" element={<SingleCars />} />
      <Route path="*" element={<div>Page Not Found</div>} />
    </Routes>
    </div>
  )
}

export default Allroutes