import { Route, Routes } from "react-router-dom"
import React from 'react'
import { Home } from "./page"

const HeonApp = () => {
  return (
  <Routes>
    <Route path="/" element={<Home />} />
  </Routes>
  )
}

export default HeonApp;