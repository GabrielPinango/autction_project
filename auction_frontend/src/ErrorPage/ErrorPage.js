import Jumbotron from 'react-bootstrap/Jumbotron';
import { Link } from 'react-router-dom';
const ErrorPage = () => {
    return <>
        <Jumbotron>
            <h1>Oops!</h1>
            <p>
                The page you're trying to reach, doesn't exist.
            </p>
            <p>
                <Link to='/' style={{textDecoration:'none',color:'#000'}}>Click here to go to home page</Link>
            </p>
        </Jumbotron>
    </>;
}

export default ErrorPage;