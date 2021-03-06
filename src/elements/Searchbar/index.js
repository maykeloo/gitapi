import React from 'react'
import { LookFOrButton, LookingFor, SearchBar, SearchIcon, SearchIconMobile, SearchInput, SearchText } from './SearchElements'

const Searchbar = ({background, search, input}) => {
    return (
        <>
            <SearchBar background = {background}>
                <LookingFor>
                    <SearchIcon background = {background}/>
                    <SearchInput background = {background} onChange = {input}/>
                </LookingFor> 
                <LookFOrButton background = {background} onClick = {search}>
                    <SearchText>Search</SearchText><SearchIconMobile background = {background}/>
                </LookFOrButton>
            </SearchBar>
        </>
    )
}

export default Searchbar
