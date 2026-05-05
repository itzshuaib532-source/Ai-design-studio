import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, EffectComposer, Outline, Bloom } from '@react-three/drei';

const InteractiveCanvas = ({ model, materials, lights }) => {
  return (
    <Canvas camera={{ position: [0, 0, 5] }}>
      <ambientLight intensity={0.4} />
      {/* <AIControlledLights model={model} /> */}
      {/* <Model 
        url={model.url}
        materials={materials}
        onHover={({ point }) => animateHighlight(point)}
      /> */}
      <OrbitControls enableDamping />
      <EffectComposer>
        <Outline pass />
        <Bloom />
      </EffectComposer>
    </Canvas>
  );
};

export default InteractiveCanvas;
