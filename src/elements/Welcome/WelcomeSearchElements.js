import styled from "styled-components";
import {FaSearch} from 'react-icons/fa'

export const SeachbarContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 30vh;
    width: 40vw;
    justify-content: space-around;
`

export const SearchBar = styled.form`
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 30%;
    transition: 0.3s;
    background-color: #580078;
    border: 3px solid black;
    padding: 5px;
    margin-bottom: 20px;
    align-items: center;
    box-shadow: ${props => props.background ? "8px 8px 24px 0px rgba(142, 142, 142, 1);" : 'none'};


    @media screen and (max-width: 1300px)
    {
        
    }

    @media screen and (max-width: 920px)
    {
        width: 80vw;
        padding: 0;

    }
`

export const LookingFor = styled.div`
    width: 80%;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-left: 30px;

    @media screen and (max-width: 920px)
    {
        width: 100%;
    }
`

export const LookFOrButton = styled.button`
    height: 90%;
    width: 15%; 
    margin: 4.9px;
    transition: 0.3s;
    background-color: black;
    border: 0;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 3px solid transparent;
    color: grey;

    &:hover {
        border: 3px solid black;
        background-color: transparent;
        color: black;
    }


    @media screen and (max-width: 1500px) {
        font-size: 20px;
    }

    @media screen and (max-width: 1300px) {
        font-size: 18px;
        width: 25%;
    }

    @media screen and (max-width: 920px) {
        width: 25%;
    }
`

export const SearchText = styled.span`
    display: block;
    font-size: 25px;
    font-family: "Noto Sans Mono", sans-serif;
    font-weight: bold;
    color: inherit;

        @media screen and (max-width: 1500px) {
        font-size: 20px;
    }

    @media screen and (max-width: 1300px) {
        font-size: 18px;
    }

    @media screen and (max-width: 920px) {
        display: none;
    }
`

export const SearchIcon = styled(FaSearch)`
    font-size: 30px;
    color: ${props => props.background ? 'black' : 'white'};

    @media screen and (max-width: 920px) {
        display: none
    }
`

export const SearchIconMobile = styled(FaSearch)`
    display: none;
    transition: 0.3s;


    &:hover {
        color: ${props => props.background ?  'black' : 'white'}
    }
    
    @media screen and (max-width: 920px) {
    display: block;
    font-size: 20px;
    color: white;;
    }
`

export const SearchInput = styled.input.attrs(() => ({
    type: 'text',
    placeholder: 'Search GitHub username...'
}))`
    margin-left: 50px;
    width: 80%;
    height: 80%;
    background-color: transparent;
    font-size: 25px;
    color: ${props => props.background ? 'black' : 'white'};
    font-family: "Noto Sans Mono", sans-serif;
    font-weight: bold;
    outline: none;
    border: 0;


    
    @media screen and (max-width: 1300px) {
        margin-left: 15px;
    &::placeholder {
        font-size: 16px;
    }

    @media screen and (max-width: 920px) {
        font-size: 13px;
        margin-left: -10px;
        width: 100%;
    }

}
`
