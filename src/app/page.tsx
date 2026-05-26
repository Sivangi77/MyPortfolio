import Navbar from "@/components/Navbar";
import Hero from "@/sections/Hero";

export default function Home() {
  return (
    <main className="bg-neutral-950 text-white selection:bg-blue-500/30">
      <Navbar />
      <Hero />
      
      <div className="min-h-screen"></div> 
    </main>
  );
}