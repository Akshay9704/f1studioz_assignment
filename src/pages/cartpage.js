import React from 'react'
import CartDetails from '../UI/components/cartDetails'

const CartPage = ({ cart, setProducts, setIsEdit }) => {
    return (
        <div>
            <CartDetails cart={cart} setProducts={setProducts}/>
        </div>
    )
}

export default CartPage