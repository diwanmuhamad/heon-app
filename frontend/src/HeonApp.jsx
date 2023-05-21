import { Route, Routes } from "react-router-dom"
import React from 'react'
import { Home, SignUp, Login, Admin } from "./page"

const HeonApp = () => {
  return (
  <Routes>
    <Route path="/signup" element={<SignUp />} />
    <Route path="/login" element={<Login />} />
    <Route path="/admin/:role/:menu" element={<Admin />} />
    <Route path="/" element={<Home />} />
  </Routes>
  )
}

export default HeonApp;