import React from 'react';

const Lighting = () => {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} castShadow />
      <spotLight
        position={[-10, 15, 10]}
        angle={0.3}
        penumbra={1}
        intensity={2}
        castShadow
      />
      <directionalLight 
        position={[5, 5, 5]} 
        intensity={0.8} 
      />
    </>
  );
};

export default Lighting;
  
