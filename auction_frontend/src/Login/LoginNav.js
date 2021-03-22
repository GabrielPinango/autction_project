import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const LoginNav = ({handleShow}) => {
    if(sessionStorage.getItem('user') == null) {
        return <>
            <Navbar.Collapse className="justify-content-end">
                <Nav activeKey="/home">
                    <Nav.Item  className="justify-content-end" onClick={handleShow}>
                        <Nav.Link >Login</Nav.Link>
                    </Nav.Item>
                    <Nav.Link  className="justify-content-end" eventKey="#">Sign up</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </>
    } else {
        const loggedUser = JSON.parse(sessionStorage.getItem('user'));
        const {firstname, lastname} = loggedUser;
        return <>
           <Navbar.Collapse className="justify-content-end">
                <Nav activeKey="/home">
                    <Nav.Item  className="justify-content-end" >
                        {firstname + ' ' + lastname} <br/>
                        <small>Logout</small>
                    </Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </>;
    }
}

export default LoginNav;