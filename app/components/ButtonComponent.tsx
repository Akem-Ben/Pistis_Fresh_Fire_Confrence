import React from 'react';

interface ButtonComponentProps {
    text: string;
    buttonColor?: string;
    backgroundColor?: string;
    textColor?: string;
    buttonWidth?: string;
    buttonHeight?: string;
    onClick?: () => void;
}

const ButtonComponent: React.FC<ButtonComponentProps> = ({
    text,
    buttonColor = 'bg-white',
    backgroundColor = 'bg-[#]',
    textColor = 'text-pink-500',
    buttonWidth = 'w-[140px]',
    buttonHeight = 'h-[56px]',
    onClick,
}) => {
    return (
        <div className={`hover:scale-[1.1] transition-all hover:bg-transparent hover:color-[white] hover:border hover:border-${buttonColor} bg-${buttonColor} rounded-lg`}>
            <button 
                className={`px-[3.5rem] w-[140px] h-[56px] py-4 ${textColor} flex text-center items-center justify-center font-semibold`}
                onClick={onClick}
            >
                {text}
            </button>
       </div>
    );
};

export default ButtonComponent;
