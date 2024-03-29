import styled from 'styled-components/macro'

export const Container = styled.div`
display: flex;
flex-direction: column;
border-bottom: 8px solid solid #222;
text-align: center;
padding: 165px 45px;

`

export const Title = styled.h1`
color: white;
max-width:640px;
font-size: 40px;
font-weight: 500;
margin: auto;

@media(max-width: 600px){
    font-size: 20px;
}
`

export const SubTitle = styled.h2`
color: white;
max-width: 640px;
font-size: 20px;
font-weight: normal;
margin: 16px auto;

@media(max-width: 600px){
    font-size: 12px;

}
`