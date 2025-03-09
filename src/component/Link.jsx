import React from 'react'
import Links from '../assets/LINK.jpg'

const Link = () => {
    return (
        <div className="relative w-screen h-screen font-serif ">
            <img src={Links} alt="" className="w-full h-full object-cover" />
            <div className="w-80 sm:w-96 h-52 hover:scale-110 transition-all duration-700 bg-blue-500 flex items-center justify-evenly flex-col absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4 rounded-lg shadow-lg">
                <p className="text-white text-[16px] sm:text-[20px] font-bold">Siap Tantangan? Klik di Bawah!</p>
                <button className="bg-white text-blue-500 hover:bg-blue-500 hover:text-white px-5 py-2 rounded-md font-semibold hover:border hover:border-gray-200 hover:shadow hover:scale-105 transition-all duration-500">
                    <a href="https://kahoot.it/">Mulai!</a>
                </button>
            </div>
        </div>
    )
}

export default Link
