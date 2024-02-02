import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Question from "../Assets/question/question.png"

const TrackOpt = ({ setTrack, progress, setProgress }) => {
    const [trackInput, setTrackInput] = useState({
        spring: "Select",
        trackSize: "Select",
        trackMount: "Select",
        trackList: "Select",
        trackRadius: "Select"
    });
    const [progressUpdate, setProgressUpdate] = useState(true);

    const handleOption = (e) => {
        if (e.target.id === "spring") {
            setTrackInput({ ...trackInput, spring: e.target.value });
        } else if (e.target.id === "trackSize") {
            setTrackInput({ ...trackInput, trackSize: e.target.value });
        } else if (e.target.id === "trackMount") {
            setTrackInput({ ...trackInput, trackMount: e.target.value });
        } else if (e.target.id === "trackList") {
            setTrackInput({ ...trackInput, trackList: e.target.value });
        } else if (e.target.id === "trackRadius") {
            setTrackInput({ ...trackInput, trackRadius: e.target.value });
        }
    }

    useEffect(() => {
        const tValues = Object.values(trackInput);
        if (tValues.every(item => item !== "Select")) {
            if (progressUpdate) {
                setProgress(progress + 25);
                setProgressUpdate(false);
            }
        }
        setTrack((prevTrack) => [...prevTrack.slice(0, -1), trackInput]);
    }, [setTrack, trackInput, progress, progressUpdate, setProgress]);

    return (
        <div className='flex justify-center mt-3'>
            <div style={{ height: "auto" }} className="mt-2 pb-4 rounded-lg w-11/12 md:w-8/12 lg:w-8/12 border-2 bg-white">
                <h3 className='bg-green-1000 text-gray-1000 font-bold text-md py-2 px-4'>Track Options</h3>
                <div className='flex flex-col md:flex-row lg:flex-row md:items-center lg:items-center justify-between mt-4 mx-12 md:mx-40 lg:mx-40'>
                    <div className='flex mb-2 gap-2 items-center justify-between'>
                        <h3 className='text-gray-1000'>Spring</h3>
                        <img src={Question} alt="Question" />
                    </div>
                    <Form.Select id="spring" onChange={handleOption} className='w-full lg:w-3/5 md:w-3/5 cursor-pointer' aria-label="Default select example">
                        <option>Select</option>
                        <option>Standard Lift</option>
                    </Form.Select>
                </div>
                <div className='flex flex-col md:flex-row lg:flex-row md:items-center lg:items-center justify-between mt-4 mx-12 md:mx-40 lg:mx-40'>
                    <div className='flex mb-2 gap-2 items-center justify-between'>
                        <h3 className='text-gray-1000'>Track Size</h3>
                        <img src={Question} alt="Question" />
                    </div>
                    <Form.Select id="trackSize" onChange={handleOption} className='w-full lg:w-3/5 md:w-3/5 cursor-pointer' aria-label="Default select example">
                        <option>Select</option>
                        <option>12 in.</option>
                    </Form.Select>
                </div>
                <div className='flex flex-col md:flex-row lg:flex-row md:items-center lg:items-center justify-between mt-4 mx-12 md:mx-40 lg:mx-40'>
                    <div className='flex mb-2 gap-2 items-center justify-between'>
                        <h3 className='text-gray-1000'>Track Mount</h3>
                        <img src={Question} alt="Question" />
                    </div>
                    <Form.Select id="trackMount" onChange={handleOption} className='w-full lg:w-3/5 md:w-3/5 cursor-pointer' aria-label="Default select example">
                        <option>Select</option>
                        <option>12 in.</option>
                    </Form.Select>
                </div>
                <div className='flex flex-col md:flex-row lg:flex-row md:items-center lg:items-center justify-between mt-4 mx-12 md:mx-40 lg:mx-40'>
                    <div className='flex mb-2 gap-2 items-center justify-between'>
                        <h3 className='text-gray-1000'>Track List</h3>
                        <img src={Question} alt="Question" />
                    </div>
                    <Form.Select id="trackList" onChange={handleOption} className='w-full lg:w-3/5 md:w-3/5 cursor-pointer' aria-label="Default select example">
                        <option>Select</option>
                        <option>12 in.</option>
                    </Form.Select>
                </div>
                <div className='flex flex-col md:flex-row lg:flex-row md:items-center lg:items-center justify-between mt-4 mx-12 md:mx-40 lg:mx-40'>
                    <div className='flex mb-2 gap-2 items-center justify-between'>
                        <h3 className='text-gray-1000'>Track Radius</h3>
                        <img src={Question} alt="Question" />
                    </div>
                    <Form.Select id="trackRadius" onChange={handleOption} className='w-full lg:w-3/5 md:w-3/5 cursor-pointer' aria-label="Default select example">
                        <option>Select</option>
                        <option>12 in.</option>
                    </Form.Select>
                </div>
            </div>
        </div>
    )
}

export default TrackOpt