import styled from "styled-components";
import { MdLocationOn} from 'react-icons/md'
import {SiTwitter, SiBandsintown} from 'react-icons/si'
import {BiLink} from 'react-icons/bi'


export const UserContent = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    

    @media screen and (max-width: 920px) 
    {
        flex-direction: column;
        align-items: center;
        height: 120vh;
    }
`

export const AvatarSide = styled.div`
    height: 100%;
    width: 30%;
    display: flex;
    justify-content: center;

    @media screen and (max-width: 1400px)
    {
        height: 20%;
        width: 40%;
    }

    @media screen and (max-width: 920px)
    {
        height: 20%;
    }


`

export const Image = styled.img.attrs(props => ({
    src: props.source
}))`
    width: 150px;
    height: 150px;
    margin-top: 20%;
    border-radius: 100px;
    padding: 10px;
    border: 5px solid ${props => props.background ? '#220043' : '#ECECEC'};

    @media screen and (max-width: 920px) 
    {
        width: 60px;
        height: 60px;
        margin: 15%;
    }

    @media screen and (max-width: 1500px) 
    {
        width: 90px;
        height: 90px;
        margin: 15%;
    }
`

export const UserInformations = styled.div`
    display: flex;
    flex-grow: 1;
    height: 100%;
    justify-content: flex-start;
    flex-direction: column;

    @media screen and (max-width: 920px)
    {
        text-align: center;
        width: 100%;
        flex-grow: none;
        align-items: center;
    }
`

export const GeneralUserInformations = styled.header`
    width: 90%;
    height: 30%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media screen and (max-width: 920px)
    {
        flex-direction: column;
        align-items: center;
    }


`

export const UserName = styled.h1`
    margin: 0;
    font-family: "Noto Sans Mono", sans-serif;
    font-weight: 900;
    font-size: 2.5em;
    color: ${props => props.background ? 'black' : 'white'};

    @media screen and (max-width: 1500px) 
    {
        font-size: 1.6em;
    }
`

export const GeneralLeft = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (max-width: 920px)
    {
        align-items: center;
    }
`

export const UserLink = styled.a`
    margin-top: 10px;
    font-family: "Noto Sans Mono", sans-serif;
    font-weight: bold;
    color: orange;
    text-decoration: none;
`

export const Time = styled.div`
    height: 100%;
    width: 20%;
    display: flex;
    align-items: center;

    @media screen and (max-width: 920px)
    {
        justify-content: center;
        width: 80%;
    }
    @media screen and (max-width: 1300px)
    {
        margin-top: 100px;
    }

`

export const JoinTime = styled.span`
    font-family: "Noto Sans Mono", sans-serif;
    color: grey;

    @media screen and (max-width: 920px)
    {
        font-size: 12px;
    }

    @media screen and (max-width: 1300px)
    {
        font-size: 12px;
    }

    @media screen and (max-width: 1500px) 
    {
        font-size: 10px;
    }
`

export const BioCont = styled.div`
    width: 100%;
    height: 10%;
    display: flex;
    justify-content: flex-start;
    
    @media screen and (max-width: 920px)
    {
        margin-top: 20px;
        justify-content: center;
        width: 80%;
    };

    @media screen and (max-width: 1500px) 
    {
        width: 70%;
        font-size: 12px;
    }
`

export const Bio = styled.p`
    font-family: "Noto Sans Mono", sans-serif;
    color: grey;

    @media screen and (max-width: 920px)
    {
        font-size: 12px;
    }
`

export const StatisticsBar = styled.div`
    margin-top: 20px;
    width: 100%;
    height: 30%;
    display: flex;
    

    @media screen and (max-width: 920px)
    {
        justify-content: center;
        
    }
`

export const StatisticsBarContent = styled.div`
    width: 90%;
    height: 90%;
    border-radius: 5px;
    background-color: ${props => props.background ? 'black' : '#220043'};
    display: flex;
    justify-content: space-around;
    align-items: center;

`

export const ReposCont = styled.div`
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 920px)
    {
        align-items: center;
        min-width: 80px;
    }

    @media screen and (max-width: 1500px) 
    {
        align-items: center;
    }
 `
export const RepoTitle = styled.span`
    font-size: 16px;
    color: grey;
    font-family: "Noto Sans Mono", sans-serif;
`
export const RepoNumber = styled.span`
    font-weight: bold;
    color: white;
    font-family:"Noto Sans Mono", sans-serif;
    font-size: 35px;
`





export const FollowsCont = styled.div`
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 920px)
    {
        align-items: center;
        min-width: 80px;
    }

    @media screen and (max-width: 1500px) 
    {
        align-items: center;
    }
 `
export const FollowsTitle = styled.span`
    font-size: 16px;
    color: grey;
    font-family:"Noto Sans Mono", sans-serif;
`
export const FollowsNumber = styled.span`
    font-weight: bold;
    color: white;
    font-family:"Noto Sans Mono", sans-serif;
    font-size: 35px;
`





export const FollowingCont = styled.div`
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 920px)
    {
        align-items: center;
        min-width: 80px;
    }

    @media screen and (max-width: 1500px) 
    {
        align-items: center;
    }
 `
export const FollowingTitle = styled.span`
    font-size: 16px;
    color: grey;
    font-family: "Noto Sans Mono", sans-serif;
`
export const FollowingNumber = styled.span`
    font-weight: bold;
    color: white;
    font-family:"Noto Sans Mono", sans-serif;
    font-size: 35px;
`

export const ExtraInfo = styled.div`
    width: 90%;
    height: 20%;
    display: flex;
    flex-wrap: wrap;

    @media screen and (max-width: 920px)
    {
        margin-top: 100px;
    }

    @media screen and (max-width: 1300px)
    {
        width: 100%;
    }

    @media screen and (max-width: 1500px) 
    {
        width: 100%;
    }
    
`

export const Information = styled.div`
    width: 50%;
    height: 50%;
    color: black;
    display: flex;
    align-items: center;

    @media screen and (max-width: 920px)
    {
        flex-direction: column;
        width: 100%;
    }


    
`

export const InfoText = styled.span`
    color: ${props => props.info ? `${props.background ? 'black' : 'white'}` : 'grey'};
    margin-left: 12px;
    font-family:"Noto Sans Mono", sans-serif;
    font-size: 13px;
    font-weight: bold;

    @media screen and (max-width: 920px)
    {
        margin-top: 5px;
        margin-left: 0;
    }

    @media screen and (max-width: 1500px) 
    {
        font-size: 10px;
        margin-left: 3px;
    }

`
export const IconLoc = styled(MdLocationOn)`
    color: ${props => props.info ? `${props.background ? 'black' : 'white'}` : 'grey'};
    font-size: 23px;
    
`
export const IconTwit = styled(SiTwitter)`
    color: ${props => props.info ? `${props.background ? 'black' : 'white'}` : 'grey'};
    font-size: 23px;
    
`

export const IconCompany = styled(SiBandsintown)`
    color: ${props => props.info ? `${props.background ? 'black' : 'white'}` : 'grey'};
    font-size: 23px;
    
`

export const IconLink = styled(BiLink)`
    color: ${props => props.info ? `${props.background ? 'black' : 'white'}` : 'grey'};
    font-size: 23px;
    
`