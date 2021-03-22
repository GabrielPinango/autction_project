import { useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import ModalDialog from '../ModalDialog/ModalDialog';
import LoginForm from '../Login/LoginForm';
import LoginNav from '../Login/LoginNav';
import { useLocation,Link } from 'react-router-dom';

const NavSection = () => {
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    const loginNav = <LoginNav handleShow={handleShow} />;
    const loginForm = <LoginForm handleClose={handleClose} />;
    return <>
        <Navbar bg="light" expand="lg">
            <Navbar.Brand>
                <Link to='/' style={{textDecoration:'none',color:'#000'}}>Auction Site</Link>
            </Navbar.Brand>
            <Navbar.Collapse>
                <Nav activeKey={useLocation().pathname}>
                    <Nav.Link eventKey="/">
                        <Link to='/' style={{textDecoration:'none',color:'#000'}}>Auction Site</Link>
                    </Nav.Link>
                    <Nav.Link eventKey="#">About us</Nav.Link>
                    <Nav.Link eventKey="#">Contact us</Nav.Link>
                    {(sessionStorage.getItem('user') != null ?
                    <Nav.Link eventKey="/products/1" >
                        <Link to='/products/1' style={{textDecoration:'none',color:'#000'}}>Products</Link>
                    </Nav.Link> : '')}
                </Nav>
            </Navbar.Collapse>
            {loginNav}
        </Navbar>
        <ModalDialog show={show} handleClose={handleClose} formModal={loginForm} title='Login'  />
    </>
}

export default NavSection;