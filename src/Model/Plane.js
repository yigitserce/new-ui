const Plane = () => {
    return (
      <mesh position={[0, 0.48, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeBufferGeometry args={[1000, 1000, 1000]} />
        <meshPhongMaterial color="gray" />
      </mesh>
    );
  };
  export default Plane;