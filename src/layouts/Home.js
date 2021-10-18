import React, {useState, useEffect}  from 'react'
import Header from '../elements/Header'
import {App, Content, ContentDiv, WelcomeScreen, WelcomeText} from '../elements/HomeElements'
import Searchbar from '../elements/Searchbar';
import Aos from 'aos';
import "aos/dist/aos.css";

const Home = () => {

   const [backGround, setBackGround] = useState(false);
   const switchLight = () => {
     setBackGround(!backGround)
   }


   const [welcomeScreen, setWelcomeScreen] = useState(true);

   useEffect(() => {
    let timer1 = setTimeout(() => setWelcomeScreen(false), 2000);

    return () => {
      clearTimeout(timer1);
    };
   })

    return (
        <>
          <App background = {backGround} >
            <WelcomeScreen welcome = {welcomeScreen}>
              <WelcomeText/>
            </WelcomeScreen>
            <ContentDiv>
              <Header switcher = {switchLight} background = {backGround}/>
              <Searchbar background = {backGround}/>
              <Content background = {backGround}>
                
              </Content>  
            </ContentDiv>
          </App>  
        </>
    )
}

export default Home
