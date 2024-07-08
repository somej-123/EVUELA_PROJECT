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
      Swal.alert("회원가입 성공", "메인 화면으로 이동합니다.", "success", () => { navigate("/login") })
      // alert(`회원가입 성공!`)
      // navigate("/login")
    }
    else {
      console.log(`회원가입 실패!`);
      // alert(`회원가입에 실패하였습니다.`)
      Swal.alert("회원가입 실패", "회원가입에 실패하였습니다.", "error" )
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
                    <div className='naviagtion_item'>INFO</div>
                    <div className='naviagtion_item'>BLOG</div>
                    <div className='naviagtion_item'>ETC</div>
                </nav>
            </section>
            {/* 메인 */}
            <section id='login_bodySection'>
              <JoinForm join={ join } />
            </section>
          
        </Container>
    </>
  )
}

export default Join