const Trial = () => {
    return (<div className="bg-gray-50 flex flex-col gap-4 items-center py-12">
        <span className="font-bold text-xl sm:text-3xl text-gray-700">Start your free trial today</span>
        <span className="font-light text-md sm:text-lg text-gray-500">Try for 30 days. No credit card required.</span>
        <button className="flex relative w-fit">
            <span className="border-2 border-indigo-500 bg-white font-bold h-full px-2 py-1 rounded-md text-indigo-500 w-full z-10 active:translate-x-1 active:translate-y-1">
                Free trial for 30 days
            </span>
            <div className="absolute bg-indigo-500 h-full left-1 rounded-md top-1 w-full shadow-lg"></div>
        </button>
    </div>)
}

export default Trial;