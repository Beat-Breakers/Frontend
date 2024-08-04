import React, { createContext, useState, useContext } from 'react';

// Create the context
const BotContext = createContext();

// Create a provider component
export const BotProvider = ({ children }) => {
    const [animateBot, setAnimateBot] = useState(true); // true = animationned
    const [showBot, setShowBot] = useState(true); // true = bot visible
    const [botPosX, setBotPosX] = useState(96); // in %
    const [botPosY, setBotPosY] = useState(-10); // in %
    const [botContainerSize, setBotContainerSize] = useState(150); // in px
    const [botText, setBotText] = useState("hello freinds click anywhere on screen to continue"); // in px
    const [botDilague, setBotDilague] = useState(true); // in px


    return (
        <BotContext.Provider value={{
            animateBot, setAnimateBot,
            showBot, setShowBot,
            botPosX, botPosY, setBotPosX, setBotPosY,
            botContainerSize, setBotContainerSize,
            botText, setBotText,
            botDilague, setBotDilague,
        }}>
            {children}
        </BotContext.Provider>
    );
};

// Custom hook to use the BotContext
export const useBot = () => {
    return useContext(BotContext);
};
