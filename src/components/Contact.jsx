import styled from 'styled-components'
import Map from './Map'
import emailjs from '@emailjs/browser';
import React, { useRef, useState } from 'react'
import { FaWhatsapp, FaLinkedin, FaGithub  } from "react-icons/fa";


const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
`

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
 
  justify-content: space-between;

`

const Left = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  // background: red;
  align-items: center;

  @media only screen and (max-width: 768px){
    justify-content: center;
  }

`

const Title = styled.h1`
  font-weight: 100;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;

`

const Input = styled.input`
  width: 450px;
  border-radius: 5px;
  padding: 12px;
  border: none;

  @media only screen and (max-width: 768px){
    width: 80vw;
  }
`
const TextArea = styled.textarea`
  width: 450px;
  border-radius: 5px;
  padding: 12px;
  border: none;

  @media only screen and (max-width: 768px){
    width: 80vw;

  }
`

const Button = styled.button`
  width: 450px;
  border-radius: 5px;
  padding: 12px;
  border: none;
  color: #fff;
  background: #da4da3;
  cursor: pointer;

  @media only screen and (max-width: 768px){
    width: 80vw;

  }
`

const Social = styled.div`
  display: flex;
  gap: 32px;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  padding-top: 10px; 
`


const Right = styled.div`
  flex: 1;

  @media only screen and (max-width: 768px){
    display:none;
  }
`


export const Contact = () => {
  const ref = useRef()
  const [success, setSuccess] = useState(false)

  const handleSubmit = (e) =>{
    e.preventDefault()
  
    emailjs.sendForm('service_hzxvmcg', 'template_nvjymt6', ref.current, 'DgCNXcmbzBv4u3Jyd')
    .then((result) => {
        console.log(result.text);
        setSuccess(true)
    }, (error) => {
        console.log(error.text);
        setSuccess(false)
  
    });
  }

  return (
    <Section>
      <Container>
        <Left>
          <Form ref={ref} onSubmit={handleSubmit}> 
            <Title>Fale Comigo</Title>
            <Input placeholder='Seu nome' name="name"/>
            <Input placeholder='Email' type="email" name="email"/>

            <TextArea placeholder='Sua mensagem' rows={10} name="message"/>
            <Button type="submit">Enviar</Button>
            {success && 
              "Sua mensagem foi enviada!" 
            }

            <Social>
              <a href="https://api.whatsapp.com/send?phone=5567984732575" target='_blank'> <FaWhatsapp/></a> 
              <a href="https://github.com/ThalysonPin" target='_blank'> <FaGithub/></a> 
              <a href="https://www.linkedin.com/in/thalyson-emanuel-464080242/" target='_blank'> <FaLinkedin/></a> 
            </Social>
          </Form>
        </Left>

        <Right>
          <Map/>
        </Right>
      </Container>
    </Section>
  )
}
