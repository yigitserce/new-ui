import React, {forwardRef} from "react";
import { useGLTF } from '@react-three/drei'

const Rocket = forwardRef((props,forBox) =>{
    const { nodes, materials } = useGLTF('/scene.gltf')
    return (
        <group {...props} dispose={null} ref={forBox}>
            <mesh geometry={nodes.Object_2.geometry} scale={0.01} material={materials['Scene_-_Root']}  rotation={[-Math.PI / 2, 0, 0]}/>
        </group>
    )
});

export default Rocket;