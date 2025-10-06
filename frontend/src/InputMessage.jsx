import React from 'react'

const InputMessage = () => {
    return (
        <div>
            <div className="w-full max-w-6xl mt-4 flex items-center gap-2 bg-white/20 backdrop-blur-xl border border-white/30 rounded-full p-2 shadow-lg">
                <input
                    type="text"
                    placeholder="Type your message..."
                    className="flex-1 bg-transparent outline-none px-4 text-gray-800 placeholder-gray-500"
                />
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full transition">
                    Send
                </button>
            </div>
        </div>
    )
}

export default InputMessage