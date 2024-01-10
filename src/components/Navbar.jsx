import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-scroll';


const Section = styled.div`
    display: flex;
    justify-content: center;

    @media only screen and (max-width: 768px){
        width: 100%;
    }
`

const Container = styled.div`
    width: 80%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0;

    @media only screen and (max-width: 768px){
        width: 100%;
        padding: 10px;
    }
`

const Links = styled.div`
    display: flex;
    gap: 50px;
    align-items: center;

`

const Icons = styled.div`
    display: flex;
    gap: 20px;
    align-items: center;
    
`

const Logo = styled.div`
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`

const Thalyson = styled.span`
    font-size: 2.2rem;
    font-style: italic;
    font-weight: 700;
`

const Dev = styled.span`
    font-size: 1.0rem
    font-weight: 100;

`

const List = styled.ul`
    display: flex;
    gap: 20px;
    list-style: none;

    @media only screen and (max-width: 768px){
        display: none;
    }

`
const ListItem = styled.a`
    cursor: pointer;
`
const Icon = styled.img`
    width: 20px;
    cursor: pointer;
`
const Button = styled.a`
    text-align: center;
    width: 120px;
    padding: 10px;
    background: #da4ea2;
    outline: none;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
`

export const Navbar = () => {

  return (
    <Section>
        <Container>
            <Links>
                <Logo>
                    <Thalyson>Thalyson</Thalyson>
                    <Dev>DEV</Dev>
                    
                </Logo>
                <List>
                    <ListItem href="#">Inicio</ListItem>
                    <ListItem href="#who">Sobre mim</ListItem>
                    <ListItem href="#works">Projetos</ListItem>
                </List>
            </Links>
            <Icons>
                <Button href='#contact'>Fale Comigo</Button>
            </Icons>
        </Container>
    </Section>
  )
}
