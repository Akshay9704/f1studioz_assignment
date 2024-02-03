import { useNavigate } from 'react-router-dom';
import React from 'react';
import SearchIcon from '../UI/Assets/search/search.png';
import Filter from '../UI/Assets/filter.png';
import Table from '../UI/components/table';

const Main = ({ products }) => {
    const [active, setActive] = React.useState(true);
    const [archived, setArchived] = React.useState(false);
    const [search, setSearch] = React.useState("");

    const handleActive = () => {
        setActive(true);
        setArchived(false);
    };

    const handleArchived = () => {
        setActive(false);
        setArchived(true);
    };

    const navigate = useNavigate();
    return (
        <div className='main relative'>
            <div className='flex gap-5 justify-center py-3 navtab'>
                <h1 className='cursor-pointer text-md uppercase text-white underline decoration-3 decoration-yellow-400 underline-offset-17'>
                    carts
                </h1>
                <h1 className='cursor-pointer text-md uppercase text-white underline decoration-3 decoration-yellow-400 underline-offset-17'>
                    favorites
                </h1>
            </div>
            <div className='flex justify-between items-center px-4 md:px-5 lg:px-5 py-3 bg-slate-200'>
                <div className='hidden md:flex lg:flex gap-4'>
                    <h1 onClick={handleActive} className={`cursor-pointer text-lg font-bold ${active ? 'text-gray-1000 underline decoration-4 decoration-gray-1000 underline-offset-27' : 'text-blue-1000'}`}>Active Carts</h1>
                    <h1 onClick={handleArchived} className={`cursor-pointer text-lg font-bold ${archived ? 'text-gray-1000 underline decoration-4 decoration-gray-1000 underline-offset-27' : 'text-blue-1000'}`}>Archived Carts</h1>
                </div>
                <div className='flex md:hidden lg:hidden gap-2'>
                    <button onClick={handleActive} className={`py-2 px-2 bg-slate-100 border-2 ${active ? 'border-yellow-400' : ''}`}>Active (12)</button>
                    <button onClick={handleArchived} className={`py-2 px-2 bg-slate-100 border-2 ${archived ? 'border-yellow-400' : ''}`}>Archived (2)</button>
                </div>
                <div className='flex items-center gap-3'>
                    <img
                        src={SearchIcon}
                        alt='Search Icon'
                        className='right-3 top-3 cursor-pointer md:hidden lg:hidden'
                    />
                    <div className='hidden md:flex lg:flex relative bg-white h-12 w-36'>
                        <input
                            className='outline-none p-2 pr-12 h-12 w-28 text-lg'
                            type='text'
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder='Search'
                        />
                        <img
                            src={SearchIcon}
                            alt='Search Icon'
                            className='absolute bg-white right-2 top-3'
                        />
                    </div>
                    <img src={Filter} alt='Filter' className='cursor-pointer md:hidden lg:hidden' />
                    <button className='hidden md:flex lg:flex items-center justify-center gap-1 border-gray-400 border-1 px-4 h-11'>
                        <img src={Filter} alt='Filter' />
                        Filter
                    </button>
                </div>
            </div>
            {active ? (
                <div className=''>
                    <Table search={search} products={products} />
                </div>
            ) : (
                <div style={{ height: "50vh" }} className='archived flex justify-center items-center'>
                    <h1 className='text-gray-800 text-4xl font-extrabold'>NO DATA</h1>
                </div>
            )}
            <div className='add-btn fixed bottom-10 right-10 z-50'>
                <button onClick={() => navigate('/newOrder')} className='text-white text-2xl bg-red-900 border-2 w-15 h-15 rounded-full'>+</button>
            </div>

        </div>
    );
};

export default Main;
