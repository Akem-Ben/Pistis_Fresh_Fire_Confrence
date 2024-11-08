// Navbar.tsx
import React from 'react';
import { BiPlus } from "react-icons/bi";
import ButtonComponent from './ButtonComponent';

export const Navbar: React.FC = () => {
    return (
        <header className="py-6 bg-[black] opacity-85 shadow-lg sticky top-0 z-50">
            <div className="max-w-6xl flex items-center justify-between m-auto">
                <div>
                    <img src='/navbar/fresh-fire-logo.jpeg' className='w-[70px]' alt='logo' />
                </div>
                <nav className="flex justify-center items-center gap-20"> 
                    <div className="flex gap-6 text-[white] text-xl font-semibold">
                        <div className="flex items-center gap-3 cursor-pointer hover:scale-[1.1] transition-all">Home <BiPlus/></div>
                        <div className="flex items-center gap-3 cursor-pointer hover:scale-[1.1] transition-all">Buy FFC Shirts <BiPlus/></div>
                        <div className="flex items-center gap-3 cursor-pointer hover:scale-[1.1] transition-all">Contact <BiPlus/></div>
                    </div>
                    <div className='flex gap-10'>
                    <ButtonComponent
                        text="Register" 
                        buttonColor="[#8B0000]"
                        textColor="text-[white]"
                    />
                     <ButtonComponent
                        text="Volunteer" 
                        buttonColor="[#8B0000]"
                        textColor="text-[white]"
                    />
                    </div>
                </nav>
            </div>
        </header>
    );
};
