import React from 'react'
import { Routes, Route, useParams } from 'react-router-dom'
import HomePage from './pages/HomePage'
import UserPage from './pages/UserPage'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/:userName" element={<UserPage />} />
    </Routes>
  )
}
