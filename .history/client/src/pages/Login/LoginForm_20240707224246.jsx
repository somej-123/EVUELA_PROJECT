import React, { useContext } from 'react'
import { LoginContext } from '../../contexts/LoginContextProvider'
// bootstrap
import {Form, FloatingLabel, Button} from 'react-bootstrap';

const LoginForm = () => {

    const { login } = useContext(LoginContext)

    const onLogin = (e) => {
        e.preventDefault()

        const form = e.target
        const username = form.username.value
        const password = form.password.value

        login( username, password )
    }

    return (
        <div className="form">
            <h2 className="login-title">EVUELA</h2>

            <form className='login-form' onSubmit={ (e) => onLogin(e) }>
                {/* <div>
                    <label htmlFor="name">username</label>
                    <input type="text" id='username' placeholder='username' name='username' autoComplete='username' required />
                </div>

                <div>
                    <label htmlFor="password">password</label>
                    <input type="password" id='passowrd' placeholder='password' name='password' autoComplete='password' required
                    />
                </div> */}
                <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                </Form>

                <button type='submit' className='btn btn--form btn-login'>
                    Login                    
                </button>
            </form>
        </div>
    )
}

export default LoginForm