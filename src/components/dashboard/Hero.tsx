import Image from "next/image";
import Hero_BG from "@/assets/background/hero_bg.png";

export default function Hero (){
    return(
        <div className="relative">
            <Image
            src={Hero_BG}
            alt="background"
            fill
            priority
            />  
        </div>
    );

}