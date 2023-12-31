import React from 'react'
import PlayerAPI from '../api'
import { Link, useParams } from 'react-router-dom'

// The Player looks up the player using the number parsed from
// the URL's pathname. If no player is found with the given
// number, then a "player not found" message is displayed.

const Crew = () => {
  const {number} = useParams();
  const player = PlayerAPI.get(
    parseInt(number, 10)
  )
  if (!player) {
    return <div>désolé pas de personnage</div>
  }
  return (
    <div>
      <h1>{player.name} (#{player.number})</h1>
      <h2>Poste : {player.position}</h2>
      <Link to='/agents'>retour</Link>
    </div>
  )
}

export default Crew
