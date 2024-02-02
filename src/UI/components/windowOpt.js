import { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Question from "../Assets/question/question.png"

const WindowOpt = ({ setWindow, progress, setProgress }) => {
    const [windowInput, setWindowInput] = useState({
        glass: "Select",
        glaze: "Select",
        framing: "Select"
    });
    const [progressUpdate, setProgressUpdate] = useState(true);

    const handleOption = (e) => {
        if (e.target.id === "glass") {
            setWindowInput({ ...windowInput, glass: e.target.value });
        } else if (e.target.id === "glaze") {
            setWindowInput({ ...windowInput, glaze: e.target.value });
        } else {
            setWindowInput({ ...windowInput, framing: e.target.value });
        }
    }

    useEffect(() => {
        const wValues = Object.values(windowInput);
        if (wValues.every(item => item !== "Select")) {
            if (progressUpdate) {
                setProgress(progress + 25);
                setProgressUpdate(false);
            }
        }
        setWindow((prevWindow) => [...prevWindow.slice(0, -1), windowInput]);
    }, [setWindow, windowInput, progress, progressUpdate, setProgress]);

    return (
        <div className='flex justify-center mt-3'>
            <div style={{ height: "auto" }} className="mt-2 pb-4 rounded-lg w-11/12 md:w-8/12 lg:w-8/12 border-2 bg-white">
                <h3 className='bg-green-1000 text-gray-1000 font-bold text-md py-2 px-4'>Window Options</h3>
                <div className='flex flex-col md:flex-row lg:flex-row md:items-center lg:items-center justify-between mt-4 mx-12 md:mx-40 lg:mx-40'>
                    <div className='flex mb-2 gap-2 justify-between md:justify-normal lg:justify-normal items-center'>
                        <h3 className='text-gray-1000'>Glass Type</h3>
                        <img src={Question} alt="Question" />
                    </div>
                    <Form.Select id="glass" onChange={handleOption} className='w-full md:w-3/5 lg:3/5 cursor-pointer' aria-label="Default select example">
                        <option>Select</option>
                        <option>Solid (No Windows)</option>
                    </Form.Select>
                </div>
                <div className='flex flex-col md:flex-row lg:flex-row md:items-center lg:items-center justify-between mt-4 mx-12 md:mx-40 lg:mx-40'>
                    <div className='flex mb-2 gap-2 justify-between md:justify-normal lg:justify-normal items-center'>
                        <h3 className='text-gray-1000'>Section(S) Glazed</h3>
                        <img src={Question} alt="Question" />
                    </div>
                    <Form.Select id="glaze" onChange={handleOption} className='w-full md:w-3/5 lg:3/5 cursor-pointer' aria-label="Default select example">
                        <option>Select</option>
                        <option>Sections 4</option>
                    </Form.Select>
                </div>
                <div className='flex flex-col md:flex-row lg:flex-row md:items-center lg:items-center justify-between mt-4 mx-12 md:mx-40 lg:mx-40'>
                    <div className='flex mb-2 gap-2 justify-between md:justify-normal lg:justify-normal items-center'>
                        <h3 className='text-gray-1000'>Framing</h3>
                        <img src={Question} alt="Question" />
                    </div>
                    <Form.Select id="framing" onChange={handleOption} className='w-full md:w-3/5 lg:3/5 cursor-pointer' aria-label="Default select example">
                        <option>Select</option>
                        <option>Arch 1 Design</option>
                    </Form.Select>
                </div>
            </div>
        </div>
    )
}

export default WindowOpt