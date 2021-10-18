import styled from "styled-components";
import {FaSearch} from 'react-icons/fa'

export const SearchBar = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 10%;
    transition: 0.3s;
    background-color: ${props => props.background ? 'white' : '#2F0176'};
    margin-bottom: 20px;
    border-radius: 30px;
    align-items: center;
`

export const LookingFor = styled.div`
    width: 80%;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-left: 30px;
`

//DO ZROBIENIA

export const LookFOrButton = styled.button`
    height: 90%;
    width: 15%; 
    border-radius: 25px;
    margin-right: 5px;
    transition: 0.3s;
    background-color: ${props => props.background ? 'black' : 'white'};
    border: 0;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 3px solid transparent;
    color: ${props => props.background ? 'white' : 'black'};

    &:hover {
        border: 3px solid ${props => props.background ?  'black' : 'white'};
        background-color: ${props => props.background ? 'white' : 'black'};
        color: ${props => props.background ? '#220043' : 'white'}
    }


    @media screen and (max-width: 1500px) {
        font-size: 20px;
    }

    @media screen and (max-width: 1300px) {
        font-size: 18px;
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

    @media screen and (max-width: 920px) {
    display: block;
    font-size: 20px;
    color: ${props => props.background ? 'white' : 'black'};
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

    
    @media screen and (max-width: 920px) {
        font-size: 13px;
        margin-left: -10px;
    }
`
