import Image from "next/image";
import Hero_BG from "@/assets/background/hero_bg.png";
import { Outfit } from "next/font/google";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["400", "500", "600", "900"],
});

export default function Hero() {
  return (
    <div className={`mx-auto w-full max-w-[1400px] h-[720px] rounded-2xl overflow-hidden ${outfit.className}`}>
      {/* Background */}
      <div className="relative w-full h-full">
        <Image
          src={Hero_BG}
          alt="Hero background"
          fill
          priority
          className="object-cover"
        />
        {/* Left info card */}
        <div className="absolute z-40 top-133 left-5">
            <h1 className="text-[30px] font-semibold font-white">
                find a local court<br></br>near you
            </h1>
        </div>
        <div className="absolute z-100">
            <button className="absolute top-162 h-15 w-40 left-5 bg-white/90 backdrop-blur text-[#97A87A] text-[18px] rounded-xl p-5 text-sm">
                Book a court
            </button>
            <button className="absolute top-162 h-15 w-40 left-50 bg-white/90 backdrop-blur text-[#97A87A] text-[18px] rounded-xl p-5 text-sm">
                Join a session
            </button>
        </div>
        <div className="absolute top-125 -left-4 w-72 h-100 bg-[#FFF] border-white z-20 rounded-2xl p-5 text-sm overflow-hidden"/>
        <div className="absolute top-130 -left-8 w-72 h-100 bg-[#97A87A] border-white z-20 rounded-2xl p-5 text-sm overflow-hidden"/>
        <div className="absolute top-155 left-7 w-87 h-full bg-[#97A87A] rounded-xl z-30 p-5 text-sm"/>
        <div className="absolute top-150  w-87 h-full bg-[#97A87A] border-white rounded-xl p-5 text-sm"/>
        <div className="absolute top-150 left-9 w-90 h-full bg-[#FFF] border-white border-10 rounded-2xl p-5 text-sm"/>
        {/* Right info card */}
        <div className="absolute bottom-8 right-8 bg-white/90 backdrop-blur rounded-xl p-5 text-sm">
          <p className="font-semibold mb-2">why? Choose PiclePlay</p>
          <ul className="space-y-1 text-gray-600">
            <li>• fast transaction</li>
            <li>• no ads</li>
            <li>• easy to locate</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
