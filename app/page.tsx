"use client";
import Experience from "@/components/Experience";
import Featured from "@/components/Featured";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import Process from "@/components/Process";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";

export default function Home() {
  return (
    <main className="relative flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 bg-gradient-to-br bg-slate-950">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <Featured />
        <Experience />
        <Process />
        <Footer />
      </div>

    </main>
  );
}

