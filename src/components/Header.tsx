import { motion } from "motion/react";
import { useState } from "react";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.header initial={{ opacity: 0, y: -100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        type: "spring",
                        delay: 0.5,
                        duration: 1,
                        stiffness: 150,
                        damping: 15,
                    }}
                    className="flex justify-between items-center py-3 h-14">
        <h1 className="lg:text-3xl font-bold text-xl">
            <a href="/">React Website</a>
        </h1>

        <nav className="hidden md:block">
            <ul className="flex gap-4 font-medium">
                <li>
                    <a href="#" className="hover:text-blue-700 duration-150">Home</a>
                </li>
                <li>
                    <a href="#about" className="hover:text-blue-700 duration-150">About</a>
                </li>
                <li>
                    <a href="#service" className="hover:text-blue-700 duration-150">Service</a>
                </li>
                <li>
                    <a href="#ourmission" className="hover:text-blue-700 duration-150">Our Mission</a>
                </li>
                <li>
                    <a href="#contact" className="hover:text-blue-700 duration-150">Contact</a>
                </li>
            </ul>
        </nav>

        {/* hamburger menu button */}
        <button className="md:hidden fixed top-0 right-0 mt-8 mr-4 flex flex-col justify-center items-center gap-1 z-50" onClick={toggleMenu}>
            <span className={`h-0.5 w-6 bg-black block transition-all duration-300 ease-out rounded-sm ${isOpen ? "rotate-45 translate-y-2" : "-translate-y-0.5"}`}></span>
            <span className={`h-0.5 w-6 bg-black block transition-all duration-300 ease-out rounded-sm ${isOpen ? "opacity-0" : "opacity-100"}`}></span>
            <span className={`h-0.5 w-6 bg-black block transition-all duration-300 ease-out rounded-sm ${isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"}`}></span>
        </button>

        {/* mobile menu */}
        <div className={`fixed top-0 right-0 w-3/5 bg-white shadow-md transition-all duration-300 ease-in-out z-30 ${isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}`}>
            <nav className="h-screen flex items-center justify-center">
                <ul className="flex flex-col gap-2 h-4/5 text-3xl font-bold mt-2 space-y-2">
                <motion.li
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : 50 }}
                    transition={{ duration: 0.3, delay: 0.1 }}>
                    <a href="#" className="hover:text-blue-700 duration-150" onClick={toggleMenu}>Home</a>
                </motion.li>
                <motion.li
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : 50 }}
                    transition={{ duration: 0.3, delay: 0.2 }}>
                    <a href="#about" className="hover:text-blue-700 duration-150" onClick={toggleMenu}>About</a>
                </motion.li>
                <motion.li
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : 50 }}
                    transition={{ duration: 0.3, delay: 0.3 }}>
                    <a href="#service" className="hover:text-blue-700 duration-150" onClick={toggleMenu}>Service</a>
                </motion.li>
                <motion.li
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : 50 }}
                    transition={{ duration: 0.3, delay: 0.4 }}>
                    <a href="#ourmission" className="hover:text-blue-700 duration-150" onClick={toggleMenu}>Our Mission</a>
                </motion.li>
                <motion.li
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : 50 }}
                    transition={{ duration: 0.3, delay: 0.5 }}>
                    <a href="#contact" className="hover:text-blue-700 duration-150" onClick={toggleMenu}>Contact</a>
                </motion.li>
            </ul>
            </nav>
        </div>
    </motion.header>
  )
}

export default Header