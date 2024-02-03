import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Back from "../Assets/back.png"
import Dots from "../Assets/dots.png"
import Form from 'react-bootstrap/Form';
import Favorite from "../Assets/Favorite.png"
import Edit from "../Assets/edit.png"
import Delete from "../Assets/delete.png"
import Copy from "../Assets/copy.png"

const CartDetails = ({ cart, setIsEdit, setProducts }) => {
    const [count, setCount] = useState(1);

    const countChange = (e) => {
        if (e.target.id === "add") {
            setCount(count + 1);
        } else if (e.target.id === "minus") {
            if (count > 1) {
                setCount(count - 1);
            }
        }
    };

    const ProfileName = "Classic_John45012"
    const ProductId = "Cart #123456789"

    const doorS = cart.door;
    const door = cart.door[0];
    const layout = cart.layout[0];

    const productName = `${layout.h_feet}' ${layout.h_inch}'' X ${layout.w_feet}' ${layout.w_inch}'' ${doorS.series} ${layout.design} ${layout.windcode} ${door.category}, ${door.series}`;

    const updateProducts = () => {
        setProducts([productName]);
    };

    const handleEditClick = () => {
        setIsEdit(true);
        navigate('/configDoor');
    };

    const navigate = useNavigate();

    return (
        <div>
            <div className='flex justify-between items-center py-3 px-6 navtab'>
                <div className='flex items-center gap-3'>
                    <img onClick={() => navigate('/configDoor')} src={Back} alt="Back" className="cursor-pointer" />
                    <h1 className='text-md font-semibold text-white'>
                        {ProfileName}
                    </h1>
                    <p className='text-gray-500 font-bold'>{ProductId}</p>
                </div>
                <div>
                    <img src={Dots} alt="Dots" className="cursor-pointer" />
                </div>
            </div>
            <div className='flex justify-center mt-3'>
                <div className="h-auto mt-2 pb-4 rounded-lg w-11/12 md:w-3/5 lg:w-3/5 border-2 bg-white">
                    <div className='md:w-3/4 lg:w-3/4 py-2 px-4'>
                        <h3 className='text-gray-1000 font-bold text-md md:text-lg lg:text-lg'>{productName}</h3>
                        <p className='text-gray-500 text-sm'>Job Name: Front door with glass <span className='ml-1 text-red-1000 font-bold'>Change</span></p>
                        <p className='text-gray-500 text-sm my-1'>Product #CWD - Garage Door</p>
                        <p className='text-gray-500 text-sm'>Availability: <span className='uppercase font-bold text-green-2000'>In Stock </span><span className='text-gray-1000 font-medium'>(Available for Pickup)</span></p>
                    </div>
                    <div className='flex flex-col-reverse md:flex-row lg:flex-row md:justify-center lg:justify-center md:gap-36 lg:gap-36 md:items-center lg:items-center py-2 px-4'>
                        <div className='flex gap-2'>
                            <button onClick={countChange} id="minus" className='text-gray-1000 font-extrabold text-2xl border-2 w-12'>-</button>
                            <input type="text" value={count} className='text-gray-1000 font-bold text-md w-10 h-10 text-center border-2' />
                            <button onClick={countChange} id="add" className='text-gray-1000 font-extrabold text-2xl border-2 w-12'>+</button>
                        </div>
                        <div className='flex gap-12 md:gap-40 lg:gap-40'>
                            <div className='flex flex-col items-center'>
                                <p className='text-red-2000 text-sm md:text-md lg:text-md'>Standard Multiplier: .432</p>
                                <p className='text-red-2000 text-sm md:text-md lg:text-md'>Secondary Multipliers Applied</p>
                                <p className='text-brown-1000 font-semibold text-sm md:text-md lg:text-md'>Apply MPQ</p>
                            </div>
                            <div className='flex flex-col'>
                                <p className='text-brown-1000 font-semibold'>
                                    Net Price: <span className='text-brown-1000 font-bold text-lg md:text-xl lg:text-xl'>$4500.00</span>
                                </p>
                                <div className='flex justify-end'>
                                    <p className='text-brown-1000 font-semibold'>Unit Price: $4800.00</p>
                                </div>
                                <div className='flex justify-end mt-0 md:mt-2 lg:mt-2'>
                                    <p className='text-red-1000 text-sm cursor-pointer'>View Price Details</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-center mt-2'>
                        <button className='border-2 py-2 px-2 md:w-60 lg:w-60 flex gap-1 items-center justify-center'>
                            <img src={Favorite} alt="Favorite" />
                            <h3 className='text-xs md:text-lg lg:text-lg uppercase text-brown-1000 font-semibold'>Favorites</h3>
                        </button>
                        <button onClick={handleEditClick} className='border-2 py-2 px-2 md:w-60 lg:w-60 flex gap-1 items-center justify-center'>
                            <img src={Edit} alt="Edit" />
                            <h3 className='text-xs md:text-lg lg:text-lg uppercase text-brown-1000'>Edit</h3>
                        </button>
                        <button className='border-2 py-2 px-2 md:w-60 lg:w-60 flex gap-1 items-center justify-center'>
                            <img src={Copy} alt="Copy" />
                            <h3 className='text-xs md:text-lg lg:text-lg uppercase text-brown-1000'>Copy</h3>
                        </button>
                        <button onClick={() => navigate('/')} className='border-2 py-2 px-2 md:w-60 lg:w-60 flex gap-1 items-center justify-center'>
                            <img src={Delete} alt="Delete" />
                            <h3 className='text-xs md:text-lg lg:text-lg uppercase text-brown-1000'>Delete</h3>
                        </button>
                    </div>
                </div>
            </div>
            <div className='flex flex-col md:flex-row lg:flex-row gap-3 items-center justify-center mt-2'>
                <div className='float-left'>
                    <div  className="h-auto w-80 md:w-96 lg:w-96 md:mx-12 lg:mx-12 mt-2 pb-4 py-2 px-4 rounded-lg border-2 bg-white">
                        <form className='mt-3'>
                            <h3 className='text-gray-1000'>Change Delivery Date</h3>
                            <input className='w-full rounded-md border-2 my-2 p-2' placeholder='Example: 31-DEC-1999' type="date" id="date" name="date" />
                            <h3 className='text-gray-1000'>Standard Delivery: Tue May 28 - 2019</h3>
                        </form>
                    </div>
                    <div className="h-auto w-80 md:w-96 lg:w-96 md:mx-12 lg:mx-12 mt-2 pb-4 py-2 px-4 rounded-lg border-2 bg-white">
                        <form className='mt-3'>
                            <h3 className='text-gray-1000'>Purchase Order Number</h3>
                            <input className='w-full rounded-md border-2 my-2 p-2' placeholder='Enter PO Number' type="number" id="date" name="date" />
                            <h3 className='text-gray-1000'>This PO will be useful to track this order items </h3>
                        </form>
                    </div>
                </div>
                <div className='float-right'>
                    <div className="h-auto w-80 md:w-96 lg:w-96 md:mx-12 lg:mx-12 mt-2 pb-4 py-2 px-4 rounded-lg border-2 bg-white">
                        <h3 className='text-gray-1000 font-semibold mt-2'>Bill Summary</h3>
                        <div className='flex justify-between mt-3'>
                            <p>Subtotal</p>
                            <p>$4500.00</p>
                        </div>
                        <div className='flex justify-between mt-2'>
                            <p>Energy Surcharge</p>
                            <p>$ 70.18</p>
                        </div>
                        <div className='flex justify-between mt-2'>
                            <p>Sales Tax</p>
                            <p>$490.93</p>
                        </div>
                        <div className='flex justify-between mt-2'>
                            <p className='text-lg font-bold text-brown-1000'>Total</p>
                            <p className='text-lg font-bold text-brown-1000'>$5061.11</p>
                        </div>
                        <div className='border-1 w-full mt-1'></div>
                        <Form>
                            {['checkbox'].map((type, index) => (
                                <div key={index}>
                                    <Form.Check
                                        type={type}
                                        id={`lock-${type}`}
                                        className="custom-checkbox mt-2"
                                        label="Apply Tax"
                                    />
                                    <p className='text-blue-1000'>(The 1% iStore discount is calculated into the total price for all doors and door parts. Please refer to the quote or order acknowledgment for details.)</p>
                                </div>
                            ))}
                        </Form>
                    </div>
                </div>
            </div>
            <div className='flex flex-col md:flex-row lg:flex-row items-center md:items-baseline lg:items-baseline justify-center mt-2'>
                <div className="h-auto mt-2 pb-4 py-3 px-4 rounded-lg w-11/12 md:w-8/12 lg:8/12 border-2 bg-white">
                    <div className='flex flex-col md:flex-row lg:flex-row md:justify-between lg:justify-between items-center lg:items-center'>
                        <div>
                            <h3 className='text-gray-1000 font-semibold mt-2'>Bill Summary</h3>
                            <div className='flex gap-5 mt-2'>
                                <div className='md:w-72 lg:w-72'>
                                    <h3 className='text-brown-1000 font-bold'>Bement Jared</h3>
                                    <p>144 Curt Shores, 50, Madison Avenue Hixson - 42040</p>
                                    <p>Contact: (123) 4567890</p>
                                </div>
                                <div>
                                    <button className='text-brown-1000 font-semibold'>CHANGE</button>
                                </div>
                            </div>
                        </div>
                        <div className='hidden md:block lg:block border-2 h-24 mt-2'></div>
                        <div>
                            <h3 className='text-gray-1000 font-semibold mt-2'>Shipping To</h3>
                            <div className='flex gap-5 mt-2'>
                                <div className='md:w-72 lg:w-72'>
                                    <h3 className='text-brown-1000 font-bold'>Bement Jared</h3>
                                    <p>144 Curt Shores, 50, Madison Avenue Hixson - 42040</p>
                                    <p>Contact: (123) 4567890</p>
                                </div>
                                <div>
                                    <button className='text-brown-1000 font-semibold'>CHANGE</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Configure Box */}
            <div className='bottom-0 flex justify-center mt-3'>
                <div className='flex justify-between p-2 w-11/12 md:w-8/12 lg:w-8/12 border-2 bg-white'>
                    <div>
                        <p className='text-xs font-semibold text-brown-1000'>1 ITEM</p>
                        <h3 className='text-brown-1000 text-xl font-bold mt-1'>$5061.11</h3>
                    </div>
                    <div className='flex gap-2'>
                        <button onClick={() => navigate('/newOrder')} className='text-red-1000 font-semibold text-sm uppercase border-red-1000 rounded-lg border-2 px-2 md:px-4 md:py-2 lg:px-4 lg:py-2'>Add More</button>
                        <button onClick={() => {
                            navigate('/');
                            updateProducts();
                        }} className='text-white font-semibold text-sm uppercase bg-red-1000 rounded-lg border-2 px-2 md:px-4 md:py-2 lg:px-4 lg:py-2'>Place Order</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartDetails