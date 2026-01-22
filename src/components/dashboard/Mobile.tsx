"use client";

import Image from "next/image";
import mobile from "@/assets/background/phone.png";
import bg from "@/assets/background/phone-bg.png";

export default function Mobile() {
  return (
    <section className="relative w-full h-[720px] bg-[#F0EBE5] overflow-hidden">
      <div className="absolute top-56 left-20 z-20">
        <h1 className="text-black font-league text-[50px] leading-tight">
          Download and book on our app
        </h1>
      </div>
      <div className="absolute -right-130 top-1/2 -translate-y-1/2 w-full h-full z-0">
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
