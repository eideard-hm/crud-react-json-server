import { Container, Navbar, Nav } from "react-bootstrap"
import { NavLink } from "react-router-dom"

const Header = ({ brand }) => {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <NavLink to="/" className="navbar-brand">{brand}</NavLink>
                    <Nav className="me-auto">
                        <NavLink to="/new" className="nav-link">Nuevo</NavLink>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default Header
