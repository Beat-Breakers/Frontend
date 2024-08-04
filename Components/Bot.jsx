import React, { Suspense, useEffect, useRef } from 'react';
import { OrbitControls, PerspectiveCamera, useGLTF } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useBot } from '../Context/BotContext';
import { roboTextSplit, splitText } from '../Utils/TextUtils';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import './Styles.css';

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
    const { botPosX, botPosY, botContainerSize, showBot, botText, botDilague } = useBot();
    const textRef = useRef(null);
    useGSAP(() => {
        const text = textRef.current;
        const chars = text.querySelectorAll('.roboChar');
        gsap.from(chars, {
            display: "none",
            x:-10,
            duration: 0.2,
            // ease: 'power3.out',
            stagger: 0.1,
            yoyo: true,
            repeat: -1,
            delay: 1
        });
    });

    return (
        <div
            style={{
                top: `calc(${botPosY}% - ${botContainerSize / 2}px)`,
                left: `calc(${botPosX}% - ${botContainerSize / 2}px)`,
                width: `${botContainerSize}px`,
                height: `${botContainerSize}px`,
                position: "fixed",
                display: showBot ? "block" : "none",
                transitionDuration: "2s"
            }}
        >
            <div style={{
                position: "absolute",
                backgroundColor: "#333",
                padding: "10px",
                bottom: "100%",
                right: "100%",
                borderRadius: '10px 10px 0 10px',
                maxWidth: "200px",
                // textWrap: "wrap",
                minWidth: "200px",
                height: "auto",
                display: botDilague ? "block" : "none",
                fontFamily: 'humanoid',
                fontSize: 'small',
                color: 'skyblue'

            }} ref={textRef}>
                {roboTextSplit(botText)}
            </div>
            
            <Canvas className='cursor-pointer'>
                <Suspense fallback={null}>
                    <PerspectiveCamera makeDefault position={[0, 4, 32]} />
                    <OrbitControls enableZoom={false} />
                    <BotModel />
                    <ambientLight args={["#ffffff", 1]} />
                    <spotLight args={["#00ffff", 50]} position={[4, 12, 16]} penumbra={0.5} castShadow />
                </Suspense>
            </Canvas>
        </div>
    );
}
