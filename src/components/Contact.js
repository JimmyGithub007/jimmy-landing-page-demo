import { useContext } from "react";
import { MenuContext } from "../pages/DemoOne";

const Contact = () => {
    const menuContext = useContext(MenuContext);

    return (<div id="contact" className={`duration-300 ${menuContext.menuId === "contact" ? "translate-y-0 opacity-100" : "-translate-y-12 opacity-0"} bg-indigo-50 flex h-screen justify-center items-center`} ref={menuContext.contactRef}>
        <div className="animate-opacity bg-white flex flex-col gap-4 px-6 py-4 rounded-lg shadow-lg w-full sm:w-[400px]">
            <span className="font-bold py-8 text-center text-gray-800 text-2xl">
                Contact <span className="font-light">Us</span>
            </span>
            <div className="flex flex-col">
                <span className="text-gray-700">Your Email</span>
                <input className="bg-indigo-50 p-2 rounded-md" type="text" placeholder="name@mail.com" />
            </div>
            <div className="flex flex-col">
                <span className="text-gray-700">Subject</span>
                <input className="bg-indigo-50 p-2 rounded-md" type="text" placeholder="Let us know how we can help you" />
            </div>
            <div className="flex flex-col">
                <span className="text-gray-700">Your message</span>
                <textarea className="bg-indigo-50 p-2 rounded-md" type="text" placeholder="Leave a comment..." />
            </div>
            <span className="text-gray-600 text-xs">
                By submitting this form you agree to our <a className="font-bold text-emerald-500" href="/">terms and conditions</a> and our <a className="font-bold text-emerald-500" href="/">privacy policy</a> which explains how we may collect, use and disclose your personal information including to third parties.
            </span>
            <button className="flex relative w-fit">
                <span className="border-2 border-indigo-500 bg-white font-bold h-full px-2 py-1 rounded-md text-indigo-500 w-full z-10 active:translate-x-1 active:translate-y-1">Send message</span>
                <div className="absolute bg-indigo-500 h-full left-1 rounded-md top-1 w-full shadow-lg"></div>
            </button>
        </div>
    </div>)
}

export default Contact;