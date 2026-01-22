import Hero from "@/components/dashboard/Hero";
import Mobile from "@/components/dashboard/Mobile";
// import SectionTab from "@/components/dashboard/Section";

export default function Home (){
    return(
        <main className="min-h-screen bg-white">  
          <Hero /> 
          <Mobile /> 
          {/* <SectionTab /> */}
        </main>
    );

}