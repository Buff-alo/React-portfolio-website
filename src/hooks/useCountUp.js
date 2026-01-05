import { useState, useEffect, useRef } from 'react';

/**
 * Custom hook for animated counting effect
 * @param {number} end - Target number to count to
 * @param {number} duration - Animation duration in ms (default: 2000)
 * @param {boolean} startOnView - Whether to start when element is in view (default: true)
 */
const useCountUp = (end, duration = 2000, startOnView = true) => {
    const [count, setCount] = useState(0);
    const [hasStarted, setHasStarted] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        if (!startOnView) {
            setHasStarted(true);
        }
    }, [startOnView]);

    useEffect(() => {
        if (startOnView && ref.current) {
            const observer = new IntersectionObserver(
                (entries) => {
                    if (entries[0].isIntersecting && !hasStarted) {
                        setHasStarted(true);
                    }
                },
                { threshold: 0.5 }
            );
            observer.observe(ref.current);
            return () => observer.disconnect();
        }
    }, [startOnView, hasStarted]);

    useEffect(() => {
        if (!hasStarted) return;

        let startTime;
        let animationFrame;

        const animate = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);

            // Easing function for smooth animation
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            setCount(Math.floor(easeOutQuart * end));

            if (progress < 1) {
                animationFrame = requestAnimationFrame(animate);
            }
        };

        animationFrame = requestAnimationFrame(animate);

        return () => {
            if (animationFrame) {
                cancelAnimationFrame(animationFrame);
            }
        };
    }, [end, duration, hasStarted]);

    return { count, ref };
};

export default useCountUp;
