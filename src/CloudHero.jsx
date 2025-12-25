import { Canvas, useFrame } from "@react-three/fiber";
import {
  Cloud,
  Sky,
  OrbitControls,
  Text,
  Sphere,
} from "@react-three/drei";
import { Suspense, useRef } from "react";

function HeroScene() {
  const nameRef = useRef();
  const titleRef = useRef();
  const sphereRef = useRef();

  // Mouse-based parallax + subtle motion
  useFrame(({ mouse, clock }) => {
    const t = clock.getElapsedTime();

    if (nameRef.current) {
      nameRef.current.position.x = mouse.x * 0.6;
      nameRef.current.position.y = 2.3 + mouse.y * 0.4;
    }

    if (titleRef.current) {
      titleRef.current.position.x = mouse.x * 0.3;
    }

    if (sphereRef.current) {
      sphereRef.current.rotation.y = t * 0.3;
      sphereRef.current.position.y = 1.4 + Math.sin(t) * 0.1;
    }
  });

  return (
    <>
      {/* LIGHTING */}
      <ambientLight intensity={1.1} />
      <directionalLight position={[5, 10, 5]} intensity={2.2} />
      <directionalLight position={[-5, 5, -5]} intensity={1} />

      {/* SKY */}
      <Sky sunPosition={[100, 20, 100]} />

      {/* TEXT */}
      <Text
        ref={nameRef}
        position={[0, 2.3, 0]}
        fontSize={1}
        color="#1a365d"
        anchorX="center"
        anchorY="middle"
      >
        RIYAZ SHAIK
      </Text>

      <Text
        ref={titleRef}
        position={[0, 1.5, 0]}
        fontSize={0.38}
        color="#2b6cb0"
        anchorX="center"
        anchorY="middle"
      >
        Senior Salesforce Developer · LWC · Apex · CPQ
      </Text>

      {/* GLASS SALESFORCE SPHERE */}
      <Sphere
        ref={sphereRef}
        args={[0.6, 48, 48]}
        position={[2.6, 1.4, -1]}
      >
        <meshPhysicalMaterial
          color="#90cdf4"
          roughness={0.1}
          transmission={0.95}
          thickness={1}
          clearcoat={1}
          clearcoatRoughness={0}
        />
      </Sphere>

      {/* CLOUD LAYERS (DEPTH) */}
      {/* BACK CLOUDS */}
      <Cloud
        position={[0, -0.3, -3]}
        speed={0.1}
        opacity={0.4}
        width={18}
        depth={2}
        segments={30}
      />

      {/* MID CLOUDS */}
      <Cloud
        position={[-3, 0.3, -1]}
        speed={0.2}
        opacity={0.7}
        width={10}
        depth={1.6}
        segments={40}
      />

      {/* FRONT CLOUD */}
      <Cloud
        position={[0, 0, 0]}
        speed={0.25}
        opacity={0.9}
        width={12}
        depth={2}
        segments={50}
      />

      {/* CAMERA CONTROLS */}
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.15}
      />
    </>
  );
}

export default function CloudHero() {
  return (
    <Canvas
      camera={{ position: [0, 2, 8], fov: 50 }}
      style={{
        width: "100vw",
        height: "100vh",
        background: "#eaf6ff",
      }}
    >
      <Suspense fallback={null}>
        <HeroScene />
      </Suspense>
    </Canvas>
  );
}
