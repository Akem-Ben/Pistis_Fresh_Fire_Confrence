"use client";

import { useState, useRef, useEffect } from 'react';

export const VideoPlayer = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef<any>(null);
    const videoSrc = "/hero/fresh-fire-coming-soon.mp4";

    useEffect(() => {
        // Ensures video is reset if component unmounts
        return () => {
            if (videoRef.current) videoRef.current.pause();
        };
    }, []);

    const handlePlay = () => {
        if (videoRef.current) {
            if (!isPlaying) {
                videoRef.current.play();
            } else {
                videoRef.current.pause();
            }
            setIsPlaying(!isPlaying);
        }
    };

    return (
        <div className="relative w-[70%] mx-auto flex justify-center items-center">
            {/* Video Embed */}
            <video
                ref={videoRef}
                id="heroVideo"
                className="w-[100%] h-[700px] rounded-lg"
                src={videoSrc}
                controlsList="nodownload"
                onEnded={() => setIsPlaying(false)}  // Reset overlay when video ends
            />

            {/* Play Button Overlay (only visible when not playing) */}
            {!isPlaying && (
                <div className="absolute inset-0 flex items-center w-full justify-center bg-opacity-50">
                    <button
                        onClick={handlePlay}
                        className="bg-white rounded-full p-4 shadow-lg transition hover:bg-gray-300"
                    >
                        {/* Play Icon (SVG) */}
                        <svg
                            className="w-8 h-8 text-black"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M4.018 14L14.41 9 4.018 4z" />
                        </svg>
                    </button>
                </div>
            )}
        </div>
    );
};
