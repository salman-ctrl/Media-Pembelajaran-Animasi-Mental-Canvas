import React from 'react'
import Links from '../assets/LINK.jpg'

const Link = () => {
    return (
        <div className="relative w-screen h-screen font-[Merriweather] ">
            <img src={Links} alt="" className="w-full h-full object-cover" />
            <div className="w-90 h-30 hover:scale-110 transition-all duration-750 bg-blue-500 flex items-center justify-evenly flex-col absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4 rounded-lg shadow-lg">
                <h1 className="text-white text-lg font-bold">Siap Tantangan? Klik di Bawah!</h1>
                <button className="bg-white text-blue-500 hover:bg-blue-500 hover:text-white px-4 py-2 rounded-md font-semibold hover:border-white hover:border-1 shadow-2xl hover:scale-105 transition-all duration-700 ">
                    <a href="https://kahoot.it/"> Mulai!</a>
                </button>
            </div>
        </div>

    )
}

export default Link
