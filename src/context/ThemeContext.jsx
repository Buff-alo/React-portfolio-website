import { createContext, useContext, useState, useEffect, useMemo } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [isDarkMode, toggleDarkMode] = useState(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            return savedTheme;
        }
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    });

    useEffect(() => {
        const root = window.document.documentElement;
        if (isDarkMode === 'dark') {
            root.classList.add('dark');
        } else {
            root.classList.remove('dark');
        }
        localStorage.setItem('theme', isDarkMode);

    }, [isDarkMode]);

    const value = useMemo(() => ({
        isDarkMode: isDarkMode === "dark",
        toggleDarkMode
    }), [isDarkMode]);

    return (
        <ThemeContext.Provider
            value={value}
        >
            {children}
        </ThemeContext.Provider>
    );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useTheme = () => useContext(ThemeContext);
