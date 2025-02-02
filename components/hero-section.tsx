import Image from "next/image";
import { Button } from "./ui/button";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen w-full h-screen">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/img/hero/hero-1.jpg"
          alt="hero"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Hero Content */}
      <div className="w-full relative flex justify-center items-center h-full">
        <div className="space-y-6">
          <p className="text-lg tracking-wider">SHAPE YOUR BODY</p>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            BE <span className="text-[#FF4A17]">STRONG</span>
            <br />
            TRANING HARD
          </h1>
          <Button className="bg-[#FF4A17] hover:bg-[#FF4A17]/90 text-white px-8 py-6 text-lg rounded-none">
            GET INFO
          </Button>
        </div>
      </div>

      {/* Slider Navigation */}
      <div className="absolute inset-y-0 left-0 flex items-center">
        <button className="p-2 bg-black/20 hover:bg-black/40">
          <span className="sr-only">Previous slide</span>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
      </div>
      <div className="absolute inset-y-0 right-0 flex items-center">
        <button className="p-2 bg-black/20 hover:bg-black/40">
          <span className="sr-only">Next slide</span>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </section>
  );
};
