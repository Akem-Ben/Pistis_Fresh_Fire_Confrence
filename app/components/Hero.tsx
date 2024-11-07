import Countdown from './TimeCounter';
import 'animate.css';


export const Hero = () => {
    const targetDate = '2024-12-31T23:59:59';


    return (
        <section className="relative w-full h-full">
            <div className="absolute inset-0 bg-[url('/hero/firestorm.png')] bg-cover bg-center">
                <div className="absolute inset-0 bg-black opacity-50"></div>
            </div>
            <div className="relative z-10 text-white p-8 flex flex-col justify-center items-center gap-4">
                <Countdown targetDate={targetDate} /> <span className="font-serif text-[40px] italic font-bold flex flex-col justify-center items-center">TO</span>
            <div className="font-serif text-[70px] animate__animated animate__pulse animate__infinite italic font-bold flex flex-col justify-center items-center">
                <img src='/hero/fresh-fire-text.png' alt='Fresh Fire Conference 2024'/>
            </div>
            </div>
        </section>
    )
}