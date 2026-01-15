import Hero from "@/components/dashboard/Hero";
import SectionTab from "@/components/dashboard/Section";

export default function Home (){
    return(
        <main className="min-h-screen bg-white">  
          <Hero />  
          <SectionTab />
        </main>
    );

}