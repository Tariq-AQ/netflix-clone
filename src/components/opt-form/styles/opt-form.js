import styled from 'styled-components/macro'

export const Container = styled.div`
display: flex;
align-items: center;
flex-direction: row;
justify-content: space-between;
height: 100%;
width: 100%;
margin-top: 5px;
flex-wrap: wrap;

@media(max-width: 1000px){
    flex-direction: column;
    align-items: center;
}
`

export const Text = styled.p`
font-size: 19.2px;
color: white;
text-align: center;

@media(max-width: 600px){
    font-size: 12px;
    line-height: 22px;
}
`
export const Button = styled.button`

display: flex;
width:30%;
align-items: center;
height: 60px;
background: #e50914;
color: white;
text-transformation: uppercase;
padding: 0 32px;
font-size: 16px;
border: 0;
cursor: pointer;
margin:0;


&:hover{
    background: #f40612;

}

@media(max-width: 1000px){
    height: 60px;
    font-size: 16px;
    margin-top: 20px;
    font-weight: bold;
    
}
@media(max-width: 600px){
    height: 50px;
    font-size: 16px;
    width:70%;
 
    
}


img{
    margin-left: 10px;
    filter: brightness(0) invert(1);
    width: 16px;


}

`

export const Input = styled.input`
 max-width: 70%;
 width: 70%;
 border: 0;
 padding: 10px;
 height: 60px;
 box-sizing: border-box;

 @media(max-width: 600px){
     height: 50px;
 }

`
export const Break = styled.div`
flex-basis: 100%;
height: 0;
`