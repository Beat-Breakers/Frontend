import React, { Suspense } from 'react';
import { OrbitControls, PerspectiveCamera, useGLTF } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
// import loader from '../public/Models/Lord/scene.gltf'
export default function Lord() {
    const angleToRadians = (angle) => {
        return angle * (Math.PI) / 180;
    }

    const lord = useGLTF('/Models/Lord/lord.gltf');

    return (
        <>
            <Canvas style={{
                height: '100vh',
                // backgroundColor: "black",
                width: '100%'
            }} shadows>
                <Suspense fallback={null}>
                    <PerspectiveCamera makeDefault position={[0, 1, 8]} />
                    <OrbitControls />

                    <primitive object={lord.scene} position={[0, -0.2, 0]} scale={[1.3, 1.3, 1.3]}/>
                    <ambientLight args={["#ffffff", 1]} />
                    <spotLight args={["#00ffff", 50]} position={[1, 3, 4]} penumbra={0.5} castShadow />
                    {/* <axesHelper setColors={["red", "green", "blue"]}/> */}
                </Suspense>
            </Canvas>

        </>
    );
}
