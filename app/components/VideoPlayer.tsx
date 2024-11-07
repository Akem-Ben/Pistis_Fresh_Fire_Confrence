"use client"

import { useState } from 'react';

export const VideoPlayer = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const videoSrc = "/hero/fresh-fire-coming-soon.mp4";

    const handlePlay = () => {
        const video = document.getElementById('heroVideo');
        if (video) {
            video.play();
            setIsPlaying(!isPlaying);
        }
    };

    return (
        <div className="relative w-[90%] mx-auto flex justify-center items-center">
            {/* Video Embed */}
            <video
                id="heroVideo"
                className="w-[100%] h-[700px] rounded-lg"
                src={videoSrc}
                controlsList="nodownload"
                // controls={isPlaying}  // Show controls only when playing
                onEnded={() => setIsPlaying(false)}  // Reset overlay when video ends
            />

            {/* Play Button Overlay (only visible when not playing) */}
            {!isPlaying && (
                <div className="absolute inset-0 flex items-center justify-center bg-[#361D68] bg-opacity-50">
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
