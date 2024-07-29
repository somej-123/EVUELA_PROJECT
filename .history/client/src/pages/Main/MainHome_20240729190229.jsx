import {React, useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header';
// import LoginContextConsumer from '../../contexts/LoginContextConsumer';
import { LoginContext } from '../../contexts/LoginContextProvider'


// bootstrap
import {Container} from 'react-bootstrap';

// custom css
import './MainHome.css';

const MainHome = () => {
    
    const { isLogin, login, logout } = useContext(LoginContext);

    const navigate = useNavigate();

    const moveToMenu = (menu)=>{
        if(menu == 'login'){
            navigate('/login');
        }else if(menu == 'logout'){
            logout();
        }
    }

    return (
        <>
            <Container className="backgroundStyle">
                {/* 네비게이션 */}
                <section id='navSection'>
                    <nav id='navigation'>
                        <div className='naviagtion_item'>INFO</div>
                        <div className='naviagtion_item'>BLOG</div>
                        <div className='naviagtion_item'>ETC</div>
                        {isLogin == false ?
                                    (<div className='naviagtion_item' onClick={()=>{moveToMenu("login")}}>LOGIN</div>)
                                    :(<div className='naviagtion_item' onClick={()=>{moveToMenu("logout")}}>LOGOUT</div>)
                        }
                        
                        {/* <div className='naviagtion_item'>ADMIN</div> */}
                    </nav>
                </section>
                {/* 메인 */}
                <section id='bodySection'>
                    <div id='mainTitleDiv'>
                        <h1>EVUELA</h1>
                        <h5>I find peace in the rain</h5>
                        <div id='mainContentsLine'></div>
                        <p id='mainContentsText'>View more info</p>
                    </div>
                </section>
            </Container>
        </>
    )
}

export default MainHome