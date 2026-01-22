"use client";

import Image from "next/image";
import heroBg from "@/assets/background/hero-bg.png";

export default function Hero() {
  return (
    <main className="w-full h-[720px] relative overflow-hidden">
      <div className="w-full h-full relative">
        {/* Background */}
        <Image
          src={heroBg}
          alt="hero background"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />

        {/* Headline */}
        <div className="z-50 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <h1 className="font-league text-[130px] uppercase text-white">
            FIND YOUR GAME
          </h1>
        </div>

        <div className="z-50 absolute top-[58%] left-1/2 -translate-x-1/2">
          <h1 className="font-league text-7xl text-white">
            in seconds.
          </h1>
        </div>

        {/* Buttons */}
        <div className="z-50 absolute top-[70%] left-1/2 -translate-x-1/2 flex gap-4">
          <button className="px-5 font-league text-white rounded-[30px] border-[3px] text-[35px] border-white/80">
            BOOK NOW
          </button>
          <button className="px-7 font-league py-2 bg-[#BEDD5A] text-black text-[35px] rounded-[30px] border-[3px] border-[#BEDD5A]">
            JOIN A SESSION
          </button>
        </div>

        {/* Moving BOOK NOW Bar */}
        <div className="absolute bottom-0 left-0 w-full bg-[#BEDD5A] overflow-hidden py-1">
          <div className="flex whitespace-nowrap animate-marquee">
            {Array.from({ length: 12 }).map((_, i) => (
              <span
                key={i}
                className="mx-8 font-league text-2xl uppercase tracking-widest text-black"
              >
                BOOK NOW
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Marquee Animation */}
      <style jsx>{`
        .animate-marquee {
          animation: marquee 15s linear infinite;
        }

        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </main>
  );
}
