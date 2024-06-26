import React, {useContext, useEffect, useRef, useState} from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'


const FireAnim =(props) =>{
    const group = useRef()
    const { nodes, materials, animations } = useGLTF('fire/scene.gltf')
    const { actions,names } = useAnimations(animations, group)
    console.log(names);
    
    useEffect(() => {
      actions[names[0]].play();
    }, [])
    
    return (
        <group ref={group}  dispose={null} {...props} >
            <group name="Sketchfab_Scene">
                <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]} scale={0.4}>
                    <group name="7932a0dac3824e028da37f46ce28fafdfbx" rotation={[Math.PI / 2, 0, 0]}>
                        <group name="Object_2">
                            <group name="RootNode">
                                <group name="flame01">
                                    <mesh name="flame01_phong2_0" geometry={nodes.flame01_phong2_0.geometry} material={materials.phong2} />
                                </group>
                                <group name="flame02">
                                    <mesh name="flame02_phong2_0" geometry={nodes.flame02_phong2_0.geometry} material={materials.phong2} />
                                </group>
                                <group name="flame03">
                                    <mesh name="flame03_phong2_0" geometry={nodes.flame03_phong2_0.geometry} material={materials.phong2} />
                                </group>
                                <group name="flame04">
                                    <mesh name="flame04_phong2_0" geometry={nodes.flame04_phong2_0.geometry} material={materials.phong2} />
                                </group>
                                <group name="flame05">
                                    <mesh name="flame05_phong2_0" geometry={nodes.flame05_phong2_0.geometry} material={materials.phong2} />
                                </group>
                                <group name="flame06">
                                    <mesh name="flame06_phong2_0" geometry={nodes.flame06_phong2_0.geometry} material={materials.phong2} />
                                </group>
                                <group name="flame07" scale={[1, 1, 1.06]}>
                                    <mesh name="flame07_phong2_0" geometry={nodes.flame07_phong2_0.geometry} material={materials.phong2} />
                                </group>
                                <group name="flame08" scale={[1, 1, 1.12]}>
                                    <mesh name="flame08_phong2_0" geometry={nodes.flame08_phong2_0.geometry} material={materials.phong2} />
                                </group>
                                <group name="flame09" scale={[1, 1, 1.14]}>
                                    <mesh name="flame09_phong2_0" geometry={nodes.flame09_phong2_0.geometry} material={materials.phong2} />
                                </group>
                                <group name="flame10">
                                    <mesh name="flame10_phong2_0" geometry={nodes.flame10_phong2_0.geometry} material={materials.phong2} />
                                </group>
                                <group name="flame11">
                                    <mesh name="flame11_phong2_0" geometry={nodes.flame11_phong2_0.geometry} material={materials.phong2} />
                                </group>
                                <group name="flame12">
                                    <mesh name="flame12_phong2_0" geometry={nodes.flame12_phong2_0.geometry} material={materials.phong2} />
                                </group>
                                <group name="flame13">
                                    <mesh name="flame13_phong2_0" geometry={nodes.flame13_phong2_0.geometry} material={materials.phong2} />
                                </group>
                                <group name="flame14">
                                    <mesh name="flame14_phong2_0" geometry={nodes.flame14_phong2_0.geometry} material={materials.phong2} />
                                </group>
                                <group name="flame16">
                                    <mesh name="flame16_phong2_0" geometry={nodes.flame16_phong2_0.geometry} material={materials.phong2} />
                                </group>
                                <group name="flame15">
                                    <mesh name="flame15_phong2_0" geometry={nodes.flame15_phong2_0.geometry} material={materials.phong2} />
                                </group>
                                <group name="flame17">
                                    <mesh name="flame17_phong2_0" geometry={nodes.flame17_phong2_0.geometry} material={materials.phong2} />
                                </group>
                            </group>
                        </group>
                    </group>
                </group>
            </group>
        </group>
    )
}

export default FireAnim;