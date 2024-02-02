import Table from 'react-bootstrap/Table';
import Data from "../../data/items.json";

const CartTable = ({ search, products }) => {
    const filterData = (data) => data.filter(item => typeof item === 'string' && item.toLowerCase().includes(search.toLowerCase()));

    return (
        <Table striped bordered hover>
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
    );
};

export default CartTable;
