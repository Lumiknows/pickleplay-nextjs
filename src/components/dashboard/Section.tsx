import bgLeft from "@/assets/background/tennis.jpg"
import Image from "next/image"

export default function SectionTab(){
    return(
        <div className="relative w-full h-screen">
            <Image
            src={bgLeft}
            alt="tennis background"
            fill
            priority
        />
        </div>
    );
}