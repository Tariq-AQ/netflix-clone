import styled from 'styled-components/macro'
import {Link as ReacRouterLink} from 'react-router-dom'

export const Background = styled.div`
display: flex;
flex-direction: column;
background: url(${({src})=>
src ? '../images/misc/${src}.jpg': '../images/misc/home-bg.jpg'})
top left / cover no-repeat;
`
export const Container = styled.div`
display: flex;
margin: 0 56px;
height: 64px;
padding: 18px 0;
justify-content: space-between;
align-items: center;

a{
    display: flex;

}

@media(max-width: 1000px){
    margin: 0 30px;
}
`
export const Frame = styled.div`
`
export const Logo = styled.img`
width: 80px;
height: 35px;
margin-right: 40px;

@media(min-height: 1449px){
    height: 45px;
    width: 167px;
}

`
export const ButtonLink = styled(ReacRouterLink)`
display: block;
background-color: #e50914;
width: 84px;
height: fit-content;
color: white;
broder: 0;
font-size: 15px;
border-radius: 3px;
padding: 8px 17px;
cursor: pointer;
text-decoration: none;
box-sizing: border-box;

@media(min-width:600px){
    margin-right: 50px;
}

&:hover{
    background-color: #f40612;
}
`