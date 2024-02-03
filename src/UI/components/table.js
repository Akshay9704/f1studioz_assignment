import Table from 'react-bootstrap/Table';
import Data from "../../data/items.json";

const CartTable = ({ search, products }) => {
    const filterData = (data) => data.filter(item => typeof item === 'string' && item.toLowerCase().includes(search.toLowerCase()));

    return (
        <div>
            <Table className='hidden md:table lg:table' striped bordered hover>
                <thead>
                    <tr>
                        <th className='uppercase text-blue-100'>Product Information</th>
                        <th className='uppercase text-blue-100'>Cart Name</th>
                        <th className='uppercase text-blue-100'>Shipping Point</th>
                        <th className='uppercase text-blue-100'>Created By</th>
                        <th className='uppercase text-blue-100'>Expiry</th>
                    </tr>
                </thead>
                <tbody>
                    {filterData(Data.map(data => data.productInfo)).map((data, index) => (
                        <tr key={index}>
                            <td>{data}</td>
                            <td>dummy data</td>
                            <td>dummy data</td>
                            <td>dummy data</td>
                            <td>dummy data</td>
                        </tr>
                    ))}
                    {filterData(products.map(product => typeof product === 'string' ? product : product.productName)).map((filteredProduct, index) => (
                        <tr key={index}>
                            <td>{filteredProduct}</td>
                            <td>dummy data</td>
                            <td>dummy data</td>
                            <td>dummy data</td>
                            <td>dummy data</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <div className='flex flex-col gap-3 items-center mt-3'>
                {filterData(Data.map(data => data.productInfo)).map((data, index) => (
                    <div className='shadow-md hover:shadow-xl shadow-black-50 mb-1 w-11/12 py-4 px-3 bg-white rounded-lg flex md:hidden lg:hidden justify-between items-center'>
                        <div key={index}>
                            <h1 className='text-md font-bold'>{data}</h1>
                            <p className='text-sm text-gray-1000'>Residential, Commerical, Entry doors</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className='flex flex-col gap-3 items-center mt-3'>
                {filterData(products.map(product => typeof product === 'string' ? product : product.productName)).map((filteredProduct, index) => (
                    <div className='shadow-md shadow-black-50 mb-1 w-11/12 py-4 px-3 bg-white rounded-lg flex md:hidden lg:hidden justify-between items-center'>
                        <div key={index}>
                            <h1 className='text-md font-bold'>{filteredProduct}</h1>
                            <p className='text-sm text-gray-1000'>Residential, Commerical, Entry doors</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CartTable;
