import styled, {keyframes} from "styled-components";
import {AiFillGithub} from 'react-icons/ai'

const rotate = keyframes`   
  0% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
  }
  100% {
    -webkit-transform: translateY(-30px);
            transform: translateY(-30px);
  }
` 




export const App = styled.div`
    width: 100vw;
    height: 100vh;
    transition: 0.3s;
    background-color: ${props => props.background ? '#ECECEC' : '#220043'};
    display: flex;
    justify-content: center;
    align-items: center;
    overflow-y: hidden;

    @media screen and (max-width: 920px)
    {
        overflow-y: scroll
    }
`

export const WelcomeScreen = styled.div`
    z-index: 100;
    width: 100vw;
    height: 100vh;
    position: absolute;
    transition: 1s;
    top: ${props => props.welcome ? '0' : '-2000px'};
    background-color: #600083;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const WelcomeText = styled(AiFillGithub)`
    font-size: 5em;
    animation: ${rotate} 1s ease-in-out infinite alternate-reverse both;
`

export const ContentDiv = styled.div`
    width: 50vw;
    height: 80vh;
    display: flex;
    align-items: flex-end;
    flex-direction: column;



    @media screen and (max-width: 920px) 
    {
        width: 70vw;
        height: 60vh;
    }

    
    @media screen and (max-width: 1300px) 
    {
        width: 85vw;
        height: 90vh;
    }
`

export const Content = styled.div`
    width: 50vw;
    flex-grow: 1;
    transition: 0.3s;
    background-color: ${props => props.background ? 'white' : '#2F0176'};
    box-shadow: ${props => props.background ? "8px 8px 24px 0px rgba(142, 142, 142, 1)" : 'none'};
    border-radius: 5px;

    @media screen and (max-width: 1300px) 
    {
        width: 70vw;
        height: 60vh;
    }

    
    @media screen and (max-width: 920px) 
    {
        width: 85vw;
        height: 90vh;
    }
`