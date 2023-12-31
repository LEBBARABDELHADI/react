import { Link } from 'react-router-dom'

// The Header creates links that can be used to navigate
// between routes.
const Header = () => (
  <header>
    <nav>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/agents'>Liste</Link></li>
        <li><Link to='/voitures'>Voitures</Link></li>
        <li><Link to='/films'>Les films</Link></li>
      </ul>
    </nav>
  </header>
)

export default Header
