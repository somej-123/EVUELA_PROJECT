import React, { useContext, useEffect } from 'react'
// import Header from '../../components/Header/Header'
import LoginForm from './LoginForm'
import { LoginContext } from '../../contexts/LoginContextProvider'
import { useNavigate } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import LoginCSS from './Login.css'


const Login = () => {

  const {isLogin, logout} = useContext(LoginContext);

  const navigate = useNavigate();

  const moveToMenu = (menu)=>{
      if(menu == 'home'){
          navigate('/');
      }else if(menu == 'logout'){
          logout();
      }
  }

  useEffect(()=>{
    if(isLogin){
      alert("이미 로그인이 되어 있습니다.\n첫 화면으로 돌아갑니다.");
      navigate('/')
    }
  })
  return (
    <>
        {/* <Header /> */}
        <Container className="backgroundStyle">
          {/* 네비게이션 */}
          <section id='navSection'>
                <nav id='navigation'>
                    <div className='naviagtion_item' onClick={()=>{moveToMenu("home")}}>HOME</div>
                    <div className='naviagtion_item'>INFO</div>
                    <div className='naviagtion_item'>BLOG</div>
                    <div className='naviagtion_item'>ETC</div>
                </nav>
            </section>
            {/* 메인 */}
            <section id='login_bodySection'>
              <LoginForm />
            </section>
          
        </Container>
    </>
  )
}

export default Login