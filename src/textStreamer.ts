import React, { useEffect, useState } from 'react';

interface TextStreamerProps {
    /** The speed at which to stream each character */
    streamSpeed: number;
    /** The full text to stream */
    fullText: string;
    /** Callback function to receive the streamed text */
    onStream: (streamedText: string) => void;
}

function TextStreamer({ streamSpeed, fullText, onStream }: TextStreamerProps) {
    useEffect(() => {
        let index = 0;
        const timer = setInterval(() => {
            if (index < fullText.length) {
                onStream(fullText.slice(0, index + 1));
                index++;
            } else {
                clearInterval(timer);
            }
        }, streamSpeed);

        // Cleanup function to clear timers if the component unmounts
        return () => {
            clearInterval(timer);
        };
    }, [streamSpeed, fullText, onStream]);

    // Render nothing, as this component's job is just to stream text
    return null;
}

export default TextStreamer;
