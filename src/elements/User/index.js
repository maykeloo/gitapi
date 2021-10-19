import React from 'react'
import ExtraInfos from './ExtraInfos'
import Statistics from './Statistics'
import { AvatarSide, UserContent, Image, UserInformations, GeneralUserInformations, UserName, UserLink, GeneralLeft, JoinTime, BioCont, Bio, StatisticsBar, StatisticsBarContent, Time, ExtraInfo, Information} from './UserElements'

const User = ({imageSource, background, loc, twit, comp, link, username, login, joinTime, bio, repo, follows, following, infolink, infoloc, infotwit, infocomp}) => {
    return (
        <>
            <UserContent>
                <AvatarSide>
                    <Image source = {imageSource} background = {background}/>
                </AvatarSide>
                <UserInformations>
                    <GeneralUserInformations>
                        <GeneralLeft>
                        <UserName background = {background}>
                            {username ? username : login}
                        </UserName>
                        <UserLink href = {"https://github.com/" + login }>{`@${login}`}</UserLink>
                        </GeneralLeft>
                        <Time>
                        <JoinTime>Joined {joinTime}</JoinTime>
                        </Time>
                    </GeneralUserInformations>
                    <BioCont>
                        {bio ? <Bio>{bio}</Bio> : <Bio>This profile has no bio.</Bio>}
                    </BioCont>
                    <StatisticsBar>
                        <StatisticsBarContent background = {background}>
                            
                            <Statistics repo = {repo} follows = {follows} following = {following} />

                        </StatisticsBarContent>
                    </StatisticsBar>
                    <ExtraInfos 
                    loc = {loc}
                    twit = {twit}
                    comp = {comp}
                    link = {link}
                    background = {background}
                    infoloc = {infoloc}
                    infocomp = {infocomp}
                    infotwit = {infotwit}
                    intolink = {infolink}/>
                </UserInformations>
            </UserContent>
        </>
    )
}

export default User
