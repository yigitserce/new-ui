import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import {OrbitControls,Stars,PerspectiveCamera} from "@react-three/drei";
import "./css/style.css";
import axios from "axios";
import RainbowBox from "./Model/RainbowBox";
import Plane from "./Model/Plane";
import Tables from "./Components/Tables";
import RoketModel from "./Model/RoketModel";

function App() {
  const [engines,setEngines] = useState([false,false,false,false])
  // const [velocity, setVelociy] = useState(0);
  const [orientation, setOrientation] = useState([0, 0, 0]);
  const [positions, setPositions] = useState([0,0,0]);
  // const [theLidar,setThelidar] = useState(0);
  // const [message2, setMessage2] = useState([0, 0, 0]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:4001/data")
      .then((response) => {
        let x = response.data.positions.x ;
        let y = response.data.positions.y;
        let z = response.data.positions.z; 
        let roll = response.data.orientations.roll;
        let pitch = response.data.orientations.pitch;
        let yaw = response.data.orientations.yaw;
        setPositions([x, z, y]);
        setOrientation([roll, yaw, pitch]);
        let engine1 = response.data.thrusters.e1;
        let engine2 = response.data.thrusters.e2;
        let engine3 = response.data.thrusters.e3;
        let engine4 = response.data.thrusters.e4;
        setEngines([engine3,engine2,engine4,engine1]);
      })
      .catch((error) => {
        console.log(error);
      });

     /*  axios
      .get("http://localhost:4001/data")
      .then((response) => {
        let x = (response.data.angles[0] * Math.PI) / 180;
        let z = (response.data.angles[1] * Math.PI) / 180;
        let posData2 = response.data.lidar;
        let AnimDatas = response.data.AnimData;
        let rocVelocity = response.data.velocity;
        setMessage2([x, 0, z]);
        setThelidar(posData2);
        setmainEngine(AnimDatas[0]);
        setengine1(AnimDatas[1]);
        setengine2(AnimDatas[2]);
        setengine3(AnimDatas[3]);
        setengine4(AnimDatas[4]);
        setVelociy(rocVelocity);
        console.log(response.data);
        
      })
      .catch((error) => {
        console.log(error);
      }); */
  }, [orientation,positions,engines]);

  

  return (
    <div className="simulatinZone">
     
     {/*  <div className="TextSide">
        <h4>Theoricle Site</h4>
        <h4>Praticle Site</h4>
      </div> */}
    
        <Tables
        engine1 = {engines[0]}
        engine2= {engines[1]}
        engine3 = {engines[2]}
        engine4 = {engines[3]}
        positions = {positions}
        velocity = {0}
        />    
 
      <Canvas shadows={true}>
        <Suspense fallback={null}>
          <PerspectiveCamera makeDefault position={[-1.5, 7, 29]} />
          <OrbitControls/>
          <Plane />
          <RoketModel />
          {/*
          <RainbowBox
            rotation={orientation}
            position={positions}
            castShadow
            mainEngine={true}
            engine1={engines[0]}
            engine2={engines[1]}
            engine3={engines[2]}
            engine4={engines[3]}
          />
          */}
          <ambientLight args={["#ffffff", 0.25]} />
          <pointLight
            args={["#ffffff", 4, 8]}
            position={[13+positions[0], 5, 0]}
            castShadow
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
export default App;
