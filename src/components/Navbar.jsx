import React from "react";

const Navbar = () => {
    return (
        <nav className="w-full flex items-center justify-between py-2">
            {/* logo text */}
            <div className="flex flex-col items-start justify-center gap-0 w-full">
                <h1 className="font-bodoni text-3xl sm:text-4xl lg:text-4xl font-bold">
                    WIZE
                </h1>
                <span className="text-[10px] font-normal pl-2 tracking-[5px] sm:tracking-[10px]">WINERY</span>
            </div>
        </nav>
    );
};

export default Navbar;
