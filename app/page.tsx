import Image from "next/image";
import { Hero } from './components/home/Hero';
import { VideoPlayer } from './components/home/VideoPlayer';
import { SpeakersSection } from './components/home/Speakers';

export default function Home() {

  return (
    <div className="flex flex-col gap-32 relative w-full h-full">
      <div className="absolute inset-0">
                <div className="absolute inset-0 bg-[black] opacity-50"></div>
            </div>
    <Hero />
    <VideoPlayer />
    <SpeakersSection />
    </div>
  );
}
