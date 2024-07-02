import React from 'react'
import Header from '../components/Header/Header'
import LoginContextConsumer from '../contexts/LoginContextConsumer'
import {Container} from 'react-bootstrap'

const Home = () => {

  const backgroundStyle = {
    width:"100vw",
    height:"100vh",
    margin: 0,
    padding: 0,
    backgroundImage: "url('../resource/img/mainBackground.png')", /* 배경 이미지 경로 설정 */
    backgroundSize: "cover", /* 배경 이미지를 화면에 꽉 차게 설정 */
    backgroundPosition: "center", /* 배경 이미지의 위치를 중앙으로 설정 */
    backgroundRepeat: "no-repeat", /* 배경 이미지 반복을 방지 */
    filter: "brightness(50%)" /* 밝기를 50%로 조정 */
  }

  return (
    <>
    <Container style={backgroundStyle}>

    </Container>
        {/* <Header />
        <div className="container">
            <h1>Home</h1>
            <hr />
            <h2>메인 페이지</h2>
            <LoginContextConsumer />
        </div> */}
    </>
  )
}

export default Home