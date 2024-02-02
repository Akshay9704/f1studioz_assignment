import { useNavigate } from 'react-router-dom';
import React from 'react'
import Back from "../UI/Assets/back.png"
import Dots from "../UI/Assets/dots.png"
import Forword from "../UI/Assets/forward.png"

const NewOrder = () => {
    const navigate = useNavigate();
    return (
        <div>
            <div className='flex justify-between items-center py-3 px-6 navtab'>
                <div className='flex items-center gap-3'>
                    <img onClick={() => navigate('/')} src={Back} alt="Back" className="cursor-pointer" />
                    <h1 className='text-md font-semibold text-white'>
                        Create a new order
                    </h1>
                </div>
                <div>
                    <img src={Dots} alt="Dots" className="cursor-pointer" />
                </div>
            </div>
            <div className='flex flex-col gap-3 items-center mt-3'>
                {/* OPTION #1 */}
                <div onClick={() => navigate('/newDoor')} className='cursor-pointer shadow-md hover:shadow-xl shadow-black-50 md:w-1/2 w-4/5 lg:1/2 md:py-3 lg:py-3 py-4 px-3 bg-white rounded-lg flex justify-between items-center'>
                    <div>
                        <h1 className='text-xl font-bold'>Configure your door from scratch</h1>
                        <p className='text-sm text-gray-1000'>Residential, Commerical, Entry doors</p>
                    </div>
                    <div>
                        <img src={Forword} alt="Forword"/>
                    </div>
                </div>
                {/* OPTION #2 */}
                <div className='cursor-pointer shadow-md hover:shadow-xl shadow-black-50 md:w-1/2 w-4/5 lg:1/2 md:py-3 lg:py-3 py-4 px-3 bg-white rounded-lg flex justify-between items-center'>
                    <div>
                        <h1 className='text-xl font-bold'>Parts / Openers</h1>
                        <p className='text-sm text-gray-1000'>Order Parts and Openers</p>
                    </div>
                    <div>
                        <img src={Forword} alt="Forword"/>
                    </div>
                </div>
                {/* OPTION #3 */}
                <div className='cursor-pointer shadow-md hover:shadow-xl shadow-black-50 md:w-1/2 w-4/5 lg:1/2 md:py-3 lg:py-3 py-4 px-3 bg-white rounded-lg flex justify-between items-center'>
                    <div>
                        <h1 className='text-xl font-bold'>Direct Item Entry</h1>
                        <p className='text-sm text-gray-1000'>Order Parts / Openers using a Product ID</p>
                    </div>
                    <div>
                        <img src={Forword} alt="Forword"/>
                    </div>
                </div>
                {/* OPTION #4 */}
                <div className='cursor-pointer shadow-md hover:shadow-xl shadow-black-50 md:w-1/2 w-4/5 lg:1/2 md:py-3 lg:py-3 py-4 px-3 bg-white rounded-lg flex justify-between items-center'>
                    <div>
                        <h1 className='text-xl font-bold'>Choose from favourites</h1>
                        <p className='text-sm text-gray-1000'>Re-order door from your favourites </p>
                    </div>
                    <div>
                        <img src={Forword} alt="Forword"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewOrder