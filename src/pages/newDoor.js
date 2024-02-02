import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react'
import Back from "../UI/Assets/back.png"
import Dots from "../UI/Assets/dots.png"
import Form from 'react-bootstrap/Form';
import Question from "../UI/Assets/question/question.png"

const NewDoor = ({ setCart }) => {
    const [door, setDoor] = useState([{
        category: 'Residential Door',
        series: 'Canyon Ridge® Collection',
        type: 'CAN212'
    }]);

    const updateDoor = () => {
        setCart({ door });
    };

    const handleOption = (e) => {
        const { id, value } = e.target;
        setDoor({ ...door, [id]: value });
    };

    const navigate = useNavigate();
    return (
        <div>
            <div className='flex justify-between items-center py-3 px-6 navtab'>
                <div className='flex items-center gap-3'>
                    <img onClick={() => navigate('/newOrder')} src={Back} alt="Back" className="cursor-pointer" />
                    <h1 className='text-md font-semibold text-white'>
                        Configure a new door
                    </h1>
                    <p className='text-gray-500 font-bold'>2 of 3</p>
                </div>
                <div>
                    <img src={Dots} alt="Dots" className="cursor-pointer" />
                </div>
            </div>
            <div className='flex flex-col items-center'>
                {/* Configure Box */}
                <div style={{ height: "75vh" }} className="mt-2 w-full md:w-8/12 lg:8/12 border-2 bg-white px-12 md:px-28 lg:px-28 py-4">
                    {/* Category */}
                    <div className='flex gap-2 md:gap-0 lg:gap-0 flex-col md:flex-row lg:flex-row md:items-center lg:items-center justify-normal md:justify-between lg:justify-between'>
                        <h3 className='text-gray-1000'>Select Category</h3>
                        <Form.Select id='category' onChange={handleOption} className='w-full md:w-1/2 lg:w-1/2 cursor-pointer' aria-label="Default select example">
                            <option>Residential Door</option>
                            <option>Commercial Door</option>
                            <option>Entry Doors</option>
                        </Form.Select>
                    </div>
                    {/* Series */}
                    <div className='flex gap-2 md:gap-0 lg:gap-0 flex-col md:flex-row lg:flex-row md:items-center lg:items-center justify-normal md:justify-between lg:justify-between my-3 md:my-2 lg:my-2'>
                        <div className='flex gap-1 justify-between md:justify-normal lg:justify-normal items-center'>
                            <h3 className='text-gray-1000'>Select Series</h3>
                            <img width={20} height={20} src={Question} alt="Question" className="cursor-pointer" />
                        </div>
                        <Form.Select id="series" onChange={handleOption} className='w-full md:w-1/2 lg:w-1/2 cursor-pointer' aria-label="Default select example">
                            <option>Canyon Ridge® Collection</option>
                            <option>Modern Steel™ Collection</option>
                            <option>Classic™ Collection</option>
                        </Form.Select>
                    </div>
                    {/* Type */}
                    <div className='flex gap-2 md:gap-0 lg:gap-0 flex-col md:flex-row lg:flex-row md:items-center lg:items-center justify-normal md:justify-between lg:justify-between'>
                        <div className='flex gap-1 justify-between md:justify-normal lg:justify-normal items-center'>
                            <h3 className='text-gray-1000'>Door Type</h3>
                            <img width={20} height={20} src={Question} alt="Question" className="cursor-pointer" />
                        </div>
                        <Form.Select id='series' onChange={handleOption} className='w-full md:w-1/2 lg:w-1/2 cursor-pointer' aria-label="Default select example">
                            <option>CAN212</option>
                            <option>CAN211</option>
                            <option>CAN210</option>
                        </Form.Select>
                    </div>
                </div>
                {/* Configure Box */}
                <div className='bottom-0 fixed flex justify-end p-2 w-full md:w-8/12 lg:w-8/12 border-2 bg-white'>
                    <button onClick={() => {
                        navigate('/configDoor');
                        updateDoor();
                    }}
                        className='text-white text-sm uppercase bg-red-1000 rounded-lg border-2 px-4 py-2'>Configure</button>
                </div>
            </div>
        </div>
    )
}

export default NewDoor