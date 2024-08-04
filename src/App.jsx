import React, { useEffect, useRef } from 'react';
import './App.css';
import logo from '../assets/Logo/logo.png';
import gsap from 'gsap';
import { useGSAP } from "@gsap/react";
import { Lord } from '../Components';
import { splitText } from '../Utils/TextUtils';
import { useBot } from '../Context/BotContext';
import { useNavigate } from 'react-router-dom';

function App() {
  const navigate = useNavigate();
  const textRef = useRef(null);
  const { setBotPosY, setBotDilague, setBotPosX, setBotText } = useBot();
  useEffect(() => {
    setBotPosX(25);
  }, []);
  useGSAP(() => {
    const text = textRef.current;
    const chars = text.querySelectorAll('.char');
    setBotPosY(90);
    gsap.from(chars, {
      opacity: 0,
      y: 10,
      duration: 1,
      stagger: 0.2,
      yoyo: true,
      repeat: -1,
      delay: 1
    });
  }, []);

  const welcomeScreen = () => {

    const custumtext = document.querySelectorAll(".custumtext");
    const timeline = gsap.timeline({
      onComplete: () => {
        navigate('/home');
        setBotDilague(true);
        setBotText("Ask me !")
      }
    });
    timeline.from(custumtext, {
      y: '-50vw',
      duration: 1,
      ease: 'back.out(2)',
      stagger: -0.2,
      yoyo: true,
      delay: 1
    });
    timeline.to(custumtext, {
      scale: 1.2,
      duration: 1,
      stagger: -0.5,
      delay: 1
    }, "-=1");
    timeline.to(custumtext, {
      y: '50vw',
      duration: 1,
      ease: 'back.in(2)',
      stagger: -2,
      delay: 1
    });
  };

  const handleClick = () => {
    setBotPosX(96);
    document.querySelector(".welcomefirst").style.display = 'none';
    setBotDilague(false);
    document.querySelector(".welcomesecond").style.display = 'block';
    welcomeScreen();
  };

  return (
    <>
      <div className='bg-gray-950 flex text-8xl welcomefirst' onClick={handleClick}>
        <div className='w-[60vw] flex items-center justify-center'>
          <div ref={textRef} className='overflow-visible pb-[40vh] text-white' style={{
            fontFamily: 'Kingthings',
            textShadow: '0 0 50px white'
          }}>
            {splitText('BTBS family/welcomes you/')}
          </div>
        </div>
        <div className='w-[40vw] hidden lg:block'>
          <Lord />
        </div>
      </div>
      <div className='h-screen w-full bg-gray-950 hidden top-0 left-0 overflow-hidden relative welcomesecond'>
        <div className='py-2 px-20 bg-green-600 text-8xl rounded-full top-[35%] left-[33%] absolute w-1/3 text-center flex justify-center scale-95 custumtext'>
          <img src={logo} alt='logo' className='h-40' />
        </div>
        <div className='py-8 px-20 bg-green-400 inline-block text-8xl rounded-full top-[40%] left-[33%] absolute w-1/3 text-center custumtext'>
          breakers
        </div>
        <div className='py-8 px-20 bg-green-200 inline-block text-8xl rounded-full top-[45%] left-[33%] absolute w-1/3 text-center scale-105 custumtext'>
          Beat
        </div>
      </div>
    </>
  );
}

export default App;
