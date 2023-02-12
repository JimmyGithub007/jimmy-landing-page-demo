import { useContext, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { SiReact } from "react-icons/si"
import { MenuContext } from "../pages/DemoOne";

const menu = [
    { name: "Home", target: "home" },
    { name: "Features", target: "features" },
    { name: "Our Team", target: "team" },
    { name: "Pricing", target: "pricing" },
    { name: "Contact Us", target: "contact" }
];

const Header = () => {
    const menuContext = useContext(MenuContext);
    const [ open, setOpen ] = useState(false);

    return (<>
        <div id="header" className={`duration-500 h-16 p-4 sticky top-0 z-20 ${menuContext.scrollY > 0 && "sm:backdrop-blur-sm sm:bg-white/[0.6] sm:h-12 sm:px-4 sm:py-2 sm:shadow-md"}`}>
            <div className="flex justify-end sm:justify-between">
                <div id="logo" className="hidden items-center sm:flex text-indigo-500 text-xl">
                    <div className="bg-indigo-500 rounded-full p-1 text-white">
                        <SiReact />
                    </div>
                    <span className="font-bold ml-2 mr-1">DEMO</span><span className="bg-indigo-500 rounded-bl-xl px-2 text-white">ONE</span>
                </div>
                <div className="flex">
                    {
                        menu.map((value, key) => (
                            <a className={`hidden sm:block duration-100 px-4 py-1 rounded-full hover:bg-indigo-300 hover:text-white ${menuContext.menuId === value.target && "bg-indigo-400 text-white"}`} href={`#${value.target}`} key={key}>{value.name}</a>
                        ))
                    }
                    <button onClick={() => setOpen(true) } className="block sm:hidden bg-indigo-500 p-3 rounded-b-full text-white hover:bg-indigo-400 shadow-lg -mr-4 -mt-4"><AiOutlineMenu /></button>
                </div>
            </div>
        </div>
        <div className={`duration-500 fixed bg-indigo-500 z-20 top-0 left-0 min-w-full ${open ? "m-0 sm:-mt-[304px]" : "-mt-[304px]"}`}>
            <div className="flex flex-col text-center py-8">
                {
                    menu.map((value, key) => (
                        <a href={`#${value.target}`} key={key} className={`duration-200 py-2 hover:bg-gray-200 hover:text-indigo-500 text-white ${menuContext.menuId === value.target && "bg-white text-indigo-500"}`}>{value.name}</a>
                    ))
                }
                <button onClick={() => setOpen(false) } className={`duration-200 py-2 hover:bg-gray-200 hover:text-indigo-500 text-white`}>X</button>
            </div>
        </div>
    </>)
}

export default Header;