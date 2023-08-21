import { PointMaterial, Points } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import * as random from "maath/random/dist/maath-random.esm";
import { useRef, useState } from "react";

export const Background = () => (
  <Canvas
    className="bg-cover bg-center w-full h-full z-0 fixed top-0 left-0"
    camera={{ position: [0, 0, 1] }}
  >
    <Stars />
  </Canvas>
);

const Stars = (props: any) => {
  const ref = useRef() as {
    current: { rotation: { x: number; y: number } };
  };

  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(5000), { radius: 1.5 })
  );

  useFrame((_state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points
        ref={ref}
        positions={sphere}
        stride={3}
        frustumCulled={false}
        {...props}
      >
        <PointMaterial
          transparent
          color="#ffa0e0"
          size={0.005}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};
