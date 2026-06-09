"use client"
import { TypingAnimation } from "@/components/ui/typing-animation";
import { useEffect, useState } from "react";


const SplashScreen = () => {
    const [isMounted, setIsMounted] = useState(true);
    const [isFading, setIsFading] = useState(false);

    useEffect(() => {
        const fadeTimer = setTimeout(() => {
        setIsFading(true);
        }, 2000);

        const mountTimer = setTimeout(() => {
        setIsMounted(false);
        }, 2500);

        return () => {
        clearTimeout(fadeTimer);
        clearTimeout(mountTimer);
        };
    }, []);

    if (!isMounted) return null;

    return (
        <div
        className={`fixed inset-0 z-9999 flex items-center justify-center bg-background transition-opacity duration-500 ease-in-out ${
            isFading ? 'opacity-0' : 'opacity-100'
        }`}
        >
            <h1 className="text-4xl font-bold tracking-tight text-foreground animate-pulse">
                <TypingAnimation>
                    Saad Ksioui
                </TypingAnimation>
            </h1>
        </div>
    )
}
export default SplashScreen