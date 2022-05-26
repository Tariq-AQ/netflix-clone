import React from 'react'
import { Inner, Container, Title, SubTitle, Image, Pane, Item } from './styles/Jumbotron'


export default function Jumbotron({children, direction = 'row', ...resProps}) {
  return (
      <Item  {...resProps}>
      <Inner  direction={direction}>
          {children}
      </Inner>
      </Item>
  )
}

Jumbotron.Container = function jumbotronContainer({children, ...restProps}){
    return <Container {...restProps}>{children}</Container>
}
Jumbotron.Pane = function jumbotronPane({children, ...restProps}){
    return <Pane {...restProps}>{children}</Pane>
}
Jumbotron.Title = function jumbotronTitle({children, ...restProps}){
    return <Title {...restProps}>{children}</Title>
}
Jumbotron.SubTitle = function jumbotronSubTitle({children, ...restProps}){
    return <SubTitle {...restProps}>{children}</SubTitle>
}
Jumbotron.Item = function jumbotronItem({children, ...restProps}){
    return <Item {...restProps}>{children}</Item>
}
Jumbotron.Image = function jumbotronImage({...restProps}){
    return <Image {...restProps}/>
}