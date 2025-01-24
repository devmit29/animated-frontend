"use client";
import Image from "next/image";
import Bottle from "@/assets/Bottle-down.svg";
import BottleCap from "@/assets/Bottle-Cap.svg";
import ScrollComponent from "@/components/scrollcomponent";
import Products from "@/components/products";
import Footer from "@/components/footer";
import AnimatedComponent from "@/components/animatedcomponent";

export default function Home() {
  return (
    <div className="flex relative flex-col items-center justify-center min-h-screen w-full">
      <main className="flex relative w-full min-h-fit flex-col items-center">
        <ScrollComponent />
        <Image
          src={BottleCap}
          alt="Bottle Cap"
          className="absolute animate-moveCapUp top-[55vh] sm:top-72 md:top-80 lg:top-96 z-10 
                     w-[150px] sm:w-[200px] md:w-[200px] lg:w-auto"
          priority
        />
        <Image
          src={Bottle}
          alt="Bottle"
          className="absolute animate-moveBottleDown top-[55vh] sm:top-72 md:top-80 lg:top-96 z-10
                     w-[150px] sm:w-[200px] md:w-[200px] lg:w-auto"
          priority
        />
      </main>

      <div className="w-full">
        <Products />
      </div>

      <div className="w-full">
        <AnimatedComponent />
      </div>
    </div>
  );
}