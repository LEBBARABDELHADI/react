import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import Roster from './Roster'
import Crew from './Player'
import Voiture from './Voiture'

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /voiture routes will match any pathname that starts
// with /roster or /voiture. The / route will only match
// when the pathname is exactly the string "/"
const Main = () => (
  <main>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/agents' element={<Roster />} />
      <Route path='agents/agent/:number' element={<Crew />}/>
      <Route path='/voitures' element={<Voiture />} />
    </Routes>
  </main>
)

export default Main
