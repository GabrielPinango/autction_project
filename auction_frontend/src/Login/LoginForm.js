import React, { useState } from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { fetchData } from '../Functions/fetchData';

const LoginForm = ({handleClose}) => {
    const [user, setUser] = useState({username: '',password: ''});
    const [isError, setIsError] = useState();

    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value

        setUser({...user, [name]: value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!user.username && !user.password) {
            return;
        }
        userLogin(user);
    };

    const userLogin = async(data) => {
        let fetchedData = fetchData(`http://127.0.0.1:8000/api/user/login`, {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: { 'Content-Type': 'application/json' },
            redirect: 'follow',
            referrerPolicy: 'no-referrer',
            body: JSON.stringify(data)
        });
        fetchedData.then((user) => {
            if(null === user || user.length < 1) {
                setIsError(true);
                return;
            }
            sessionStorage.setItem('user', JSON.stringify(user));
            window.location = "/products";
        })
        .catch((error) => setIsError(true))
    }

    return <>
    <Modal.Body>
        <text>{isError ? 'An error has ocurred, check your credentials.' : ''}</text>
        <form>
            <InputGroup className="mb-3">
                <FormControl
                    placeholder="username"
                    aria-label="username"
                    name="username"
                    aria-describedby="basic-addon2"
                    value={user.username}
                    onChange={handleChange}                
                />
            </InputGroup>
            <InputGroup className="mb-3">
                <FormControl
                    placeholder="password"
                    aria-label="password"
                    name="password"
                    type="password"
                    aria-describedby="basic-addon2"
                    value={user.password}
                    onChange={handleChange}
                />
            </InputGroup>
        </form>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Cancel
            </Button>
            <Button variant="primary" onClick={handleSubmit}>
                Login
            </Button>
        </Modal.Footer>
    </>
}
export default LoginForm;