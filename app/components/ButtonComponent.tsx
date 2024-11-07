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
    backgroundColor = 'bg-pink-500',
    textColor = 'text-pink-500',
    buttonWidth = 'w-[174px]',
    buttonHeight = 'h-[56px]',
    onClick,
}) => {
    return (
        <div className="relative hover:scale-[1.1] transition-all">
            <button 
                className={`absolute px-[3.5rem] w-[174px] h-[56px] py-4 ${textColor} ${buttonColor} rounded font-semibold top-0`}
                onClick={onClick}
            >
                {text}
            </button>
            <div className={`${backgroundColor} ${buttonHeight} ${buttonWidth} rounded mt-[0.3rem] ml-[0.40rem]`}></div>
        </div>
    );
};

export default ButtonComponent;
