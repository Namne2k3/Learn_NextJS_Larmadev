'use client'
import { createContext, useState } from 'react'

export const ThemeContext = createContext();

// It's a Higher Order Component ( HOC )
// It warp all the component in the page
export const ThemeProvider = ({ children }) => {
    const [mode ,setMode] = useState("dark");

    const toggle = () => {
        setMode(prev => prev == "dark" ? "light" : "dark");
    };
    
    return (
        <ThemeContext.Provider value={{ toggle, mode }}>
            <div className={`theme ${mode}`}>
                {children}
            </div>
        </ThemeContext.Provider>
    );
};