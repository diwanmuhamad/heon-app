import { Route, Routes } from "react-router-dom"
import React from 'react'
import { Home, SignUp, Login } from "./page"

const HeonApp = () => {
  return (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/signup" element={<SignUp />} />
    <Route path="/login" element={<Login />} />
  </Routes>
  )
}

export default HeonApp;