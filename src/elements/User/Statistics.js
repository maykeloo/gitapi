import React from 'react'
import { RepoNumber, ReposCont, RepoTitle, FollowingCont, FollowingNumber, FollowingTitle, FollowsCont, FollowsNumber, FollowsTitle } from './UserElements'

const Statistics = ({repo, follows, following}) => {
    return (
        <>
            <ReposCont>
                <RepoTitle>Repo</RepoTitle>
                <RepoNumber>{repo}</RepoNumber>
            </ReposCont>

            <FollowsCont>
                <FollowsTitle>Followers</FollowsTitle>
                <FollowsNumber>{follows}</FollowsNumber>
            </FollowsCont>

            <FollowingCont>
                <FollowingTitle>Following</FollowingTitle>    
                <FollowingNumber>{following}</FollowingNumber>
            </FollowingCont> 
        </>
    )
}

export default Statistics
