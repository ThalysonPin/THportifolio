import { MeshDistortMaterial, OrbitControls, Sphere } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import { SphereGeometry } from 'three'

export const Hero3D = () => {
  return (
    <Canvas>
        <OrbitControls enableZoom={false}/>
        <ambientLight intensity={1} />
        <directionalLight position={[3,2,1]} />
        <Sphere args={[1,100,200]} scale={2.2}>
            <MeshDistortMaterial 
            color="#da4ea2"
            attach="material"
            distort={0.5}
            speed={1}
            />
        </Sphere>
    </Canvas>
  )
}
