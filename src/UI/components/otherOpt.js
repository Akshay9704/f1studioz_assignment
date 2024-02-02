import Form from 'react-bootstrap/Form';
import Question from "../Assets/question/question.png"

const OtherOpt = () => {
    return (
        <div className='flex justify-center mt-3'>
            <div style={{ height: "auto" }} className="mt-2 pb-4 rounded-lg w-11/12 md:w-8/12 lg:w-8/12 border-2 bg-white">
                <h3 className='bg-green-1000 text-gray-1000 font-bold text-md py-2 px-4'>Other Options</h3>
                <div className='flex flex-col md:flex-row lg:flex-row md:items-center lg:items-center justify-between mt-4 mx-12 md:mx-40 lg:mx-40'>
                    <div className='flex mb-2 gap-2 items-center justify-between md:justify-normal lg:justify-normal'>
                        <h3 className='text-gray-1000'>Lock</h3>
                        <img src={Question} alt="Question" />
                    </div>
                    <Form.Select className='w-full md:w-3/5 lg:w-3/5 cursor-pointer' aria-label="Default select example">
                        <option>Inside Slide Lock (#2)</option>
                    </Form.Select>
                </div>
                <div className='flex flex-col md:flex-row lg:flex-row md:items-center lg:items-center justify-between w-96 mt-4 mx-12 md:mx-40 lg:mx-40'>
                    <h3 className='text-gray-1000 mb-2 md:mb-0 lg:mb-0'>MISC Lock Options</h3>
                    <Form>
                        {['radio'].map((type, index) => (
                            <div key={index}>
                                <Form.Check
                                    color='black'
                                    type={type}
                                    id={`lock-${type}`}
                                    label="No Lock Hole"
                                />
                            </div>
                        ))}
                    </Form>
                </div>
                <div className='flex flex-col md:flex-row lg:flex-row md:items-center lg:items-center justify-between mt-4 mx-12 md:mx-40 lg:mx-40'>
                    <div className='flex mb-2 gap-2 items-center'>
                        <h3 className='text-gray-1000'>Packaging</h3>
                        <img src={Question} alt="Question" />
                    </div>
                    <div className='w-full md:w-3/5 lg:w-3/5'>
                        <Form.Select className='cursor-pointer' aria-label="Default select example">
                            <option>[x] Distributor</option>
                        </Form.Select>
                        <p className='text-red-2000 mt-2'>Clopay CWD Models Excludes Packaging Options</p>
                    </div>
                </div>
                <div className='flex flex-col md:flex-row lg:flex-row justify-between mt-4 mx-12 md:mx-40 lg:mx-40'>
                    <div className='flex gap-2 mb-2 md:mb-0 lg:mb-0'>
                        <h3 className='text-gray-1000'>Additional Options</h3>
                        <div>
                            <img src={Question} alt="Question" />
                        </div>
                    </div>
                    <div className='flex'>
                        <div>
                            <Form>
                                {['checkbox'].map((type, index) => (
                                    <div key={index} className='text-brown-1000'>
                                        <Form.Check
                                            type={type}
                                            id={`lock-${type}`}
                                            className="custom-checkbox mb-3"
                                            label="Extra Strut(s)"
                                        />
                                        <Form.Check
                                            type={type}
                                            id={`lock-${type}`}
                                            className="custom-checkbox"
                                            label="Spade Strap Hinge(s)"
                                        />
                                        <Form.Check
                                            type={type}
                                            id={`lock-${type}`}
                                            className="custom-checkbox my-3"
                                            label="14 GA Quiet Hinge"
                                        />
                                        <Form.Check
                                            type={type}
                                            id={`lock-${type}`}
                                            className="custom-checkbox"
                                            label="Less Bottom Astragal"
                                        />
                                        <Form.Check
                                            type={type}
                                            id={`lock-${type}`}
                                            className="custom-checkbox my-3"
                                            label="Gold Bar Guarantee (Select Dealers)"
                                        />
                                        <Form.Check
                                            type={type}
                                            id={`lock-${type}`}
                                            className="custom-checkbox my-3"
                                            label="Medallion Hardware Upgrade"
                                        />
                                        <Form.Check
                                            type={type}
                                            id={`lock-${type}`}
                                            className="custom-checkbox"
                                            label="Light Seal Kit"
                                        />
                                        <Form.Check
                                            type={type}
                                            id={`lock-${type}`}
                                            className="custom-checkbox my-3"
                                            label="Slide Lock Mounted at 54”"
                                        />
                                        <Form.Check
                                            type={type}
                                            id={`lock-${type}`}
                                            className="custom-checkbox"
                                            label="2 Spear Lift Handles"
                                        />
                                    </div>
                                ))}
                            </Form>
                        </div>
                        <div>
                            <Form.Select className='cursor-pointer' aria-label="Default select example">
                                <option>[x] Distributor</option>
                            </Form.Select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OtherOpt