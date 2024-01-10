import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { LandingPage } from './LandingPage'
import { PerfilGamer } from './PerfilGamer'
import { Development } from './Development'
import { Chat } from './Chat'

const data = [
  "Landing Page",
  "Perfil Gamer",
  "Chat Online",

]

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  // background: black;
  display: flex;
  justify-content: center;

 

`
const Container = styled.div`
  width: 80%;
  // background: red;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 768px){
    width:100%;
    flex-direction: column;

  }

`
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media only screen and (max-width: 768px){
    text-align: center;
  }
`

const ListItem = styled.li`
  font-size: 58px;
  cursor: pointer;
  font-weight: bold;
  color: transparent;
  -webkit-text-stroke: 1px white;

  @media only screen and (max-width: 768px){
    font-size: 30px;
    color:white;
    -webkit-text-stroke: 0px;

  }

  &:hover{
    color: pink;
    transition: 0.5s;
  }
`

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content:center;
  flex-direction: column;
  // background: red;
  @media screen and (max-height: 570px){
    height: 80%
  }
`

const WorkTitle = styled.h1`
  color: #da4ea2;
  text-transform: uppercase;
  text-shadow: 1px 1px 1px white;
`

export const Works = () => {
  const [work, setWork] = useState("Landing Page")


  return (
    <Section>
      <Container>
        <Left>
          <List>
            {data.map((item) => (
              <ListItem key={item}  onClick={() => setWork(item)}>{item}</ListItem>
            ))}
            
            
            
          </List>
        </Left>

        <Right>
            <WorkTitle>{work}</WorkTitle>
              { work === "Perfil Gamer" ? <PerfilGamer/> 
              : work === "Landing Page" ? <LandingPage/> 
              : work === "Chat Online" ? <Chat/>
              : ""
            }

        </Right>
      </Container>
    </Section>
  )
}
