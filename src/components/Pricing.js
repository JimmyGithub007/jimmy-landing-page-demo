import { useContext } from "react";
import { MenuContext } from "../pages/DemoOne";

const pricing = [
    { title: "Basic", price: "$199" },
    { title: "Pro", price: "$399" },
    { title: "Enterprise", price: "$899" }
];

const Pricing = () => {
    const menuContext = useContext(MenuContext);

    return (<div id="pricing" className={`bg-indigo-100 min-h-screen sm:-mt-16 grid content-center pb-12 duration-300`} ref={menuContext.pricingRef}>
        <span className="font-bold py-8 text-center text-gray-800 text-2xl">
            <span className="font-light">Our</span> Pricing
        </span>
        <div className="flex flex-col justify-center md:flex-row">
            {
                pricing.map((value, key) => (
                    <div className={`bg-white duration-300 md:max-w-min w-full origin-bottom overflow-hidden rounded shadow-lg ${key === 1 && "bg-indigo-500 md:scale-105 z-10"} ${menuContext.menuId === "pricing" ? "mt-0 opacity-100" : `-mb-10 opacity-0`}`} key={key}>
                        <div className="px-6 py-4">
                            <h1 className={`font-semibold text-xl text-${key === 1 ? "white" : "gray-500"}`}>{value.title}</h1>
                            <div className="text-center py-4 px-7">
                                <h1 className={`text-4xl font-black text-${key === 1 ? "white" : "gray-700"}`}>{value.price}</h1>
                                <p className={`mt-2 text-${key === 1 ? "white" : "gray-500"}`}>Monthly</p>
                            </div>
                            <div className="h-px bg-gray-200"></div>
                            <div className="text-center my-3">
                                <p className={`text-sm text-${key === 1 ? "white" : "gray-400"}`}>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                </p>
                            </div>
                            <div className="text-center">
                                <button className="active:border-b-2 active:mt-[2px] border-b-4 border-indigo-500 bg-indigo-400 duration-100 hover:bg-indigo-300 px-4 py-1 rounded-full shadow-md text-white w-48">
                                    More Details
                                </button>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>)
}

export default Pricing;