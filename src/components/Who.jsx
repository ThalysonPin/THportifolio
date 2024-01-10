
import styled from 'styled-components'
import { Cube } from './Cube'

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

`

const Container = styled.div`
  scroll-snap-align: center;
  margin: 0 auto;
  height: 100%;
  width: 80%;
  // background: red;
  display: flex;
  justify-content: space-between;

`

const Left = styled.div`
  // background: yellow;
  flex: 1;

  @media only screen and (max-width: 768px){
    display:none;
 
`

const Title = styled.h1`
  font-size: 74px;

  @media only screen and (max-width: 768px){
    font-size: 3em;
    font-size: 44px;

}
`
const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`
const Line = styled.img`
  height: 5px;
`
const Subtitle = styled.h2`
  color: pink;
`

const Desc = styled.p`
  font-size: 24px;
  color: lightgray;

  @media screen and (max-width: 768px){
    font-size: 18px;
  }
`
const Button = styled.a`
  background-color: #da4ea2;
  color: #fff;
  text-align: center;
  width: 11rem;
  padding: 10px;
  border: none;
  cursor:pointer;
  border-radius: 5px;
  font-weight: 500;
`

const Right = styled.div`
  // background: white;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  @media only screen and (max-width: 768px){
    align-items:center;
    text-align:center;
}
`

export const Who = () => {
  return (
    <Section id="who">
        <Container>
          <Left>
             {/* 3D model  */}
              <Cube/>
          </Left>

          <Right>
            <Title>Pensando fora da caixa</Title>
            <WhatWeDo>
              <Line src="../img/line.png"/>
              <Subtitle>Quem sou eu</Subtitle>
            </WhatWeDo>
            <Desc>Desde 2018 me aventuro no mundo digital com negócios próprios, freelances e muito mais. Nessa aventura tive a oportunidade de trabalhar com E-commerce, Social Media, Gestão de tráfego, Desenvolvemento Web, Web Design e Chatbots.</Desc>
            <Button href="#works">Veja Alguns Projetos</Button>
          </Right>
        </Container>
    </Section>
  )
}
