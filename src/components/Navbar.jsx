import { Link } from "react-router"

function Navbar() {
    return (
        <nav>
            <Link to='/'> Homepage </Link>
            <Link to='/products'> All Products </Link>
            <Link to='/products/create'> Create Products </Link>




        </nav>
    )
}

export default Navbar
