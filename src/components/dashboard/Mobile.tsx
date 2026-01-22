"use client";

import Image from "next/image";
import mobile from "@/assets/background/phone.png";
import bg from "@/assets/background/phone-bg.png";
import appStore from "@/assets/background/applestore.png";
import googlePlay from "@/assets/background/googleplay.png";

export default function Mobile() {
  return (
    <section className="relative w-full h-[720px] bg-[#F0EBE5] overflow-hidden">
      <div className="absolute top-56 left-20 z-20">
        <h1 className="text-black font-league text-[50px] leading-tight">
          Download and book on our app
        </h1>
        <h2 className="text-black font-league text-[25px]">
            Book your pickleball court or join a session faster <br /> 
            and more easily with our mobile app. Enjoy quick<br /> 
            access, a smooth booking experience, and<br /> 
            everything you need in one place.
        </h2>
        <div className="flex gap-4 mt-6">
            <Image
            src={appStore}
            alt="app store"
            width={200}
            height={100}
            />
            <Image
            src={googlePlay}
            alt="google play"
            width={200}
            height={100}
            />
        </div>
      </div>
      <div className="absolute -right-121 top-1/2 -translate-y-1/2 w-full h-full z-0">
        <Image
          src={bg}
          alt="phone background"
          fill
          priority
          className="object-contain"
        />
      </div>
      <div className="absolute right-90 top-1/2 -translate-y-1/2 w-[320px] h-[620px] z-10">
        <Image
          src={mobile}
          alt="mobile"
          fill
          priority
          className="object-contain"
        />
      </div>

    </section>
  );
}
