import React, { Suspense, useEffect, useRef } from 'react';
import { OrbitControls, PerspectiveCamera, useGLTF } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useBot } from '../Context/BotContext';

function BotModel() {
    const { animateBot } = useBot();
    const bot = useGLTF("/Models/Bot/scene.gltf");
    const mixer = useRef();

    useEffect(() => {
        if (bot.animations.length) {
            mixer.current = new THREE.AnimationMixer(bot.scene);
            bot.animations.forEach((clip) => {
                mixer.current.clipAction(clip).play();
            });
        }
        return () => mixer.current?.stopAllAction();
    }, [bot]);

    useFrame((state, delta) => {
        if (animateBot) {
            mixer.current?.update(delta);
        } else {
            mixer.current?.stopAllAction();
        }
    });

    return <primitive object={bot.scene} position={[0, -2, 0]} scale={[1200, 1200, 1200]} />;
}

export default function Bot() {
    return (
        <div className='w-[150px] h-[150px] fixed bottom-3 right-3 bg-black'>
            <Canvas shadows>
                <Suspense fallback={null}>
                    <PerspectiveCamera makeDefault position={[0, 4, 32]} />
                    <OrbitControls enableZoom={false} />
                        <BotModel />
                    {/* </mesh> */}
                    <ambientLight args={["#ffffff", 1]} />
                    <spotLight args={["#00ffff", 50]} position={[4, 12, 16]} penumbra={0.5} castShadow />
                </Suspense>
            </Canvas>
        </div>
    );
}
