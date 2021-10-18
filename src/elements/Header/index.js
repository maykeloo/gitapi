import React from 'react'
import { HeaderCont, Logo, Moon, Sun, Icon, ThemeSwitchTab, ThemeSwitchText } from './HeaderElements'


const Header = ({background, switcher}) => {
    return (
        <>
         <HeaderCont>
             <Logo background = {background}>gitfinder</Logo>
             <ThemeSwitchTab onClick = {switcher}>
                
                <Icon>
                <ThemeSwitchText background = {background}>{background ? "DARK" : 'LIGHT'}</ThemeSwitchText>
                {background ? <Moon background = {background}/> : <Sun background = {background}/>}
                </Icon>
             </ThemeSwitchTab>
         </HeaderCont>
        </>
    )
}

export default Header
