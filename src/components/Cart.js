import React from 'react'
import Product from './Product'
import { useSelector, useDispatch } from "react-redux"
import { getTotal, getCartProducts } from '../reducers'
import { checkout } from '../actions'


const Cart  = () => {
  const products = useSelector(getCartProducts)
  const total = useSelector(getTotal)

  const dispatch = useDispatch()

  const handleCheckout = () => {
    dispatch(checkout(products))
  }

  const hasProducts = products.length > 0
  const nodes = hasProducts ? (
    products.map(product =>
      <Product
        title={product.title}
        price={product.price}
        quantity={product.quantity}
        key={product.id}
      />
    )
  ) : (
    <em>Thêm Sản Phẩm Vào Giỏ Hàng</em>
  )

  return (
    <div>
      <h3>Giỏ Hàng</h3>
      <div>{nodes}</div>
      <p>Tổng Tiền: &#36;{total}</p>
      <button onClick={handleCheckout}
        disabled={hasProducts ? '' : 'disabled'}>
        Thanh Toán
      </button>
    </div>
  )
}

export default Cart
