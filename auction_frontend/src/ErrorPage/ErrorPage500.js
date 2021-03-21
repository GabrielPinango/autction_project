import Jumbotron from 'react-bootstrap/Jumbotron';
import { Link } from 'react-router-dom';

const ErrorPage500 = () => {
    return <>
        <Jumbotron>
            <h1>Oops!</h1>
            <p>
                An error has ocurred, please try again later.
            </p>
            <p>
                <Link to='/' style={{textDecoration:'none',color:'#000'}}>Click here to go to home page</Link>
            </p>
        </Jumbotron>
    </>;
}

export default ErrorPage500;