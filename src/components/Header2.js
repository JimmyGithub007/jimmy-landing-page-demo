import { useContext } from "react";
//import { AiOutlineMenu } from "react-icons/ai";
import { SiReact } from "react-icons/si"
import { RiQuestionAnswerFill } from "react-icons/ri"
import { MenuContext } from "../pages/DemoTwo";

/*const menu = [
    { name: "Home", target: "home" },
    { name: "Features", target: "features" },
    { name: "Our Team", target: "team" },
    { name: "Pricing", target: "pricing" }
];*/

const Header = () => {
    const menuContext = useContext(MenuContext);
    //const [ open, setOpen ] = useState(false);

    return (<>
        <div id="header" className={`duration-200 sticky top-0 z-20 p-4 ${menuContext.scrollY > 0 && "sm:backdrop-blur-sm sm:bg-white/[0.6] sm:px-4 sm:py-3 sm:shadow-md"}`}>
            <div className="flex justify-between h-full sm:h-auto">
                <div id="logo" className="hidden items-center sm:flex text-indigo-500 text-xl">
                    <div className="bg-indigo-500 rounded-full p-1 text-white">
                        <SiReact />
                    </div>
                    <span className="font-bold ml-2 mr-1">DEMO</span><span className="bg-indigo-500 rounded-bl-xl px-2 text-white">TWO</span>
                </div>
                {/*<div className="bg-indigo-500 hidden p-1 rounded-full sm:flex">
                    {
                        menu.map((value, key) => (
                            <a className={`duration-100 px-4 py-1 rounded-full hover:bg-indigo-300 text-white`} href={`#${value.target}`} key={key}>{value.name}</a>
                        ))
                    }
                </div>
                <button onClick={() => setOpen(true)} className="duration-100 block bg-indigo-500 hover:bg-indigo-400 p-3 mx-4 sm:mx-0 rounded-b-full shadow-lg sm:hidden text-white h-max hover:h-auto"><AiOutlineMenu /></button>*/}
                <a href="#faq" className="flex relative w-fit">
                    <span className="border-2 border-indigo-500 bg-white flex gap-2 items-center font-bold h-full px-2 py-1 rounded-md text-indigo-500 w-full z-10 active:translate-x-1 active:translate-y-1">
                        <RiQuestionAnswerFill />
                        FAQ
                    </span>
                    <div className="absolute bg-indigo-500 h-full left-1 rounded-md top-1 w-full shadow-lg"></div>
                </a>
            </div>
        </div>
        {/*<div className={`duration-500 fixed bg-indigo-500 z-20 top-0 left-0 min-w-full ${open ? "m-0 sm:-mt-[264px]" : "-mt-[264px]"}`}>
            <div className="flex flex-col text-center py-8">
                {
                    menu.map((value, key) => (
                        <a href={`#${value.target}`} key={key} className={`duration-200 py-2 hover:bg-gray-200 hover:text-indigo-500 text-white`}>{value.name}</a>
                    ))
                }
                <button onClick={() => setOpen(false) } className={`duration-200 py-2 hover:bg-gray-200 hover:text-indigo-500 text-white`}>X</button>
            </div>
        </div>*/}
    </>)
}

export default Header;