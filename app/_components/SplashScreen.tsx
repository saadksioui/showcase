"use client"
import { TypingAnimation } from "@/components/ui/typing-animation";
import { useEffect, useState } from "react";


const SplashScreen = () => {
    const [isMounted, setIsMounted] = useState<boolean>(true);
    const [isFading, setIsFading] = useState<boolean>(false);

    useEffect((): (() => void) => {
        const fadeTimer: ReturnType<typeof setTimeout> = setTimeout((): void => {
        setIsFading(true);
        }, 2000);

        const mountTimer: ReturnType<typeof setTimeout> = setTimeout((): void => {
        setIsMounted(false);
        }, 2500);

        return (): void => {
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