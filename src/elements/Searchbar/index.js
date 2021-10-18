import React from 'react'
import { LookFOrButton, LookingFor, SearchBar, SearchIcon, SearchIconMobile, SearchInput, SearchText } from './SearchElements'

const Searchbar = ({background}) => {
    return (
        <>
            <SearchBar background = {background}>
                <LookingFor>
                    <SearchIcon background = {background}/>
                    <SearchInput background = {background}/>
                </LookingFor> 
                <LookFOrButton background = {background}>
                    <SearchText>Search</SearchText><SearchIconMobile background = {background}/>
                </LookFOrButton>
            </SearchBar>
        </>
    )
}

export default Searchbar
