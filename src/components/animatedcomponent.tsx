import background from "@/assets/backGroundimage.png";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import rainbow from "@/assets/products/rainbow600.svg";
import bigbull from "@/assets/products/bigbull1300.svg";
import rio from "@/assets/products/rio650.svg";
import rome from "@/assets/products/rome600.svg";
import Footer from "./footer";

const AnimatedComponent = () => {
    const targetRef = useRef<HTMLDivElement | null>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);
    const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.2]);

    return (
        <section ref={targetRef} className="relative w-full h-[300vh]">
            <div className="sticky top-0 flex flex-col h-screen items-center overflow-hidden"
            >
                <motion.div className="h-[100vh] flex justify-center items-center relative"
                    style={{
                        width: "100%",
                    }}
                >
                    <motion.div
                        style={{
                            backgroundImage: `url(${background.src})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            width: "100%",
                            height: "100%",
                            opacity: opacity,
                            position: "absolute",
                            top: 0,
                            left: 0,
                            zIndex: -1,
                        }}
                    />
                    <motion.div style={{ x }} className="flex gap-4 w-full relative">

                        {/* {products.map((product, index) => (
                            <div key={index} className="flex-shrink-0 w-1/3">
                                <img src={product.image.src} alt={product.name} />
                                <p>{product.name}</p>
                            </div>
                        ))} */}
                    </motion.div>
                </motion.div>
                <div className="w-full ">
                    <Footer />
                </div>
            </div>
        </section>
    );
};

export default AnimatedComponent;

// Product Data
const products = [
    {
        name: "Rainbow 600",
        image: rainbow,
    },
    {
        name: "Rio 650",
        image: rio,
    },
    {
        name: "Big Bull 1300",
        image: bigbull,
    },
    {
        name: "Rome 600",
        image: rome,
    },
    {
        name: "Rainbow 600",
        image: rainbow,
    },
    {
        name: "Rio 650",
        image: rio,
    },
];