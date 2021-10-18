import styled, {keyframes} from "styled-components";
import {AiFillGithub} from 'react-icons/ai'

const rotate = keyframes`   
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }` 




export const App = styled.div`
    width: 100vw;
    height: 100vh;
    transition: 0.3s;
    background-color: ${props => props.background ? '#D2D3B9' : '#220043'};
    display: flex;
    justify-content: center;
    align-items: center;
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
    border-radius: 30px;

    @media screen and (max-width: 1300px) 
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