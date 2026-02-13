import React from "react";
import Navbar from "./Navbar";

const Hero = ({openForm}) => {
    return (
        <section
            className="w-full bg-center bg-cover relative"
            style={{
                backgroundImage: `url('/bg.jpg')`,
                backgroundAttachment: "fixed",
            }}
        >
            <div className="absolute inset-0 bg-bg/80"></div>
            <header className="container mx-auto min-h-screen md:min-h-[50vh] lg:min-h-screen  px-2 md:px-3 py-2 flex flex-col gap-4 relative z-10 ">
                <Navbar />
                {/* hero content */}
                <div className="flex flex-col sm:flex-row gap-8 w-full h-full items-center justify-center py-8">
                    {/* text */}
                    <div className="flex flex-col w-fit ">
                        <span className="text-[12px] font-normal text-orange-300 font-montserrat">
                            EXCELLENT WINE COLLECTION
                        </span>
                        <h1 className="text-4xl sm:text-3xl md:text-5xl lg:text-6xl font-bodoni font-semibold ">
                            The Wine Country
                        </h1>
                        <div className="flex py-2 mt-4 gap-2 sm:gap-4 items-start justify-start w-full">
                            <div className="w-[50px] md:w-20 lg:w-[120px] h-0.5 bg-gray-200 mt-2"></div>
                            <span className="text-[12px]  font-normal tracking-tight text-pretty">
                                We introduce excellent collection of white and
                                red wines. <br />
                                Feel the scent of sun and happiness.
                            </span>
                        </div>
                        <div className="w-full  flex justify-end items-end py-4 p-8">
                            <button onClick={openForm} className="w-fit border border-orange-200 p-4 text-[12px] font-semibold cursor-pointer hover:bg-orange-200 hover:text-bg transition-all duration-300 ease-in-out">
                                PLACE AN ORDER
                            </button>
                        </div>
                    </div>

                    {/* IMAGE */}
                    <div className="">
                        <img
                            src={"/hero1.png"}
                            className="object-cover w-full h-[350px] lg:h-[500px] xl:h-[550px] 2xl:h-[650px]"
                            alt=""
                        />
                    </div>
                </div>
            </header>
        </section>
    );
};

export default Hero;
