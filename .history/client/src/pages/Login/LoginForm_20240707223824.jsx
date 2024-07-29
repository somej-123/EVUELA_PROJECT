import React, { useContext } from 'react'
import { LoginContext } from '../../contexts/LoginContextProvider'
// bootstrap
import Form from 'react-bootstrap/Form';

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
      <FloatingLabel
        controlId="floatingInput"
        label="Email address"
        className="mb-3"
      >
        <Form.Control type="email" placeholder="name@example.com" />
      </FloatingLabel>
      <FloatingLabel controlId="floatingPassword" label="Password">
        <Form.Control type="password" placeholder="Password" />
      </FloatingLabel>

                <button type='submit' className='btn btn--form btn-login'>
                    Login                    
                </button>
            </form>
        </div>
    )
}

export default LoginForm