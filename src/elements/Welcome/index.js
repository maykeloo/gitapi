import React from 'react'
import { WelcomeText } from '../HomeElements'
import { LookFOrButton, LookingFor, SearchBar, SearchIcon, SearchIconMobile, SearchInput, SearchText, SeachbarContent } from './WelcomeSearchElements'

const WelcomeSearch = ({background, search, input}) => {
    return (
        <>
        <SeachbarContent>
            <WelcomeText/>
            <SearchBar background = {background}>
                <LookingFor>
                    <SearchIcon background = {background}/>
                    <SearchInput background = {background} onChange = {input}/>
                </LookingFor> 
                <LookFOrButton background = {background} onClick = {search}>
                    <SearchText>Search</SearchText><SearchIconMobile background = {background}/>
                </LookFOrButton>
            </SearchBar>
        </SeachbarContent>
        </>
    )
}

export default WelcomeSearch
