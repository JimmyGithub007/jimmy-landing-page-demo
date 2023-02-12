import { BiWorld } from 'react-icons/bi'
import { FaShoppingCart, FaUsers } from 'react-icons/fa'
import Typewriter from 'typewriter-effect';
import Client from './Client';

const Home = () => {
    return (<div id="home" className="animate-opacity duration-500 flex flex-col gap-4 min-h-screen items-center justify-center -mt-16 pt-8">
        <div className="flex flex-col items-center max-w-lg px-4 py-2 gap-8">
            <img alt="home" className="w-64" src="./images/undraw_modern_professional_re_3b6l.svg" />
            <span className="font-bold text-center text-2xl lg:text-3xl xl:text-4xl text-indigo-500">
                <Typewriter
                    options={{
                        strings: ['', 'Make Your Marketing Real.'],
                        autoStart: true,
                        loop: true,
                    }}
                />
            </span>
            <span className="text-center text-gray-500 xl:text-lg">
                Ut enim ad minima veniam quis nostrum exercitationem ullam corporis at suscipit laboriosam nisi ut aliquid a commodi consequatur Quis autem.
            </span>
            {/*<img src="./images/undraw_relaunch_day_902d.svg" />*/}
        </div>
        <div className="flex flex-wrap justify-center gap-4">
            <div className="flex flex-col w-64 items-center text-center">
                <FaUsers className="text-4xl text-indigo-500" />
                <span className="font-bold text-3xl">200M+</span>
                <span className="font-light text-gray-400 text-sm">Trusted by over 200 milion users around the world</span>
            </div>
            <div className="flex flex-col w-64 items-center text-center">
                <BiWorld className="text-4xl text-indigo-500" />
                <span className="font-bold text-3xl">100+ countries</span>
                <span className="font-light text-gray-400 text-sm">Sold to over 100 countries</span>
            </div>
            <div className="flex flex-col w-64 items-center text-center">
                <FaShoppingCart className="text-4xl text-indigo-500" />
                <span className="font-bold text-3xl">10+ Million</span>
                <span className="font-light text-gray-400 text-sm">Transactions per days</span>
            </div>
        </div>
        <Client />
    </div>)
}

export default Home;