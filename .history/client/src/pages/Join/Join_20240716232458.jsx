import React from 'react'
import Header from '../../components/Header/Header'
import JoinForm from './JoinForm'
import * as auth from '../../apis/auth'
import { useNavigate } from 'react-router-dom'
import * as Swal from '../../apis/alert';
import { Container } from 'react-bootstrap'

const Join = () => {

  const navigate = useNavigate()

  // 회원가입 요청
  const join = async ( form ) => {
    
    console.log(form);

    let response
    let data
    try {
      response = await auth.join(form)
    } catch (error) {
      console.error(`${error}`);
      console.error(`회원가입 요청 중 에러가 발생하였습니다.`);
      return
    }

    data = response.data
    const status = response.status
    console.log(`data : ${data}`);
    console.log(`status : ${status}`);

    if( status === 200 ) {
      console.log(`회원가입 성공!`);
      Swal.alert("회원가입 성공", "로그인 화면으로 이동합니다.", "success", () => { navigate("/login") })
      // alert(`회원가입 성공!`)
      // navigate("/login")
    }
    else {
      console.log(`회원가입 실패!`);
      // alert(`회원가입에 실패하였습니다.`)
      Swal.alert("회원가입 실패", "회원가입에 실패하였습니다.", "error" )
    }

  }
  const moveToMenu = (menu)=>{
    if(menu == 'home'){
        navigate('/');
    }else if(menu == 'login'){
        navigate('/login');
    }
}

  return (
    <>
        {/* <Header />
        <div className="container">
            
        </div> */}
        {/* <Header /> */}
        <Container className="backgroundStyle">
          {/* 네비게이션 */}
          <section id='navSection'>
                <nav id='navigation'>
                    {/* <div className='naviagtion_item' onClick={()=>{moveToMenu("home")}}>HOME</div> */}
                    <div className='naviagtion_item' onClick={()=>{moveToMenu("home")}}>HOME</div>
                    <div className='naviagtion_item'>INFO</div>
                    <div className='naviagtion_item'>BLOG</div>
                    <div className='naviagtion_item'>ETC</div>
                    <div className='naviagtion_item' onClick={()=>{moveToMenu("login")}}>LOGIN</div>
                </nav>
            </section>
            {/* 메인 */}
            <section id='login_bodySection' style={{marginTop:"50px"}}>
              {/* <JoinForm join={ join } /> */}
              <div className="form">
                <h2 className="login-title" style={{fontSize:"32px"}}>WELCOME TO EVUELA</h2>

                <form className='login-form' onSubmit={ (e) => onJoin(e) }>
                    <div>
                        <label htmlFor="name">ID</label>
                        <input type="text"
                                id='username'
                                placeholder='username'
                                name='username'
                                autoComplete='username'
                                required
                        />
                    </div>

                    <div>
                        <label htmlFor="password">password</label>
                        <input type="password"
                                id='passowrd'
                                placeholder='password'
                                name='password'
                                autoComplete='password'
                                required
                        />
                    </div>

                    <div>
                        <label htmlFor="name">Name</label>
                        <input type="text"
                                id='name'
                                placeholder='name'
                                name='name'
                                autoComplete='name'
                                required
                        />
                    </div>

                    <div>
                        <label htmlFor="name">Email</label>
                        <input type="text"
                                id='email'
                                placeholder='email'
                                name='email'
                                autoComplete='email'
                                required
                        />
                    </div>

                    <button type='submit' className='btn btn--form btn-login'>
                        Join                
                    </button>
                </form>
            </div>
            </section>
          
        </Container>
    </>
  )
}

export default Join