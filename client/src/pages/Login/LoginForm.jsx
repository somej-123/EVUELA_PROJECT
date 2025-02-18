import React, { useContext } from 'react'
import { LoginContext } from '../../contexts/LoginContextProvider'
import { useNavigate } from 'react-router-dom'

const LoginForm = () => {

    const navigate = useNavigate();

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
                <div>
                    <label htmlFor="name" style={{color:"#ffffff"}}>ID</label>
                    <input type="text" id='username' placeholder='username' name='username' autoComplete='username' required />
                </div>

                <div>
                    <label htmlFor="password" style={{color:"#ffffff"}}>PASSWORD</label>
                    <input type="password" id='passowrd' placeholder='password' name='password' autoComplete='password' required
                    />
                </div>

                <button type='submit' className='btn btn--form btn-login'>
                    LOGIN                    
                </button>
                <button type='button' onClick={()=>{navigate('/join')}} className='btn btn--form btn-login secondBtn'>
                    SIGN UP                    
                </button>
            </form>
        </div>
    )
}

export default LoginForm