import { Route, Routes } from "react-router-dom"
import React from 'react'
import { Home, SignUp, Login, Chat } from "./page"

const HeonApp = () => {
  return (
  <Routes>
    <Route path="/signup" element={<SignUp />} />
    <Route path="/login" element={<Login />} />
    <Route path="/chat" element={<Chat />} />
    <Route path="/" element={<Home />} />
  </Routes>
  )
}

export default HeonApp;