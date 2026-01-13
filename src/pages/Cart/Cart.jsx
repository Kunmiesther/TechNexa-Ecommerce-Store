import React, { useContext } from 'react'
import { ShopContext } from '../../Components/ShopContext'
import CartDetails from './CartDetails'
import { IoCheckmarkDoneCircleOutline } from 'react-icons/io5'

const Cart = () => {
  const { cart, clearCart, total, quantity } = useContext(ShopContext)

  return (
    <div className="min-h-screen pt-24 px-4 md:px-10 bg-gray-50">

      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl font-bold">Your Cart</h1>
        <div className="flex items-center gap-3">
          <span className="text-sm">Items: {quantity}</span>
          <IoCheckmarkDoneCircleOutline
            onClick={clearCart}
            className="text-xl cursor-pointer"
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-6">

        <div className="flex-1 space-y-4">
          {cart.length > 0 ? (
            cart.map(item => (
              <CartDetails key={item.id} item={item} />
            ))
          ) : (
            <p className="text-gray-500 text-center mt-10">
              Your cart is empty
            </p>
          )}
        </div>

        <div className="w-full md:w-87.5 bg-white p-5 rounded-xl shadow-sm h-fit">
          <h2 className="text-lg font-bold mb-4">Order Summary</h2>

          <div className="flex justify-between text-sm mb-2">
            <span>Items</span>
            <span>{quantity}</span>
          </div>

          <div className="flex justify-between text-sm mb-2">
            <span>Total</span>
            <span>${isNaN(total) ? 0 : total}</span>
          </div>

          <div className="flex justify-between text-sm mb-4">
            <span>Shipping</span>
            <span>Free</span>
          </div>

          <div className="flex justify-between font-bold text-lg border-t pt-4">
            <span>Estimated total</span>
            <span>${isNaN(total) ? 0 : total}</span>
          </div>

          <button className="mt-6 w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg">
            CHECKOUT
          </button>
        </div>
      </div>
    </div>
  )
}

export default Cart
