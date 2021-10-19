import React from 'react'
import { ExtraInfo, Information, InfoText, IconLoc, IconCompany, IconLink, IconTwit } from './UserElements'
const ExtraInfos = ({background, loc, twit, link, comp, info}) => {
    return (
        <>
            
            <ExtraInfo>
                <Information background = {background}>
                    <IconLoc background = {background} info = {loc}/>
                    <InfoText background = {background} info = {loc}>{loc ? loc : 'Not available'}</InfoText>
                </Information>


                <Information background = {background}>
                    <IconTwit background = {background} info = {twit}/>
                    <InfoText background = {background} info = {twit}>{twit ? `@${twit}` : 'Not available'}</InfoText>
                </Information>


                <Information background = {background}>
                    <IconLink info = {link} background = {background}/>
                    <InfoText background = {background} info = {link}>{link ? link : 'Not available'}</InfoText>
                </Information>


                <Information background = {background}>
                    <IconCompany info = {comp} background = {background}/>
                    <InfoText background = {background} info = {comp}>{comp ? comp : 'Not available'}</InfoText>
                </Information>
            </ExtraInfo>
        </>
    )
}

export default ExtraInfos
