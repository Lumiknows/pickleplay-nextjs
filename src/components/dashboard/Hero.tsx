import Image from "next/image";
import heroBg from "@/assets/background/hero_bg.jpeg";
import { Outfit } from "next/font/google";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["400", "500", "600", "900"],
});


export default function Hero() {
  return (
    <main className={`w-full h-[720px] ${outfit.className}`}>
      <div className="w-full h-full">
        <Image
          src={heroBg}
          alt="hero background"
          fill
          priority
          className="object-cover"
        />
        <div className="z-50 absolute top-70 left-25">
          <h1 className="font-semibold text-[70px]" style={{textShadow: "0px 6px 8px rgba(0,0,0,0.6)" }}>
            Find Your Next Game <br></br> in Seconds.
          </h1>
        </div>
        <div className="absolute top-130 left-25 flex gap-4">
          <button className="px-10 py-5 bg-white/15 text-white backdrop-blur-3xl text-[#1C1C1C] font-semibold rounded-[50px] border-5 border border-white/80">
            Book a court
          </button>
          <button className="px-10 py-5 bg-white/15 text-white backdrop-blur-3xl text-[#1C1C1C] font-semibold rounded-[50px] border-5 border border-white/80">
            Join a session
          </button>
        </div>
        // Right card 
          <div className="absolute bottom-8 right-8 bg-white/10 backdrop-blur-md rounded-xl p-10 text-sm text-white border border-white/40">
            <p className="font-semibold mb-2 text-[20px] ">why? Choose PiclePlay</p>
            <ul className="space-y-1 text-[20px] text-white/80">
              <li>• fast transaction</li>
              <li>• no ads</li>
              <li>• easy to locate</li>
            </ul>
        </div>
      </div>
    </main>
  );
}
