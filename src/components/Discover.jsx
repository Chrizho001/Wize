import React from "react";

const Discover = ({openForm}) => {
    return (
        <section
            className="w-full min-h-[400px] px-2 md:px-3 py-4 mt-8 bg-center bg-cover relative flex items-center justify-center"
            style={{
                backgroundImage: `url('/discover.jpg')`,
                backgroundAttachment: "fixed",
            }}
        >
            <div className="absolute inset-0 bg-bg/70"></div>
            <div className="relative z-50 container mx-auto flex flex-col items-center justify-center h-full gap-4 ">
                {/* header text */}
                <div className="flex flex-col items-center justify-center text-center w-fit gap-4 py-4">
                    <h1 className="font-bodoni font-semibold text-xl sm:text-2xl lg:text-3xl">
                        Discover. Taste. Enjoy
                    </h1>
                    <div className="w-[50%] bg-orange-300 h-[0.5px]"></div>
                </div>

                <span className="text-center text-pretty w-full sm:w-[60%] md:w-[50%] lg:w-[40%] text-[12px] font-normal">
                    Elevate Every Toast with Wines That Don&apos;t Just
                    Pour—They Perform. From vine to victory lap, every bottle
                    tells a story of soil, season, and soul. Secure your seat at
                    the table; order the collection that captivates.
                </span>
                <button onClick={openForm} className="w-fit border border-orange-200 px-6 py-2 text-[12px] font-semibold cursor-pointer hover:bg-orange-200 hover:text-bg transition-all duration-300 ease-in-out">
                    PLACE AN ORDER
                </button>
            </div>
        </section>
    );
};

export default Discover;
