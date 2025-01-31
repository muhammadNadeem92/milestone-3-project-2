import { IoLogoGithub } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6 text-center">
      <h5 className="text-xl font-semibold">
        Muhammad<span className="text-[#ff4500]">Nadeem</span>
      </h5>

      <p className="flex items-center justify-center gap-2 mt-2">
        Follow me on 
        <Link href={'https://github.com/muhammadNadeem92'} ><IoLogoGithub size={20} /></Link> 
        <Link href={'https://linkedin.com/in/muhammad-nadeem-65909a2b5'} ><FaLinkedin size={20} /></Link> 
      </p>

      <p className="mt-2">&copy; 2025 | This website is created by Muhammad Nadeem</p>
    </footer>
  );
};

export default Footer;
