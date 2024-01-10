

import { Hero } from './components/Hero'
import { Who } from './components/Who'
import { Works } from './components/Works'
import { Contact } from './components/Contact'
import styled from 'styled-components'

const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y proximity;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  color: white;
  background: url("./img/bg.jpeg");
  &::-webkit-scrollbar{
    width: 5px;
  }
  &::-webkit-scrollbar-thumb {
    background: #fff;
    }

`


function App() {

  return (
    <Container>
      <div id="hero">
        <Hero/>
      </div>

      <div id="who">
        <Who/>
      </div>

      <div id="works">
        <Works />
      </div>

      <div id="contact">
        <Contact/>
      </div>

    </Container>
  )
}

export default App
