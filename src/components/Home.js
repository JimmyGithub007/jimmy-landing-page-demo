import { AiOutlineArrowDown } from "react-icons/ai";

const Home = () => {
    return (<div id="home" className="animate-opacity bg-bottom bg-no-repeat duration-500 h-screen bg-contain md:bg-auto lg:bg-right" style={{ backgroundImage: `url('./images/undraw_experience_design_re_ca7l.svg')` }}>
        <div className="content-center grid h-full -mt-16 lg:max-w-xs xl:max-w-lg">
            <h1 className="px-4 py-2 text-center text-2xl lg:text-3xl xl:text-4xl">
                Make Your Marketing Real.
            </h1>
            <h2 className="font-light px-4 py-2 text-center text-base xl:text-lg">
                Ut enim ad minima veniam quis nostrum exercitationem ullam corporis at suscipit laboriosam nisi ut aliquid a commodi consequatur Quis autem.
            </h2>
            <a href="#features" className="animate-bounce active:border-b-2 active:mt-[2px] border-b-4 border-indigo-500 bg-indigo-400 duration-100 hover:bg-indigo-300 justify-self-center p-3 rounded-full shadow-md text-white">
                <AiOutlineArrowDown />
            </a>
        </div>
    </div>)
}

export default Home;