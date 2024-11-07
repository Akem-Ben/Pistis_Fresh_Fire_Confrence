import Image from "next/image";
import { Hero } from './components/Hero';
import { VideoPlayer } from './components/VideoPlayer';

export default function Home() {

  return (
    <div className="flex flex-col gap-32">
    <Hero />
    <VideoPlayer />
    </div>
  );
}
