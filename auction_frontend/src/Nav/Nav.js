import { useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import ModalDialog from '../ModalDialog/ModalDialog';
import LoginForm from '../LoginForm/LoginForm';

const NavSection = () => {
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    const loginForm = <LoginForm />;
    return <>
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">Auction Site</Navbar.Brand>
            <Navbar.Collapse>
                <Nav activeKey="/home">
                    <Nav.Link eventKey="#">Home</Nav.Link>
                    <Nav.Link eventKey="#">About us</Nav.Link>
                    <Nav.Link eventKey="#">Contact us</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            <Navbar.Collapse className="justify-content-end">
                <Nav activeKey="/home">
                    <Nav.Item  className="justify-content-end" onClick={handleShow}>
                        <Nav.Link >Login</Nav.Link>
                    </Nav.Item>
                    <Nav.Link  className="justify-content-end" eventKey="#">Sign up</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>

        <ModalDialog show={show} handleClose={handleClose} formModal={loginForm}  />
    </>
}

export default NavSection;