import Image from 'next/image';
import vaccum from "@/assets/bottlepreview/vaccum.svg";
import fridge from "@/assets/bottlepreview/fridge.svg";
import borosil from "@/assets/bottlepreview/borosil.svg";
import kettle from "@/assets/bottlepreview/kettle.svg";
import bottle from "@/assets/bottlepreview/bottleImage.svg";

const BottlePreview = () => {
    const products = [
        { icon: vaccum, title: "Vaccum Bottles" },
        { icon: fridge, title: "Fridge Bottles & Jugs" },
        { icon: borosil, title: "Borosillicate Bottles" },
        { icon: kettle, title: "Kettles" },
    ];

    return (
        <div className="flex flex-row w-full">
            {/* Bottle Image Section */}
            <div className="w-full lg:w-1/2 flex items-center justify-center bg-white">
                <div className="relative w-full h-full min-h-screen">
                    <Image
                        src={bottle}
                        alt="bottle"
                        fill
                        className="object-cover 2xl:object-fill"
                        priority
                        sizes="(max-width: 768px) 100vw, 50vw"
                    />
                </div>
            </div>

            {/* Products List Section */}
            <div className="w-full lg:w-1/2 bg-[#20292C] min-h-screen flex justify-center items-center ">
                <div className="flex justify-center items-center w-full h-full p-4 sm:p-8 md:p-16 lg:p-20">
                    <div className='flex flex-col gap-8 md:gap-12 lg:gap-16 w-3/4 max-w-2xl'>
                        {products.map((product, index) => (
                            <div
                                key={index}
                                className='flex items-center space-x-4 hover:scale-105 transition-transform duration-300'
                            >
                                <Image
                                    src={product.icon}
                                    alt={product.title}
                                    className="w-12 h-12 sm:w-16 sm:h-16 lg:w-[70px] lg:h-[70px]"
                                />
                                <p className='text-white text-sm sm:text-xl md:text-2xl lg:text-4xl font-normal'>
                                    {product.title}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BottlePreview;