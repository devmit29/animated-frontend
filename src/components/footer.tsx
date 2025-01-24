import Image from "next/image";
import logo from "@/assets/logowhite.svg"
import facebook from "@/assets/footer/facebook.svg"
import instagram from "@/assets/footer/instagram.svg"
import x from "@/assets/footer/x.svg"

const Footer = () => {
    return (
        <footer className="flex flex-col w-full justify-between items-center bg-[#201F1F] text-white pt-6 md:pt-10 pb-0">
            <div className="flex flex-col md:flex-row justify-between w-full px-4 md:px-12 lg:px-24 gap-6 md:gap-0">
                <div className="flex justify-center md:justify-start">
                    <Image src={logo} alt="logo" width={150} height={40} className="w-[150px] md:w-[200px]" />
                </div>
                <nav className="flex justify-center md:justify-between items-center">
                    <ul className="flex flex-wrap justify-center md:justify-between items-center">
                        <li className="mx-2 md:mx-4 font-normal cursor-pointer text-base md:text-lg lg:text-xl">Shop</li>
                        <li className="mx-2 md:mx-4 font-normal cursor-pointer text-base md:text-lg lg:text-xl">Contact us</li>
                        <li className="mx-2 md:mx-4 font-normal cursor-pointer text-base md:text-lg lg:text-xl">About</li>
                        <li className="mx-2 md:mx-4 font-normal cursor-pointer text-base md:text-lg lg:text-xl">Journal</li>
                        <li className="mx-2 md:mx-4 font-normal cursor-pointer text-base md:text-lg lg:text-xl">Custom</li>
                    </ul>
                </nav>
            </div>

            <div className="flex flex-col md:flex-row justify-between w-full px-4 md:px-12 lg:px-24 gap-6 md:gap-0 my-6">
                <div className="flex justify-center md:justify-start gap-x-4 items-center">
                    <Image src={facebook} alt="facebook" width={28} height={28} className="w-[28px] cursor-pointer md:w-[33px]" />
                    <Image src={instagram} alt="instagram" width={28} height={28} className="w-[28px] cursor-pointer md:w-[33px]" />
                    <Image src={x} alt="x" width={28} height={28} className="w-[28px] cursor-pointer md:w-[33px]" />
                </div>
                <nav className="flex justify-center md:justify-between items-center">
                    <ul className="flex flex-wrap justify-center md:justify-between items-center">
                        <li className="mx-2 md:mx-4 font-normal cursor-pointer text-base md:text-lg lg:text-xl">FAQ's</li>
                        <li className="mx-2 md:mx-4 font-normal cursor-pointer text-base md:text-lg lg:text-xl">Returns</li>
                        <li className="mx-2 md:mx-4 font-normal cursor-pointer text-base md:text-lg lg:text-xl">Ordering</li>
                        <li className="mx-2 md:mx-4 font-normal cursor-pointer text-base md:text-lg lg:text-xl">Shipping</li>
                        <li className="mx-2 md:mx-4 font-normal cursor-pointer text-base md:text-lg lg:text-xl">Personalization Policies</li>
                    </ul>
                </nav>
            </div>

            <div className="flex justify-center w-full bg-[#323232] px-4">
                <p className="text-center text-[#858585] text-sm md:text-base my-2">Copyright © 2023 BOTOL. All rights reserved</p>
            </div>
        </footer>
    );
}

export default Footer;