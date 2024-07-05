import React, { createContext, useState, useContext } from 'react';

// Create the context
const BotContext = createContext();

// Create a provider component
export const BotProvider = ({ children }) => {
    const [animateBot, setAnimateBot] = useState(true);
    const [showBot, setShowBot] = useState(true);

    return (
        <BotContext.Provider value={{ animateBot, setAnimateBot, showBot, setShowBot }}>
            {children}
        </BotContext.Provider>
    );
};

// Custom hook to use the BotContext
export const useBot = () => {
    return useContext(BotContext);
};
