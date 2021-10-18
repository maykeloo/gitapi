import styled from "styled-components";
import {BiSun} from 'react-icons/bi'
import {FiMoon} from 'react-icons/fi'

export const HeaderCont = styled.header`
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 10%;
`

export const Logo = styled.span`
    font-family: "Noto Sans Mono", sans-serif;
    font-size: 2.3em;
    color: ${props => props.background ? 'black' : 'white'};
    font-weight: bold;

    @media screen and (max-width: 920px) {
        font-size: 1.7em;
    }
`

export const ThemeSwitchTab = styled.button`
    width: 10%;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    background-color: transparent;
    border: 0;
    cursor: pointer;
    
`

export const ThemeSwitchText = styled.span`
    font-family: "Noto Sans Mono", sans-serif;
    font-weight: bold;
    letter-spacing: 2px;
    color: ${props => props.background ? 'black' : 'white'};

    @media screen and (max-width: 920px) 
    { 
        display: none;
    }
`

export const Icon = styled.div`
    display: flex;
    align-items: center;
    transition: 0.2s;

    &:hover {
        transform: scale(1.1);
    }
`

export const Sun = styled(BiSun)`
    font-size: 20px;
    color: ${props => props.background ? 'black' : 'white'}
`
export const Moon = styled(FiMoon)`
    font-size: 20px;
    color: ${props => props.background ? 'black' : 'white'}     
`

