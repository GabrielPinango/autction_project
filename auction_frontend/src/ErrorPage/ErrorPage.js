import Jumbotron from 'react-bootstrap/Jumbotron';
const ErrorPage = () => {
    return <>
        <Jumbotron>
            <h1>Oops!</h1>
            <p>
                The page you're trying to reach, doesn't exist.
            </p>
            <p>
                <a href="/">Click here to go to home page</a>
            </p>
        </Jumbotron>
    </>;
}

export default ErrorPage;