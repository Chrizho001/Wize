import { LuGrape } from "react-icons/lu";
import { FaWineBottle } from "react-icons/fa6";
import { PiWineFill } from "react-icons/pi";
import { GiCorkscrew } from "react-icons/gi";

const Philosophy = ({openForm}) => {
    return (
        <section className="container mx-auto px-2 md:px-3 flex flex-col items-center justify-center py-12 mt-8 gap-y-4">
            {/* header text */}
            <div className="flex flex-col items-center justify-center text-center w-fit gap-4 py-4">
                <h1 className="font-bodoni font-semibold text-xl sm:text-2xl lg:text-3xl">
                    Winemaking Philosophy
                </h1>
                <div className="w-[50%] bg-orange-300 h-[0.5px]"></div>
            </div>

            {/* features */}
            <div className="grid grid-cols-2 sm:grid-cols-4 w-full sm:w-[90%] lg:w-[80%] gap-4 md:gap-8 lg:gap-12 xl:gap-16 place-content-center py-8 mt-4">
                <div className="flex flex-col gap-4 items-center justify-center text-center">
                    <span className="text-4xl text-orange-300">
                        <LuGrape />
                    </span>
                    <h3 className="font-bodoni text-lg sm:text-xl font-semibold">
                        Vineyard
                    </h3>
                    <span className="text-[12px]  font-normal text-gray-200 text-pretty leading-snug">
                        We sought to create the finest wines from our rich
                        vineyards, which have been expertly grown.
                    </span>
                </div>
                <div className="flex flex-col gap-4 items-center justify-center text-center">
                    <span className="text-4xl text-orange-300">
                        <FaWineBottle />
                    </span>
                    <h3 className="font-bodoni text-lg sm:text-xl font-semibold">
                        Wine Store
                    </h3>
                    <span className="text-[12px]  font-normal text-gray-200 text-pretty leading-snug">
                        We sought to create the finest wines from our rich
                        vineyards, which have been expertly grown.
                    </span>
                </div>
                <div className="flex flex-col gap-4 items-center justify-center text-center">
                    <span className="text-4xl text-orange-300">
                        <PiWineFill />
                    </span>
                    <h3 className="font-bodoni text-lg sm:text-xl font-semibold">
                        Restaurant
                    </h3>
                    <span className="text-[12px]  font-normal text-gray-200 text-pretty leading-snug">
                        We sought to create the finest wines from our rich
                        vineyards, which have been expertly grown.
                    </span>
                </div>
                <div className="flex flex-col gap-4 items-center justify-center text-center">
                    <span className="text-4xl text-orange-300">
                        <GiCorkscrew />
                    </span>
                    <h3 className="font-bodoni text-lg sm:text-xl font-semibold">
                        Our Story
                    </h3>
                    <span className="text-[12px]  font-normal text-gray-200 text-pretty leading-snug">
                        We sought to create the finest wines from our rich
                        vineyards, which have been expertly grown.
                    </span>
                </div>
            </div>

            <div className="flex flex-col sm:flex-row w-full gap-4 h-full  sm:h-[300px] md:h-[450px] lg:h-[450px] sm:overflow-hidden items-center justify-center">
                <div className="w-full sm:w-[30%] h-full">
                    <img
                        src={"/white2.jpg"}
                        className="object-cover w-full h-[350px] sm:h-full"
                        alt=""
                    />
                </div>

                <div className="w-full sm:w-[60%] h-full bg-zinc-700 p-8 lg:p-16 flex flex-col gap-y-4">
                    <span className="text-[10px] font-semibold text-orange-300">
                        SINCE 1980
                    </span>
                    <div className="flex flex-col items-start justify-start text-center w-fit gap-4 ">
                        <h1 className="font-bodoni font-semibold text-lg sm:text-xl lg:text-2xl">
                            Perfect White Wines
                        </h1>
                        <div className="w-[30%] bg-orange-300 h-[0.5px]"></div>
                    </div>
                    <span className="text-sm font-normal text-gray-200 text-pretty">
                        After the harvest, the grapes are taken into a variety
                        and prepared for primary ferment. At this stage the red
                        wine making diverges from white wine making.
                    </span>
                    <ul className="px-4 flex flex-col gap-6 text-sm font-normal py-4">
                        <li className="flex gap-4 items-center">
                            <LuGrape className="text-sm text-orange-200" />{" "}
                            Chardonnay
                        </li>
                        <li className="flex gap-4 items-center">
                            <LuGrape className="text-sm text-orange-200" />{" "}
                            Souvignon Blanc
                        </li>
                        <li className="flex gap-4 items-center">
                            <LuGrape className="text-sm text-orange-200" />{" "}
                            Riesling
                        </li>
                    </ul>
                    <button onClick={openForm} className="w-fit border border-orange-200 px-6 py-2 text-[12px] font-semibold cursor-pointer hover:bg-orange-200 hover:text-bg transition-all duration-300 ease-in-out">
                        PLACE AN ORDER
                    </button>
                </div>
            </div>
            <div className="flex flex-col sm:flex-row-reverse w-full gap-4 h-full  sm:h-[300px] md:h-[450px] lg:h-[450px] sm:overflow-hidden items-center justify-center">
                <div className="w-full sm:w-[30%] h-full">
                    <img
                        src={"/red2.jpg"}
                        className="object-cover w-full h-[350px] sm:h-full"
                        alt=""
                    />
                </div>

                <div className="w-full sm:w-[60%] h-full bg-black p-8 lg:p-16 flex flex-col gap-y-4">
                    <span className="text-[10px] font-semibold text-orange-300">
                        SINCE 1980
                    </span>
                    <div className="flex flex-col items-start justify-start text-center w-fit gap-4 ">
                        <h1 className="font-bodoni font-semibold text-lg sm:text-xl lg:text-2xl">
                            Excellent Red Wines
                        </h1>
                        <div className="w-[30%] bg-orange-300 h-[0.5px]"></div>
                    </div>
                    <span className="text-sm font-normal text-gray-200 text-pretty">
                        After the harvest, the grapes are taken into a variety
                        and prepared for primary ferment. At this stage the red
                        wine making diverges from white wine making.
                    </span>
                    <ul className="px-4 flex flex-col gap-6 text-sm font-normal py-4">
                        <li className="flex gap-4 items-center">
                            <LuGrape className="text-sm text-orange-200" />{" "}
                            Carbernet Sauvignon
                        </li>
                        <li className="flex gap-4 items-center">
                            <LuGrape className="text-sm text-orange-200" />{" "}
                            Prince Noir
                        </li>
                        <li className="flex gap-4 items-center">
                            <LuGrape className="text-sm text-orange-200" />{" "}
                            Marlot
                        </li>
                    </ul>
                    <button onClick={openForm} className="w-fit border border-orange-200 px-6 py-2 text-[12px] font-semibold cursor-pointer hover:bg-orange-200 hover:text-bg transition-all duration-300 ease-in-out">
                        PLACE AN ORDER
                    </button>
                </div>
            </div>


        </section>
    );
};

export default Philosophy;
