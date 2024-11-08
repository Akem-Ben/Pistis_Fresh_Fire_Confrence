"use client"

import { useState, useEffect } from 'react';

const Countdown = ({ targetDate }: any) => {

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    function calculateTimeLeft() {
        
        const difference = +new Date(targetDate) - +new Date();

        let timeLeft:Record<string, any> = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        }

        return timeLeft;
    }

    return (
        <div className="text-center flex justify-center gap-3">
            <div className='border rounded-lg'>
                <span className='border-b block p-2 rounded-t-lg font-bold text-2xl bg-[#8B0000]'>{timeLeft.days || 0}</span>
                <p className='p-2 font-bold text-2xl border-none rounded-b-lg bg-white text-[#00163F]'>Days</p>
            </div> 
            <div>
                <span className='border-b block p-2 rounded-t-lg font-bold text-2xl bg-[#8B0000]'>{timeLeft.hours || 0}</span>
                <p className='p-2 font-bold text-2xl border-none rounded-b-lg bg-white text-[#00163F]'>Hours</p>
            </div> 
            <div>
                <span className='border-b block p-2 rounded-t-lg font-bold text-2xl bg-[#8B0000]'>{timeLeft.minutes || 0}</span>
                <p className='p-2 font-bold text-2xl border-none rounded-b-lg bg-white text-[#00163F]'>Mins</p>
            </div> 
            <div>
                <span className='border-b block p-2 rounded-t-lg font-bold text-2xl bg-[#8B0000]'>{timeLeft.seconds || 0}</span>
                <p className='p-2 font-bold text-2xl border-none rounded-b-lg bg-white text-[#00163F]'>Secs</p>
            </div>
        </div>
    );
};

export default Countdown;
