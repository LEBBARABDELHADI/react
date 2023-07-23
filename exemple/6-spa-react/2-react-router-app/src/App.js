import React from "react";
import { BrowserRouter, Routes, Route, Link, Outlet, useParams } from 'react-router-dom'
import './App.css';
import Caracteres from './data.js';


const App = () => {
  return (
    <BrowserRouter>
    <div>
      <ul>
        <li> <Link to="">Accueil</Link> </li>
        <li> <Link to="orders">Agents</Link></li>
        <li> <Link to="acteurs">Acteurs</Link></li>
      </ul>
      <div className="dashboard">
        <Routes>
          <Route path="/" element={<Accueil />}></Route>
          <Route path="orders" element={<Agents />}></Route>
          <Route path="acteurs" element={<Acteurs />}></Route>
          <Route path="order_details/:agentId" element={<AgentDetails />} />
          <Route path="*" element={<Lost />}></Route>
        </Routes>
      </div>
    </div>
    </BrowserRouter>
  )
}

export const Accueil = () => {
  return <><h2>Accueil</h2><p> Bienvenu à cette page d'accueil</p>  </>
}
export const Lost = () => {
  return <><h2>Dead link</h2><p> <img src="http://www.nunuboogie.com/wp-content/uploads/2012/04/Screen-shot-2012-04-03-at-13.49.08.png" /> </p></>
}
export const Agents = () => {
  const agentIds = ["006", "007", "002"]
  return (
    <>
      <h2>Orders</h2>
      <ul className="orders">
        {/* Loop through the orders array and display link to order details */}
        {agentIds.map(agentId => {
          return (
            <li key={agentId}>
              <Link to={`/order_details/${agentId}`}>
                Agent {agentId} authorisé à tuer
              </Link>
            </li>
          )
        })}
      </ul>
    </>
  )
}
export const Acteurs = () => {

  return (
    <>
      <h2>Acteurs</h2>
      <ul className="orders">
        {/* Loop through the orders array and display link to order details */}

        {Caracteres.Agents.map(espion => {
          return (
            <li key={espion.ordre}>
              <Link to={`/order_details/${espion.annee}`}>
                Acteur {espion.Fullname} premier film "{espion.premier}"
              </Link>
            </li>
          )
        })}
      </ul>
    </>
  )
}
export const AgentDetails = () => {
  const params = useParams()
  return <h2>Film sorti en : {params.agentId}</h2>
}
export default App;
