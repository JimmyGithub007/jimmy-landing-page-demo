import { SiFacebook, SiInstagram, SiTwitter } from "react-icons/si";
import { TiHome, TiMail, TiPhone } from "react-icons/ti";

const FooterDetail = () => {
    return (<div className="min-h-64 p-6 px-12 md:p-12">
        <div className="flex flex-col justify-center md:flex-row gap-8 text-gray-700">
            <div className="max-w-xs">
                <h1 className="font-semibold text-xl">About Us</h1>
                <div className="my-3">
                    <p className="text-sm">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    </p>
                </div>
                <div className="flex">
                    <div className="grid place-content-center bg-blue-500 rounded-full p-2 w-8 h-8 mr-2 shadow-md text-white">
                        <SiFacebook className="cursor-pointer" />
                    </div>
                    <div className="grid place-content-center bg-red-500 rounded-full p-2 w-8 h-8 mr-2 shadow-md text-white">
                        <SiInstagram className="cursor-pointer" />
                    </div>
                    <div className="grid place-content-center bg-blue-400 rounded-full p-2 w-8 h-8 mr-2 shadow-md text-white">
                        <SiTwitter className="cursor-pointer" />
                    </div>
                </div>
            </div>
            <div className="min-w-[200px]">
                <h1 className="font-semibold text-xl">Quick Link</h1>
                <div className="grid gap-4 my-3">
                    <a className="border-indigo-500 duration-100 text-sm hover:border-l-4 hover:pl-2 hover:text-indigo-500" href="/">Contact Us</a>
                    <a className="border-indigo-500 duration-100 text-sm hover:border-l-4 hover:pl-2 hover:text-indigo-500" href="/">FAQ</a>
                    <a className="border-indigo-500 duration-100 text-sm hover:border-l-4 hover:pl-2 hover:text-indigo-500" href="/">Privacy Policy</a>
                    <a className="border-indigo-500 duration-100 text-sm hover:border-l-4 hover:pl-2 hover:text-indigo-500" href="/">Term & Conditions</a>
                </div>
            </div>
            <div>
                <h1 className="font-semibold text-xl">Get in Touch</h1>
                <div className="grid gap-4 my-3">
                    <div className="flex items-center">
                        <div className="grid place-content-center bg-indigo-400 rounded-full p-2 w-8 h-8 mr-2 shadow-md text-white">
                            <TiHome />
                        </div>
                        <span className="text-gray-00 text-sm">2750 Quadra Street Victoria, Canada.</span>
                    </div>
                    <div className="flex items-center">
                        <div className="grid place-content-center bg-indigo-400 rounded-full p-2 w-8 h-8 mr-2 shadow-md text-white">
                            <TiPhone />
                        </div>
                        <span className="text-sm">+60123456789</span>
                    </div>
                    <div className="flex items-center">
                        <div className="grid place-content-center bg-indigo-400 rounded-full p-2 w-8 h-8 mr-2 shadow-md text-white">
                            <TiMail />
                        </div>
                        <span className="text-sm">contact@text.com</span>
                    </div>
                </div>
            </div>
        </div>
    </div>);
}

export default FooterDetail;