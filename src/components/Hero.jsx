import React from 'react'
import styled from 'styled-components'
import { Navbar } from './Navbar'
import { Hero3D } from './Hero3D'

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  // align-items: center;

  @media only screen and (max-width: 768px){
    height: 200vh;
}
`

const Container = styled.div`
  margin: 0 auto;
  height: 100%;
  width: 80%;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 768px){
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
}
`

const Left = styled.div`
  // background: yellow;
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  @media only screen and (max-width: 768px){
    flex: 1;
    align-items: center;
}
`

const Title = styled.h1`
  font-size: 68px;

  @media only screen and (max-width: 768px){
    text-align: center;
    font-size: 32px;

  }

  // @media screen and (max-height: 610px){
  //   font-size: 52px;
  //   text-align: center;
  // }

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

  @media screen and (max-height: 610px){
    display: none;
  }
`

const Desc = styled.p`
  font-size: 24px;
  color: lightgray;

  
  @media only screen and (max-width: 768px){
    padding: 20px;
    text-align: center;
    font-size: 18px;

  }

`
const Button = styled.a`
  background-color: #da4ea2;
  color: #fff;
  width: 110px;
  text-align: center;
  padding: 10px;
  border: none;
  cursor:pointer;
  border-radius: 5px;
  font-weight: 500;
`



const Right = styled.div`
  // background: white;
  flex: 3;
  position: relative;

  @media only screen and (max-width: 768px){
    flex: 1;
    width: 100%;
}
`
const Img = styled.img`
  height: 80vh;
  width: 500px;
  object-fit: contain;
  position: absolute;
  top:0;
  right:0;
  left:0;
  bottom:0;
  margin: auto;
  animation: animate 2s infinite ease alternate;
  // user-select: none;
  // pointer-events: none;

  @media only screen and (max-width: 768px){
    flex: 1;
    width: 300px;
  } 

  @keyframes animate {
    100%{
      transform: translateY(20px);
    }
  }
`




export const Hero = () => {
  return (
    <Section id="hero">
        <Navbar/>
        <Container>
          <Left>
            <Title>Fullstack, Design & Marketing</Title>
            <WhatWeDo>
              <Line src="./img/line.png"/>
              <Subtitle>Olá Mundo! Eu sou Thalyson</Subtitle>
            </WhatWeDo>
            <Desc>Um programador Fullstack com noções e experiência profissional na área de Design e Marketing Digital.</Desc>
            <Button href="#who">Saiba Mais</Button>
          </Left>

          <Right>
            {/* 3D model  */}
            <Hero3D/>
            <Img src="./img/moon.png"/>
          </Right>
        </Container>
    </Section>
  )
}
