import { Link } from 'react-router-dom'

const Header = () => {
    return(
        <nav className="navbar">
        <h1>The 50 States</h1>
        <div className>
            <Link to="/">Home</Link>
            <Link to="/list">List of States</Link>
        </div>
        </nav>
    )
}

export default Header