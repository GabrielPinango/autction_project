import Nav from 'react-bootstrap/Nav';

const NavSection = () => {
    return <Nav className="justify-content-end" activeKey="/home">
        <Nav.Item>
            <Nav.Link eventKey="#">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link eventKey="#">About us</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link eventKey="#">Contact us</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link eventKey="#">Login</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link eventKey="#">Sign up</Nav.Link>
        </Nav.Item>
    </Nav>
}

export default NavSection;