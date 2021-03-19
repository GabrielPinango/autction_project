import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';

const LoginForm = () => {
    return <>
    <InputGroup className="mb-3">
        <FormControl
            placeholder="username"
            aria-label="username"
            aria-describedby="basic-addon2"
        />
    </InputGroup>
    <InputGroup className="mb-3">
        <FormControl
            placeholder="password"
            aria-label="password"
            aria-describedby="basic-addon2"
        />
    </InputGroup>
    </>
}
export default LoginForm;