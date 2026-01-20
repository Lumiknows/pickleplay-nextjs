import Image from "next/image";
import heroBg from "@/assets/background/hero_bg.png";
import { Outfit } from "next/font/google";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["400", "500", "600", "900"],
});


export default function Hero() {
  return (
    <main className={outfit.className}>
      <div className="w-full h-[720px]">
        <Image
          src={heroBg}
          alt="hero background"
          fill
          priority
          className="object-cover"
        />
        <div className="z-100 absolute top-70 left-25">
          <h1 className="font-semibold text-[70px]" style={{textShadow: "0px 6px 8px rgba(0,0,0,0.6)" }}>
            Find Your Next Game <br></br> in Seconds.
          </h1>
        </div>
        <div className="absolute z-100 -top-30 left-25">
            <button className="absolute top-162 h-15 w-40 left-5 bg-white/90 backdrop-blur text-[#97A87A] text-[18px] rounded-xl p-5 text-sm">
                Book a court
            </button>
            <button className="absolute top-162 h-15 w-40 left-50 bg-white/90 backdrop-blur text-[#97A87A] text-[18px] rounded-xl p-5 text-sm">
                Join a session
            </button>
        </div>
      </div>
    </main>
  );
}
