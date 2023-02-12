const QuestionAnswer = () => {
    return (
        <div id="faq" className="bg-indigo-50 flex flex-col items-center gap-4 justify-center py-8 rounded-lg min-h-screen">
            <h4 className="text-4xl font-bold text-gray-800 tracking-widest uppercase text-center">FAQ</h4>
            <p className="text-center text-gray-600 text-sm mt-2">Here are some of the frequently asked questions</p>
            <div className="space-y-12 px-2 xl:px-16 mt-12">
                <div className="mt-4 flex">
                    <div>
                        <div className="flex items-center h-16 border-l-4 border-indigo-500">
                            <span className="text-4xl text-indigo-500 px-4">Q.</span>
                        </div>
                        <div className="flex items-center h-16 border-l-4 border-gray-400">
                            <span className="text-4xl text-gray-400 px-4">A.</span>
                        </div>
                    </div>
                    <div>
                        <div className="flex items-center h-16">
                            <span className="text-lg text-indigo-500 font-bold">Lorem ipsum dolor sit amet?</span>
                        </div>
                        <div className="flex items-center py-2">
                            <span className="text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, dignissimos. Neque eos, dignissimos provident reiciendis debitis repudiandae commodi perferendis et itaque, similique fugiat cumque impedit iusto vitae dolorum. Nostrum, fugit!</span>

                        </div>
                    </div>
                </div>
                <div className="mt-4 flex">
                    <div>
                        <div className="flex items-center h-16 border-l-4 border-indigo-500">
                            <span className="text-4xl text-indigo-500 px-4">Q.</span>
                        </div>
                        <div className="flex items-center h-16 border-l-4 border-gray-400">
                            <span className="text-4xl text-gray-400 px-4">A.</span>
                        </div>
                    </div>
                    <div>
                        <div className="flex items-center h-16">
                            <span className="text-lg text-indigo-500 font-bold">Consectetur adipisicing elit?</span>
                        </div>
                        <div className="flex items-center py-2">
                            <span className="text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, dignissimos. Neque eos, dignissimos provident reiciendis debitis repudiandae commodi perferendis et itaque, similique fugiat cumque impedit iusto vitae dolorum. Nostrum, fugit!</span>

                        </div>
                    </div>
                </div>
                <div className="mt-4 flex">
                    <div>
                        <div className="flex items-center h-16 border-l-4 border-indigo-500">
                            <span className="text-4xl text-indigo-500 px-4">Q.</span>
                        </div>
                        <div className="flex items-center h-16 border-l-4 border-gray-400">
                            <span className="text-4xl text-gray-400 px-4">A.</span>
                        </div>
                    </div>
                    <div>
                        <div className="flex items-center h-16">
                            <span className="text-lg text-indigo-500 font-bold">Neque eos, dignissimos provident reiciendis debitis?</span>
                        </div>
                        <div className="flex items-center py-2">
                            <span className="text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, dignissimos. Neque eos, dignissimos provident reiciendis debitis repudiandae commodi perferendis et itaque, similique fugiat cumque impedit iusto vitae dolorum. Nostrum, fugit!</span>

                        </div>
                    </div>
                </div>
                <div className="mt-4 flex">
                    <div>
                        <div className="flex items-center h-16 border-l-4 border-indigo-500">
                            <span className="text-4xl text-indigo-500 px-4">Q.</span>
                        </div>
                        <div className="flex items-center h-16 border-l-4 border-gray-400">
                            <span className="text-4xl text-gray-400 px-4">A.</span>
                        </div>
                    </div>
                    <div>
                        <div className="flex items-center h-16">
                            <span className="text-lg text-indigo-500 font-bold">Repudiandae commodi perferendis et itaque?</span>
                        </div>
                        <div className="flex items-center py-2">
                            <span className="text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, dignissimos. Neque eos, dignissimos provident reiciendis debitis repudiandae commodi perferendis et itaque, similique fugiat cumque impedit iusto vitae dolorum. Nostrum, fugit!</span>

                        </div>
                    </div>
                </div>
                <div className="mt-4 flex">
                    <div>
                        <div className="flex items-center h-16 border-l-4 border-indigo-500">
                            <span className="text-4xl text-indigo-500 px-4">Q.</span>
                        </div>
                        <div className="flex items-center h-16 border-l-4 border-gray-400">
                            <span className="text-4xl text-gray-400 px-4">A.</span>
                        </div>
                    </div>
                    <div>
                        <div className="flex items-center h-16">
                            <span className="text-lg text-indigo-500 font-bold">Similique fugiat cumque?</span>
                        </div>
                        <div className="flex items-center py-2">
                            <span className="text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, dignissimos. Neque eos, dignissimos provident reiciendis debitis repudiandae commodi perferendis et itaque, similique fugiat cumque impedit iusto vitae dolorum. Nostrum, fugit!</span>

                        </div>
                    </div>
                </div>
            </div>
            <button className="flex relative w-fit">
                <span className="border-2 border-indigo-500 bg-white font-bold h-full px-2 py-1 rounded-md text-indigo-500 w-full z-10 active:translate-x-1 active:translate-y-1">
                    More Questions
                </span>
                <div className="absolute bg-indigo-500 h-full left-1 rounded-md top-1 w-full shadow-lg"></div>
            </button>
        </div>)
}

export default QuestionAnswer;