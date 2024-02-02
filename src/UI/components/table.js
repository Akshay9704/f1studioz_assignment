import Table from 'react-bootstrap/Table';
import Data from "../../data/items.json";

const CartTable = ({ search, products }) => {
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
                {Data.filter(data => data.productInfo.includes(search)).map((data, index) => (
                    <tr key={index}>
                        <td>{data.productInfo}</td>
                        <td>{data.cartName}</td>
                        <td>{data.shippingPoint}</td>
                        <td>{data.createdBy}</td>
                        <td style={data.expiry === "Expires in 6 days" || data.expiry === "Expires in 4 days" ? { color: "rgba(230, 126, 34, 1)" } : { color: "rgba(136, 148, 160, 1)" }}>{data.expiry}</td>
                    </tr>
                ))}
                {products.map((product, index) => (
                    <tr key={index}>
                        <td>{typeof product === 'string' ? product : product.productName}</td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
};

export default CartTable;
