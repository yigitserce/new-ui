import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import FireAnim from "../FireAnim";

export default function RoketModel(props) {
  const { nodes, materials } = useGLTF('roket/roketdenemesi3.gltf')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder001.geometry}
        material={materials.Material}
        position={[0, 2.5, 0]}
        scale={[0.0634, 1.4928, 0.0634]}
      />
        <FireAnim
          scale={0.4}
          position={[1.8, 0, 1.8]}
          rotation={[Math.PI / 2, Math.PI / 2, Math.PI / 2]}
        />
    </group>
  )
}

useGLTF.preload('roket/roketdenemesi3.gltf')

