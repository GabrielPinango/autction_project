import { useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import ModalDialog from '../ModalDialog/ModalDialog';
import LoginForm from '../Login/LoginForm';
import LoginNav from '../Login/LoginNav';
import { useLocation } from 'react-router-dom'

const NavSection = () => {
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    const loginNav = <LoginNav handleShow={handleShow} />;
    const loginForm = <LoginForm handleClose={handleClose} />;
    return <>
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/">Auction Site</Navbar.Brand>
            <Navbar.Collapse>
                <Nav activeKey={useLocation().pathname}>
                    <Nav.Link eventKey="/" href="/">Home</Nav.Link>
                    <Nav.Link eventKey="#">About us</Nav.Link>
                    <Nav.Link eventKey="#">Contact us</Nav.Link>
                    {sessionStorage.getItem('user') != null ? <Nav.Link eventKey="/products"  href="/products">Products</Nav.Link> : ''}
                </Nav>
            </Navbar.Collapse>
            {loginNav}
        </Navbar>
        <ModalDialog show={show} handleClose={handleClose} formModal={loginForm} title='Login'  />
    </>
}

export default NavSection;