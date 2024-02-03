import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import LayoutOpt from "../UI/components/layoutOpt"
import WindowOpt from "../UI/components/windowOpt"
import TrackOpt from '../UI/components/trackOpt'
import OtherOpt from '../UI/components/otherOpt'
import Back from "../UI/Assets/back.png"
import Dots from "../UI/Assets/dots.png"
import ProgressBar from 'react-bootstrap/ProgressBar';

const ConfigDoor = ({ setCart}) => {
    const [progress, setProgress] = useState(0);
    const [layout, setLayout] = useState([]);
    const [window, setWindow] = useState([]);
    const [track, setTrack] = useState([]);
    const [other, setOther] = useState([]);

    const updateCart = () => {
        setCart(prevData => ({...prevData, layout, window, track, other }));
    };

    const navigate = useNavigate();

    return (
        <div>
            <div className='flex justify-between items-center py-3 px-6 navtab'>
                <div className='flex items-center gap-3'>
                    <img onClick={() => navigate('/newDoor')} src={Back} alt="Back" className="cursor-pointer" />
                    <h1 className='text-md font-semibold text-white'>
                        Configure a new door
                    </h1>
                    <p className='text-gray-500 font-bold'>3 of 3</p>
                </div>
                <div>
                    <img src={Dots} alt="Dots" className="cursor-pointer" />
                </div>
            </div>
            <div className='flex gap-2 flex-col items-center mt-3'>
                <ProgressBar variant='success' className='h-2 md:w-96 lg:w-96 w-60' now={progress} />
                <h3 className='text-md font-semibold text-gray-1000'><span className='text-md font-extrabold text-gray-1000 mr-2'>{`${progress}%`}</span>Completed</h3>
            </div>
            {/* LAYOUT BOX */}
            <LayoutOpt setLayout={setLayout} progress={progress} setProgress={setProgress} />

            {/* WINDOW BOX */}
            <WindowOpt setWindow={setWindow} progress={progress} setProgress={setProgress} />

            {/* TrackOpt */}
            <TrackOpt setTrack={setTrack} progress={progress} setProgress={setProgress} />

            {/* OTHER OPTIONS */}
            <OtherOpt setOther={setOther} progress={progress} setProgress={setProgress} />

            {/* CART BOX */}
            <div className='bottom-0 flex justify-center mt-3'>
                <div className='flex gap-5 md:gap-3 lg:gap-3 justify-center md:justify-end lg:justify-end p-2 w-11/12 md:w-8/12 lg:w-8/12 border-2 bg-white'>
                    <button className='text-red-1000 text-sm font-semibold uppercase bg-white rounded-lg border-2 border-red-1000 px-4 py-3'>Preview</button>
                    <button onClick={() => {
                        navigate('/cart');
                        updateCart();
                    }}
                        className='text-white text-sm font-semibold uppercase bg-red-1000 rounded-lg border-2 px-4 py-3'>Add to cart</button>
                </div>
            </div>
        </div>
    )
}

export default ConfigDoor