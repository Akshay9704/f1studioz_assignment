import { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Question from "../Assets/question/question.png"

const LayoutOpt = ({ setLayout, progress, setProgress }) => {
    const [layoutInput, setLayoutInput] = useState({
        assemblyType: "Select",
        w_feet: "Select",
        w_inch: "Select",
        h_feet: "Select",
        h_inch: "Select",
        windcode: "Select",
        design: "Select",
        color: "Select"
    });
    const [progressUpdate, setProgressUpdate] = useState(true);

    const handleOption = (e) => {
        if (e.target.id === "assembly") {
            setLayoutInput({ ...layoutInput, assemblyType: e.target.value });
        } else if (e.target.id === "w_feet" || e.target.id === "w_inch") {
            setLayoutInput((prevLayoutInput) => ({
                ...prevLayoutInput,
                [e.target.id]: e.target.value.slice(0, -4),
            }));
        } else if (e.target.id === "h_feet" || e.target.id === "h_inch") {
            setLayoutInput((prevLayoutInput) => ({
                ...prevLayoutInput,
                [e.target.id]: e.target.value.slice(0, -4),
            }));
        } else if (e.target.id === "windcode") {
            setLayoutInput({ ...layoutInput, windcode: e.target.value.slice(0, -2) });
        } else if (e.target.id === "design") {
            setLayoutInput({ ...layoutInput, design: e.target.value });
        } else if (e.target.id === "color") {
            setLayoutInput({ ...layoutInput, color: e.target.value });
        }
    };

    useEffect(() => {
        const lValues = Object.values(layoutInput);
        if (lValues.every(item => item !== "Select")) {
            if (progressUpdate) {
                setProgress(progress + 25);
                setProgressUpdate(false);
            }
        }
        setLayout(prevLayout => [...prevLayout.slice(0, -1), layoutInput]);
    }, [setLayout, layoutInput, progress, progressUpdate, setProgress]);

    return (
        <div className='flex justify-center mt-3'>
            <div style={{ height: "auto" }} className="mt-2 pb-4 rounded-lg w-11/12 md:w-8/12 lg:8/12 border-2 bg-white">
                <h3 className='bg-green-1000 text-gray-1000 font-bold text-md py-2 px-4'>Layout Options</h3>
                <div className='flex flex-col gap-2 md:gap-0 lg:gap-0 md:flex-row lg:flex-row md:items-center lg:items-center md:justify-between lg:justify-between mt-4 mx-4 md:mx-40 lg:mx-40'>
                    <h3 className='text-gray-1000'>Assembly Type</h3>
                    <Form.Select id="assembly" onChange={handleOption} className='w-full md:w-3/5 lg:w-3/5 cursor-pointer' aria-label="Default select example">
                        <option>Select</option>
                        <option>Complete Door</option>
                    </Form.Select>
                </div>
                <div className='flex flex-col md:flex-row lg:flex-row md:items-center lg:items-center justify-between mt-4 mx-4 md:mx-40 lg:mx-40'>
                    <div className='flex gap-2 mb-2 md:mb-0 lg:mb-0 items-center'>
                        <h3 className='text-gray-1000'>Measure Size</h3>
                        <img src={Question} alt="Question" />
                    </div>
                    <div className='flex flex-col gap-2 items-center'>
                        {/* WIDTH */}
                        <div className='flex gap-12 md:gap-20 lg:gap-20 items-center'>
                            <Form.Label className='text-gray-1000'>Width</Form.Label>
                            <div className='flex gap-3'>
                                <Form.Select id="w_feet" onChange={handleOption} className='w-36 cursor-pointer' aria-label="Default select example">
                                    <option>Select</option>
                                    <option>8 ft.</option>
                                </Form.Select>
                                <Form.Select id="w_inch" onChange={handleOption} className='w-36 cursor-pointer' aria-label="Default select example">
                                    <option>Select</option>
                                    <option>2 in.</option>
                                </Form.Select>
                            </div>
                        </div>
                        {/* HEIGHT */}
                        <div className='flex gap-12 md:gap-20 lg:gap-20 items-center'>
                            <Form.Label className='text-gray-1000'>Height</Form.Label>
                            <div className='flex gap-3'>
                                <Form.Select id="h_feet" onChange={handleOption} className='w-36 cursor-pointer' aria-label="Default select example">
                                    <option>Select</option>
                                    <option> 8 ft.</option>
                                </Form.Select>
                                <Form.Select id="h_inch" onChange={handleOption} className='w-36 cursor-pointer' aria-label="Default select example">
                                    <option>Select</option>
                                    <option>2 in.</option>
                                </Form.Select>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col md:flex-row lg:flex-row md:items-center lg:items-center md:justify-between lg:justify-between mt-3 mx-4 md:mx-40 lg:mx-40'>
                    <div className='flex gap-2 mb-2 md:mb-0 lg:mb-0 items-center justify-between md:justify-normal lg:justify-normal'>
                        <h3 className='text-gray-1000'>Windcode</h3>
                        <img src={Question} alt="Question" />
                    </div>
                    <Form.Select id="windcode" onChange={handleOption} className='w-full md:w-3/5 lg:w-3/5 cursor-pointer' aria-label="Default select example">
                        <option>Select</option>
                        <option>WindCode W1</option>
                    </Form.Select>
                </div>
                <div className='flex flex-col md:flex-row lg:flex-row md:items-center lg:items-center md:justify-between lg:justify-between mt-3 mx-4 md:mx-40 lg:mx-40'>
                    <div className='flex gap-2 mb-2 md:mb-0 lg:mb-0 items-center justify-between md:justify-normal lg:justify-normal'>
                        <h3 className='text-gray-1000'>Design</h3>
                        <img src={Question} alt="Question" />
                    </div>
                    <Form.Select id="design" onChange={handleOption} className='w-full md:w-3/5 lg:w-3/5 cursor-pointer' aria-label="Default select example">
                        <option>Select</option>
                        <option>CC</option>
                    </Form.Select>
                </div>
                <div className='flex flex-col md:flex-row lg:flex-row md:items-center lg:items-center md:justify-between lg:justify-between mt-3 mx-4 md:mx-40 lg:mx-40'>
                    <div className='flex gap-2 mb-2 md:mb-0 lg:mb-0 items-center justify-between md:justify-normal lg:justify-normal'>
                        <h3 className='text-gray-1000'>Color</h3>
                        <img src={Question} alt="Question" />
                    </div>
                    <Form.Select id="color" onChange={handleOption} className='w-full md:w-3/5 lg:w-3/5 cursor-pointer' aria-label="Default select example">
                        <option>Select</option>
                        <option>Dark Finish</option>
                    </Form.Select>
                </div>
            </div>
        </div>
    )
}

export default LayoutOpt