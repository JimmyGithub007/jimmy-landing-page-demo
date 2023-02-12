import Typewriter from 'typewriter-effect';

const Home = () => {
    return (<div id="home" className="animate-opacity bg-bottom bg-contain bg-no-repeat duration-500 flex h-[calc(100vh-64px)] xl:items-center md:bg-auto xl:bg-right" style={{ backgroundImage: `url('./images/undraw_launch_day_4e04.svg')` }}>
        <div className="flex flex-col max-w-md px-4 py-2 gap-4">
            <span className="font-bold text-xl lg:text-2xl xl:text-3xl text-indigo-500">
                <Typewriter
                    options={{
                        strings: ['', 'Make Your Marketing Real.'],
                        autoStart: true,
                        loop: true,
                    }}
                />
            </span>
            <span className="text-base text-gray-600 xl:text-lg">
                Ut enim ad minima veniam quis nostrum exercitationem ullam corporis at suscipit laboriosam nisi ut aliquid a commodi consequatur Quis autem.
            </span>
            <button className="flex relative w-fit">
                <span className="border-2 border-indigo-500 bg-white font-bold h-full px-2 py-1 rounded-md text-indigo-500 w-full z-10 active:translate-x-1 active:translate-y-1">More Details</span>
                <div className="absolute bg-indigo-500 h-full left-1 rounded-md top-1 w-full shadow-lg"></div>
            </button>
        </div>
    </div>)
}

export default Home;