import React from "react";

const Newsletter = () => {
    return (
        <section className="container mx-auto py-8 mt-4 px-2 md:px-3 flex flex-col items-center justify-center text-center gap-8">
            <div className="w-full sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[50%] h-[0.5px] bg-gray-600 "></div>
            <div className="w-[90%] sm:w-[70%] md:w-[60%] lg:w-[50%] xl:w-[40%] flex flex-col gap-y-4">
                <h1 className="font-bodoni font-semibold text-xl sm:text-2xl lg:text-3xl">
                    Subscribe for newsletter
                </h1>
                <span className="text-[12px] font-normal text-pretty">
                    Get updates by subscribing to our weekly newsletter to
                    recieve the latest news, events & promotions.
                </span>
                <div className="flex flex-col sm:flex-row gap-4">
                    <input
                        className="w-full sm:w-[65%] px-4 py-4 text-[12px] font-normal bg-gray-700 rounded-sm focus:ring-0 ring-0 outline-orange-300"
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        id=""
                    />
                    <button className="w-fit border border-orange-200 px-6 py-2 text-[12px] font-semibold cursor-pointer hover:bg-orange-200 hover:text-bg transition-all duration-300 ease-in-out">
                        SUBSCRIBE
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Newsletter;
