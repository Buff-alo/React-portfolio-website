/* eslint-disable no-unused-vars */
import React from 'react'
import { useTheme } from '.././context/ThemeContext';
import { useState, useEffect, useCallback } from 'react';
import {
    motion,
    useScroll,
    AnimatePresence,
} from 'framer-motion';
import {
    Code2,
    Sun,
    Moon,
    Menu,
    X,
} from 'lucide-react';

const Navbar = () => {
    const { isDarkMode, toggleDarkMode } = useTheme();
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    const scrollToSection = (section) => {
        const element = document.getElementById(section);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    // Close mobile menu on Escape key press
    const handleKeyDown = useCallback((e) => {
        if (e.key === 'Escape' && isOpen) {
            setIsOpen(false);
        }
    }, [isOpen]);

    // Close mobile menu when clicking outside
    const handleClickOutside = useCallback((e) => {
        if (isOpen && !e.target.closest('nav')) {
            setIsOpen(false);
        }
    }, [isOpen]);

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.removeEventListener('click', handleClickOutside);
        };
    }, [handleKeyDown, handleClickOutside]);

    // Track active section on scroll
    useEffect(() => {
        const sections = ['home', 'skills', 'work', 'about', 'contact'];
        const observers = [];

        sections.forEach((sectionId) => {
            const element = document.getElementById(sectionId);
            if (element) {
                const observer = new IntersectionObserver(
                    (entries) => {
                        entries.forEach((entry) => {
                            if (entry.isIntersecting) {
                                setActiveSection(sectionId);
                            }
                        });
                    },
                    { threshold: 0.3, rootMargin: '-80px 0px 0px 0px' }
                );
                observer.observe(element);
                observers.push(observer);
            }
        });

        return () => {
            observers.forEach((observer) => observer.disconnect());
        };
    }, []);

    return <motion.nav
        style={{ opacity: 1 }}
        className={`fixed top-0 w-full z-50 px-6 py-4 ${isDarkMode ? 'bg-gray-950/80' : 'bg-gray-50/80'
            } backdrop-blur-md border-b ${isDarkMode ? 'border-gray-800' : 'border-gray-200'
            }`}
    >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
            <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center space-x-2"
            >
                <Code2 size={24} className='text-blue-500' />{" "}
                <span className={`text-lg ml-1 ${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}>Kwadwo Labs</span>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8 relative">
                {['Home', 'Skills', 'Work', 'About', 'Contact'].map((item) => (
                    <motion.button
                        key={item}
                        whileHover={{ y: -2 }}
                        onClick={() => scrollToSection(item.toLowerCase())}
                        className={`text-sm uppercase tracking-wider transition-colors relative ${activeSection === item.toLowerCase()
                            ? 'text-blue-500'
                            : isDarkMode
                                ? 'text-gray-400 hover:text-white'
                                : 'text-gray-600 hover:text-gray-900'
                            }`}
                    >
                        {item}
                        {activeSection === item.toLowerCase() && (
                            <motion.div
                                layoutId="activeSection"
                                className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-500 rounded-full"
                                transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                            />
                        )}
                    </motion.button>
                ))}
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => toggleDarkMode(isDarkMode ? 'light' : 'dark')}
                    aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
                    className={`p-2 rounded-full transition-colors ${isDarkMode
                        ? 'text-gray-400 hover:text-white hover:bg-gray-800 '
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-200'
                        }`}
                >
                    {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
                </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-4">
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => toggleDarkMode(isDarkMode ? 'light' : 'dark')}
                    aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
                    className={`p-2 rounded-full transition-colors ${isDarkMode
                        ? 'text-gray-400 hover:text-white hover:bg-gray-800'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-200'
                        }`}
                >
                    {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
                </motion.button>
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={(e) => {
                        e.stopPropagation();
                        setIsOpen(!isOpen);
                    }}
                    aria-label={isOpen ? "Close menu" : "Open menu"}
                    aria-expanded={isOpen}
                    aria-controls="mobile-menu"
                    className={`p-2 rounded-full transition-colors ${isDarkMode
                        ? 'text-gray-400 hover:text-white hover:bg-gray-800'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-200'
                        }`}
                >
                    {isOpen ? <X size={18} /> : <Menu size={18} />}
                </motion.button>
            </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    id="mobile-menu"
                    role="menu"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className={`absolute top-full left-0 w-full z-50 p-4 border-b shadow-lg md:hidden ${isDarkMode ? 'bg-gray-950 border-gray-800' : 'bg-white border-gray-200'
                        }`}
                >
                    <div className="flex flex-col space-y-2">
                        {['Home', 'Skills', 'Work', 'About', 'Contact'].map((item) => (
                            <motion.button
                                key={item}
                                role="menuitem"
                                whileHover={{ x: 5 }}
                                onClick={() => {
                                    scrollToSection(item.toLowerCase());
                                    setIsOpen(false);
                                }}
                                className={`block w-full text-left py-2 text-sm uppercase tracking-wider transition-colors ${isDarkMode
                                    ? 'text-gray-400 hover:text-white'
                                    : 'text-gray-600 hover:text-gray-900'
                                    }`}
                            >
                                {item}
                            </motion.button>
                        ))}
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    </motion.nav>
}

export default Navbar;