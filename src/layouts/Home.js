import React, {useState, useEffect}  from 'react'
import Header from '../elements/Header'
import {App, Content, ContentDiv, WelcomeScreen, WelcomeText} from '../elements/HomeElements'
import Searchbar from '../elements/Searchbar';

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

   const [user, setUser] = useState('')

   const getAPI = e => {
     e.preventDefault();

     fetch("https://api.github.com/users/maykeloo")
     .then(result => result.json())
     .then(data => setUser(data))
   }

    return (
        <>
          <App background = {backGround} >
            <WelcomeScreen welcome = {welcomeScreen}>
              <WelcomeText/>
            </WelcomeScreen>
            <ContentDiv>
              <Header switcher = {switchLight} background = {backGround}/>
              <Searchbar background = {backGround} search = {getAPI}/>
              <Content background = {backGround}>
                
              </Content>  
            </ContentDiv>
          </App>  
        </>
    )
}

export default Home
