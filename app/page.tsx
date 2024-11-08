import Image from "next/image";
import { Hero } from './components/Hero';
import { VideoPlayer } from './components/VideoPlayer';

export default function Home() {

  return (
    <div className="flex flex-col gap-32 relative w-full h-full">
      <div className="absolute inset-0">
                <div className="absolute inset-0 bg-[black] opacity-50"></div>
            </div>
    <Hero />
    <VideoPlayer />
    </div>
  );
}
