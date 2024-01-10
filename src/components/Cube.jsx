import { OrbitControls, PerspectiveCamera, RenderTexture, Text } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import React, { useRef } from 'react'
import styled from 'styled-components'
import { TextureLoader } from 'three'

const Container = styled.div`
    height: 100%;
    width: 100%;
    // scroll-snap-align: center;
`



export const Cube = () => {
    const mesh = useRef();
  
    const texture = new TextureLoader().load('../img/react-logo2.png');
  return (
    <Container>
        <Canvas>
            {/* CONTROLE 3D */}
            <mesh ref={mesh}>
                <OrbitControls enableZoom={false} autoRotate/>
                <ambientLight intensity={1}/>
                <directionalLight position={[3,2,1]}/>
                <boxGeometry args={[2, 2, 2]} />
                <meshStandardMaterial map={texture} />
            </mesh>
        </Canvas>
    </Container>
  )
}
