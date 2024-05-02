import {Box,Cylinder,} from "@react-three/drei";
import FireAnim from "../FireAnim";

const RainbowBox = (props) => {
    const { engine1, engine2, engine3, engine4 } = props;
    
    return (
      <group {...props} >
        <Box position={[0, 2, 0]} args={[2, 2, 2]} castShadow>
          <meshBasicMaterial color={"orange"}/>
          {/**-----legs----- */}
          <Cylinder args={[0.05, 0.15, 1, 30]} position={[-0.85, -1, 0.85]}>
            <meshStandardMaterial attach="material" color={"black"} />
          </Cylinder>
  
          <Cylinder args={[0.05, 0.15, 1, 30]} position={[-0.85, -1, -0.85]}>
            <meshStandardMaterial attach="material" color={"black"} />
          </Cylinder>
       
          <Cylinder args={[0.05, 0.15, 1, 30]} position={[0.85, -1, 0.85]}>
            <meshStandardMaterial attach="material" color={"black"} />
          </Cylinder>
       
          <Cylinder args={[0.05, 0.15, 1, 30]} position={[0.85, -1, -0.85]}>
            <meshStandardMaterial attach="material" color={"black"} />
          </Cylinder>
  
          {/**-----legs-----finish--- */}
          {/**-----Arms----- */}
          <Cylinder
            args={[0.15, 0.15, 1.3, 30]}
            position={[1.4, 0, 1.4]}
            rotation={[0, -Math.PI / 4, Math.PI / 2]}
          >
            <meshStandardMaterial attach="material" color={"blue"} />
          </Cylinder>
  
          <Cylinder
            args={[0.15, 0.15, 1.3, 30]}
            position={[1.4, 0, -1.4]}
            rotation={[0, Math.PI / 4, Math.PI / 2]}
          >
            <meshStandardMaterial attach="material" color={"blue"} />
          </Cylinder>
  
          <Cylinder
            args={[0.15, 0.15, 1.3, 30]}
            position={[-1.4, 0, 1.4]}
            rotation={[0, Math.PI / 4, Math.PI / 2]}
          >
            <meshStandardMaterial attach="material" color={"blue"} />
          </Cylinder>
  
          <Cylinder
            args={[0.15, 0.15, 1.3, 30]}
            position={[-1.4, 0, -1.4]}
            rotation={[0, -Math.PI / 4, Math.PI / 2]}
          >
            <meshStandardMaterial attach="material" color={"blue"} />
          </Cylinder>
          {/**-----Arms---finish-- */}
  
          {/**-----Hands----- */}
          <Cylinder args={[0.05, 0.15, 0.25, 30]} position={[1.8, -0.28, 1.8]}>
            <meshStandardMaterial attach="material" color={"black"} />
          </Cylinder>
          {engine1 ? (
            <FireAnim
              scale={0.4}
              position={[1.8, -1.5, 1.8]}
              rotation={[Math.PI / 2, Math.PI / 2, Math.PI / 2]}
            />
          ) : null}
  
          <Cylinder args={[0.05, 0.15, 0.25, 30]} position={[1.8, -0.28, -1.8]}>
            <meshStandardMaterial attach="material" color={"black"} />
          </Cylinder>
          {engine2 ? (
            <FireAnim
              scale={0.4}
              position={[1.8, -1.5, -1.8]}
              rotation={[Math.PI / 2, Math.PI / 2, Math.PI / 2]}
            />
          ) : null}
  
          <Cylinder args={[0.05, 0.15, 0.25, 30]} position={[-1.8, -0.28, 1.8]}>
            <meshStandardMaterial attach="material" color={"black"} />
          </Cylinder>
          {engine3 ? (
            <FireAnim
              scale={0.4}
              position={[-1.8, -1.5, 1.8]}
              rotation={[Math.PI / 2, Math.PI / 2, Math.PI / 2]}
            />
          ) : null}
  
          <Cylinder args={[0.05, 0.15, 0.25, 30]} position={[-1.8, -0.28, -1.8]}>
            <meshStandardMaterial attach="material" color={"black"} />
          </Cylinder>
          {engine4 ? (
            <FireAnim
              scale={0.4}
              position={[-1.8, -1.5, -1.8]}
              rotation={[Math.PI / 2, Math.PI / 2, Math.PI / 2]}
            />
          ) : null}
        </Box>
      </group>
    );
  };

  export default RainbowBox;