import { Link } from "react-router-dom";

function Nav() {
    return (
        <nav>
            <Link to="/">Home </Link>
            <Link to="/about"> About </Link>
            <Link to="/projects"> Projects </Link>
            <Link to="/api"> APIPage </Link>
        </nav>
    )
}

export default Nav