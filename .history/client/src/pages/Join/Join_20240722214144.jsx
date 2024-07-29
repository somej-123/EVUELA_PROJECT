import React from 'react'
// import Header from '../../components/Header/Header'
// import JoinForm from './JoinForm'
import * as auth from '../../apis/auth'
import { useNavigate } from 'react-router-dom'
import * as Swal from '../../apis/alert';
import { Container } from 'react-bootstrap'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const Join = () => {

  //페이지 이동 시 사용
  const navigate = useNavigate();

  

  //Submit 진행 시 유효성 검사에 실패했을 때
  const fail = (data)=>{
    //알림으로 알려주기
    alert(data[Object.keys(data)[0]].message);
    //에러가 난 input
    let inputBoxTarget = data[Object.keys(data)[0]].ref;
    //focus맞춰주기
    inputBoxTarget.focus();
}

  // 회원가입 요청
  const join = async ( form ) => {
    //JoinStore 사용
    console.log(form);


    let response
    let data
    try {
      response = await auth.join(form)
      console.log(response);
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

    //유효성 검사 정의
  const checkDataForm = yup.object().shape({
    username: yup.string().required("ID를 입력해주세요").min(5,"ID는 5글자 이상 작성해주세요"),
    password: yup.string().required("비밀번호를 입력해주세요"),
    name : yup.string().required("이름을 입력해주세요"),
    email : yup.string().required("이메일을 입력해주세요").matches(
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i,
      "email 형식에 맞지 않습니다"
    ),
  });

  //   입력 항목의 유효성 검사 실행
  // useForm에 들어있는 것을 객체 분해할당한다.
  // register : input name에 해당한다.
  // handleSubmit : submit했을때 발생되는 이벤트이다.
  // formState는 react-hook-form에서 제공하는 객체로, 폼 상태와 관련된 여러 정보들을 포함하고 있습니다. 주로 폼 필드의 유효성 검사 결과인 errors와 함께 사용됩니다.
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(checkDataForm)
  });

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

                <form className='login-form' onSubmit={handleSubmit(join,fail)}> {/* onSubmit={ (e) => onJoin(e) }*/}
                    <div>
                        <label htmlFor="name">ID</label>
                        <input type="text"
                                id='username'
                                // placeholder='username'
                                // name='username'
                                // autoComplete='username'
                                {...register('userId')}
                        />
                    </div>

                    <div>
                        <label htmlFor="password">password</label>
                        <input type="password"
                                id='passowrd'
                                // placeholder='password'
                                // name='password'
                                // autoComplete='password'
                                {...register('userPw')}
                        />
                    </div>

                    <div>
                        <label htmlFor="name">Name</label>
                        <input type="text"
                                id='name'
                                // placeholder='name'
                                // name='name'
                                // autoComplete='name'
                                {...register('name')}
                        />
                    </div>

                    <div>
                        <label htmlFor="name">Email</label>
                        <input type="text"
                                id='email'
                                // placeholder='email'
                                // name='email'
                                // autoComplete='email'
                                {...register('email')}
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