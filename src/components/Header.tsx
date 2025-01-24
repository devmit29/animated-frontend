import Image from "next/image";
import logo from "@/assets/logo.svg";
import { Button } from "./ui/button";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // Install lucide-react if not already installed

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="top-0 z-50 bg-white">
            <div className="container mx-auto mt-5 flex items-center justify-between px-4 md:px-20 pt-4">
                <Image
                    src={logo}
                    alt="logo"
                    width={174}
                    height={40}
                    className="w-32 md:w-[174px]"
                />

                {/* Mobile Menu Button */}
                <button
                    className="lg:hidden"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex justify-between items-center">
                    <ul className="flex justify-between items-center">
                        <li className="mx-4 font-normal text-xl">Shop</li>
                        <li className="mx-4 font-normal text-xl">Contact us</li>
                        <li className="mx-4 font-normal text-xl">About</li>
                        <li className="mx-4 font-normal text-xl">Journal</li>
                        <li className="mx-4 font-normal text-xl">Custom</li>
                    </ul>
                    <Button
                        variant="gradient"
                        className="rounded-full ml-8 text-xl font-normal py-6 px-8"
                        size="lg"
                    >
                        Inquiry Now
                    </Button>
                </nav>

                {/* Mobile Navigation Overlay */}
                {isMenuOpen && (
                    <div className="fixed inset-0 bg-white z-50 lg:hidden">
                        <div className="container mx-auto px-4 pt-20">
                            <ul className="flex flex-col items-center space-y-8">
                                <li className="text-xl font-normal">Shop</li>
                                <li className="text-xl font-normal">Contact us</li>
                                <li className="text-xl font-normal">About</li>
                                <li className="text-xl font-normal">Journal</li>
                                <li className="text-xl font-normal">Custom</li>
                                <li>
                                    <Button
                                        variant="gradient"
                                        className="rounded-full text-xl font-normal py-6 px-8"
                                        size="lg"
                                    >
                                        Inquiry Now
                                    </Button>
                                </li>
                            </ul>
                        </div>
                    </div>
                )}
            </div>
        </header>
    )
}

export default Header;