import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className="container mx-auto py-12 mt-8 px-2 md:px-3 flex flex-col sm:flex-row items-center sm:items-start justify-center sm:justify-between gap-8 sm:gap-0">
            <div className="flex flex-col items-center sm:justify-start justify-center gap-0 w-fit opacity-50">
                <h1 className="font-bodoni text-3xl sm:text-4xl lg:text-4xl font-bold">
                    WIZE
                </h1>
                <span className="text-[10px] font-normal pl-2 tracking-[5px] sm:tracking-[10px]">
                    WINERY
                </span>
            </div>
            <div className="flex flex-col gap-2 w-fit text-center">
                <div className="flex gap-8 text-lg text-orange-200">
                    <FaFacebookF />
                    <FaTwitter />
                    <FaTelegram />
                    <FaYoutube />
                    <FaTiktok />
                </div>
                <span className="text-[10px] font-normal text-gray-200">
                    &copy;2025 WIZE. All rights reserved.
                </span>
            </div>
        </footer>
    );
};

export default Footer;
