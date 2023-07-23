import React from 'react'
import { Routes, Route } from 'react-router-dom'
import FullRoster from './FullRoster'
import Crew from './Player'

// The Roster component matches one of two different routes
// depending on the full pathname
const Roster = () => (
  <Routes>
    <Route path='*' element={<FullRoster />}/>
  </Routes>
)
export default Roster
