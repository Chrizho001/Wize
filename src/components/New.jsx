import React from "react";

const New = ({openForm}) => {
    return (
        <section className="container mx-auto min-h-[420px] py-12 px-2 mt-12 md:px-3 relative flex items-center justify-center text-center">
            {/* Background Watermark */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
                <span className="text-gray-600 font-semibold text-[15vw] sm:text-[20vw] md:text-[20vw] lg:text-[15vw] opacity-30 select-none">
                    RIESLING
                </span>
            </div>
            {/* main content */}
            <div className="relative z-20 flex flex-col sm:flex-row items-center justify-center p-8 gap-8">
                <div className="flex flex-col items-center justify-center text-center w-fit gap-4  ">
                    <span className="text-[10px] font-normal text-orange-300 ">
                        WHAT'S NEW?
                    </span>
                    <h1 className="font-bodoni font-semibold text-xl sm:text-2xl lg:text-3xl">
                        A Sunny Wine <br />
                        Icon
                    </h1>
                    <div className="w-[30%] bg-orange-300 h-[0.5px]"></div>
                </div>

                <img
                    src={"/wrap.png"}
                    className="w-[150px] sm:w-[200px] lg:w-[220px] xl:w-[230px]"
                    alt=""
                />

                <div className="w-full sm:w-[250px] flex flex-col items-center justify-center gap-4">
                    <span className="text-center text-pretty  text-[12px] font-normal">
                        Taste the Legacy in Every Glass.Generations in the
                        making, seconds to fall in love. Reds that roar, whites
                        that whisper—delivered fresh to your door. Don&apos;t
                        wait for the weekend; start tonight.
                    </span>
                    <button onClick={openForm} className="w-fit border border-orange-200 px-6 py-2 text-[12px] font-semibold cursor-pointer hover:bg-orange-200 hover:text-bg transition-all duration-300 ease-in-out">
                        PLACE AN ORDER
                    </button>
                </div>
            </div>
        </section>
    );
};

export default New;
