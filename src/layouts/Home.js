import React, {useState, useEffect}  from 'react'
import Header from '../elements/Header'
import {App, Content, ContentDiv, WelcomeScreen} from '../elements/HomeElements'
import Searchbar from '../elements/Searchbar';
import User from '../elements/User';
import WelcomeSearch from '../elements/Welcome';

const Home = () => {

   const [backGround, setBackGround] = useState(false);
   const switchLight = () => {
     setBackGround(!backGround)
   }


   const [welcomeScreen, setWelcomeScreen] = useState(true);

   const searchWelcomeHandler = () => {
     setWelcomeScreen(false)
   }

  //  useEffect(() => {
  //   let timer1 = setTimeout(() => setWelcomeScreen(false), 2000);

  //   return () => {
  //     clearTimeout(timer1);
  //   };
  //  })

   const [user, setUser] = useState('')

   const getAPI = e => {
     e.preventDefault();

     fetch("https://api.github.com/users/" + gotUser )
     .then(result => result.json())
     .then(data => setUser(data));

     searchWelcomeHandler();

   }

   const [gotUser, getUser] = useState('');

   const gettingUser = e => {
     getUser(e.target.value)
   }

   const [time, setTime] = useState('')

   const settingTime = () => {
     let subs = user.created_at;
     let date = new Date(subs).toDateString()
     setTime(date)
   }

   useEffect(() =>{
     settingTime();
   })

 


    return (
        <>
          <App background = {backGround} >
            <WelcomeScreen welcome = {welcomeScreen}>
              <WelcomeSearch background = {backGround} search = {getAPI} input = {gettingUser}/>
            </WelcomeScreen>
            <ContentDiv>
              <Header switcher = {switchLight} background = {backGround}/>
              <Searchbar background = {backGround} search = {getAPI} input = {gettingUser}/>
              <Content background = {backGround}>
                <User 
                imageSource = {user.avatar_url} 
                background = {backGround}
                username = {user.name}
                login = {user.login}
                joinTime = {time}
                bio = {user.bio}
                repo = {user.public_repos}
                follows = {user.followers}
                following = {user.following}
                loc = {user.location}
                twit = {user.twitter_username}
                comp = {user.company}
                link = {user.html_url}/>
              </Content>  
            </ContentDiv>
          </App>  
        </>
    )
}

export default Home
