import { useState, useEffect } from 'react';

/**
 * Custom hook for typewriter effect
 * @param {string[]} words - Array of words to cycle through
 * @param {number} typingSpeed - Speed of typing in ms (default: 100)
 * @param {number} deletingSpeed - Speed of deleting in ms (default: 50)
 * @param {number} pauseDuration - Pause after typing complete word in ms (default: 2000)
 */
const useTypewriter = (
    words,
    typingSpeed = 100,
    deletingSpeed = 50,
    pauseDuration = 2000
) => {
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [currentText, setCurrentText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [isPausing, setIsPausing] = useState(false);

    useEffect(() => {
        const currentWord = words[currentWordIndex];

        if (isPausing) {
            const timeout = setTimeout(() => {
                setIsPausing(false);
                setIsDeleting(true);
            }, pauseDuration);
            return () => clearTimeout(timeout);
        }

        const timeout = setTimeout(() => {
            if (!isDeleting) {
                // Typing
                if (currentText.length < currentWord.length) {
                    setCurrentText(currentWord.slice(0, currentText.length + 1));
                } else {
                    // Word complete, start pause
                    setIsPausing(true);
                }
            } else {
                // Deleting
                if (currentText.length > 0) {
                    setCurrentText(currentWord.slice(0, currentText.length - 1));
                } else {
                    // Move to next word
                    setIsDeleting(false);
                    setCurrentWordIndex((prev) => (prev + 1) % words.length);
                }
            }
        }, isDeleting ? deletingSpeed : typingSpeed);

        return () => clearTimeout(timeout);
    }, [currentText, isDeleting, isPausing, currentWordIndex, words, typingSpeed, deletingSpeed, pauseDuration]);

    return currentText;
};

export default useTypewriter;
