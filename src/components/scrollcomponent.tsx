import Image from "next/image";
import Header from "./Header";
import bottleleft from "../assets/bottleleft.png";
import bottleright from "../assets/bottleright.png";
import BottlePreview from "./bottlepreview";
import { Button } from "./ui/button";

const ScrollComponent = () => {
  return (
    <>
      <div className="relative flex flex-col h-[120vh] w-full animate-scroll will-change-scroll">
        <div className="min-h-screen w-full relative">
          <Header />
          <div className="flex justify-center px-4 mt-40 sm:mt-0 sm:px-6 lg:px-8">
            <div
              className="h-64 w-64 sm:h-80 sm:w-80 md:h-96 md:w-96 mt-20 sm:mt-32 md:mt-40 animate-enlargeCircle"
              style={{
                borderRadius: '50%',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                  background: 'linear-gradient(180deg, #4DFBFB 0%, #788EFF 100%)',
                  borderRadius: '50%',
                  zIndex: -1,
                }}
              />
              <div
                style={{
                  width: 'calc(100% - 16px)',
                  height: 'calc(100% - 16px)',
                  margin: '8px',
                  borderRadius: '50%',
                  background: '#fff',
                }}
              />
            </div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center text-center animate-fadein scale-0 w-full flex-col gap-4 px-4 mb-4 sm:px-6 lg:px-8 z-20">
            <h1 className="text-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold mb-4 max-w-[90%] sm:max-w-[80%] lg:max-w-[70%]">
              The Ultimate Companion for Hydration
            </h1>
            <div className="w-full flex justify-center flex-col items-center">
              <p className="font-normal text-xl sm:text-2xl md:text-3xl max-w-[90%] sm:max-w-[80%]">
                we believe in the power of hydration.
              </p>
              <p className="font-normal text-xl sm:text-2xl md:text-3xl max-w-[90%] sm:max-w-[80%]">
                Our Mission is simple yet vital
              </p>
            </div>
          </div>
          <div className="absolute mb-4 lg:mb-0 sm:bottom-52 2xl:bottom-56 flex items-center justify-center text-center animate-fadein scale-0 w-full z-20">
            <Button
              variant="gradient"
              className="rounded-full text-xl font-normal py-6 px-8"
              size="lg"
            >
              Inquiry Now
            </Button>
          </div>
          <div className="hidden sm:block">
            <Image
              src={bottleleft}
              alt="scroll"
              width={125}
              height={125}
              className="absolute bottom-14 left-8 sm:left-16 md:left-24 animate-enlarge scale-0"
            />
            <Image
              src={bottleright}
              alt="scroll"
              className="absolute bottom-14 right-8 sm:right-16 md:right-24 animate-enlarge scale-0"
            />
          </div>
        </div>
        <BottlePreview />
      </div>
    </>
  )
}

export default ScrollComponent;