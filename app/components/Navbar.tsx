// Navbar.tsx
import React from 'react';
import { BiPlus } from "react-icons/bi";
import ButtonComponent from './ButtonComponent';

export const Navbar: React.FC = () => {
    return (
        <header className="py-6 bg-[#361D68] shadow-lg sticky z-100">
            <div className="max-w-6xl flex items-center justify-between m-auto">
                <div>
                    <img src='/navbar/pistis-logo.png' className='w-[50px]' alt='logo' />
                </div>
                <nav className="flex justify-center items-center gap-20"> 
                    <div className="flex gap-6 text-white text-xl font-semibold">
                        <div className="flex items-center gap-3 cursor-pointer hover:scale-[1.1] transition-all">Home <BiPlus/></div>
                        <div className="flex items-center gap-3 cursor-pointer hover:scale-[1.1] transition-all">Speakers <BiPlus/></div>
                        <div className="flex items-center gap-3 cursor-pointer hover:scale-[1.1] transition-all">Contact <BiPlus/></div>
                    </div>
                    <ButtonComponent
                        text="Register" 
                        buttonColor="bg-white"
                        backgroundColor="bg-pink-500"
                        textColor="text-pink-500"
                    />
                </nav>
            </div>
        </header>
    );
};
