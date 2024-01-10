import React from 'react'
import styled from 'styled-components'

const LD = styled.img`
  max-height: 80%;
  max-width: 90%;
  position: center;
  cursor: pointer;
  object-fit: cover;

  // background: black;
  

`

const Container = styled.div`
  max-height: 80%;
  width: 100%;
  // background: black;
  display:flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const Desc = styled.p`
  padding: 5px;
  font-weight: 100;
  font-size: 0.8em;
  color: gray;
`

const Button = styled.a`
  margin-top: 30px;
  background: #da4ea2;
  text-align: center;
  padding: 10px;
  border-radius: 5px;
  width: 50%;

  @media screen and (max-width: 770px){
    display:none
  }
`

const Code = () => {
  window.open("https://thalysonpin.github.io/GamerProf/", "_blank")
}

export const PerfilGamer = () => {
  return (
    <Container>
      <LD src="./img/gamerProfile.png" onClick={()=> Code()}/>
      <Desc>clique acima para ver o projeto funcionando</Desc>
      <Button href="https://github.com/ThalysonPin/GamerProf" target='_blank'>Código do projeto</Button>
    </Container>
  )
}
