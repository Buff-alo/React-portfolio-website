// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const LoadingScreen = () => {
    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-[100] bg-gray-950 flex items-center justify-center"
        >
            <div className="text-center">
                {/* Animated Logo */}
                <motion.div
                    animate={{
                        scale: [1, 1.1, 1],
                        rotate: [0, 180, 360],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="w-16 h-16 mx-auto mb-6 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center"
                >
                    <span className="text-white text-2xl font-bold">K</span>
                </motion.div>

                {/* Loading Text */}
                <motion.p
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="text-gray-400 text-sm uppercase tracking-widest"
                >
                    Loading
                </motion.p>

                {/* Progress Bar */}
                <div className="w-48 h-1 bg-gray-800 rounded-full mt-4 mx-auto overflow-hidden">
                    <motion.div
                        initial={{ x: "-100%" }}
                        animate={{ x: "100%" }}
                        transition={{
                            duration: 1,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        className="h-full w-1/2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                    />
                </div>
            </div>
        </motion.div>
    );
};

export default LoadingScreen;
