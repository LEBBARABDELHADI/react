import React from 'react'
import { Link, useParams } from 'react-router-dom'

export default function HomePage() {
  return (
    <div className="container">
      <h1>Home Page</h1>
      <p>
        <Link to="/stephanebrunet">Formation-react</Link> depuis GitHub.
      </p>
    </div>
  )
}