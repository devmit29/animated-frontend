import { Button } from "./ui/button";
import rainbow from "@/assets/products/rainbow600.png";
import bigbull from "@/assets/products/bigbull1300.png";
import rio from "@/assets/products/rio650.png";
import rome from "@/assets/products/rome600.png";
import Image from "next/image";

const Products = () => {
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

    ]
    return (
        <section className="flex flex-col w-full items-center justify-center min-h-screen sm:px-24 py-2 mt-32 pb-16">
            <div className="flex flex-col sm:flex-row items-center justify-between w-full py-2 px-4">
                <div className="flex items-center w-full">
                    <div className="flex flex-col justify-center">
                        <h1 className="text-4xl text-left font-bold">Hydration Essentials</h1>
                        <p className="text-lg font-normal text-left mt-4">Discover Our Range of Premium Water Bottles</p>
                    </div>
                </div>
                <div>
                    <Button variant="gradient" className="rounded-full mt-8 sm:mt-0 text-xl font-normal py-6 px-8" size="lg">Shop Now</Button>
                </div>
            </div>
            <div className="flex flex-wrap justify-between gap-y-8 w-full mt-8">
                {products.map((product, index) => (
                    <div key={index} className="flex flex-col items-center sm:w-1/2 lg:w-1/3 p-4">
                        <div className="flex justify-startr w-full">
                            <Image src={product.image} alt={product.name} className="rounded-xl" />
                        </div>
                        <div className="flex justify-start w-full">
                            <p className="text-lg font-bold mt-4">{product.name}</p>
                        </div>
                        <div className="flex justify-start w-full mt-2">
                            <Button variant={'gradient'} className="py-6 px-8 text-lg font-medium uppercase rounded-full">Learn More</Button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Products;