import { useState, useEffect, useRef } from 'react';

const DEFAULT_OPTIONS: TypewriterOptions = {
    speed: 50,
    delay: 200
}

interface TypewriterOptions {
    /** The speed at which to type each character */
    speed?: number;
    /** The delay before typing starts */
    delay?: number;
}

interface TypewriterStaticText {
    text: string;
    options?: TypewriterOptions;
}

function useTypewriter({ text, options }: TypewriterStaticText) {
    const [_, forceRender] = useState(0);
    const output = useRef("");
    const index = useRef(0);

    const speed = options?.speed || DEFAULT_OPTIONS.speed;
    const delay = options?.delay || DEFAULT_OPTIONS.delay;

    useEffect(() => {
        const typeNextCharacter = () => {
            if (index.current < text.length) {
                output.current += text.charAt(index.current);
                index.current++;
                forceRender(i => i + 1);
            }
        };
        // Schedule the first typing event
        const initialDelayTimer = setTimeout(typeNextCharacter, delay);
        // Schedule the rest of the typing events
        const typingInterval = setInterval(typeNextCharacter, speed);

        // Cleanup function to clear timers if the component unmounts
        return () => {
            clearTimeout(initialDelayTimer);
            clearInterval(typingInterval);
        };
    }, [text, speed, delay]); // The effect depends on the initial parameters

    return output.current;
}

export default useTypewriter;
