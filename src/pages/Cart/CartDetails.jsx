import React, { useContext } from 'react'
import { ShopContext } from '../../Components/ShopContext'
import { IoMdAdd, IoMdRemove } from 'react-icons/io'
import { FaTrashCan } from 'react-icons/fa6'

const CartDetails = ({ item }) => {
  const { removeFromCart, increaseAmount, decreaseAmount } = useContext(ShopContext)
  const { id, name, image, price, amount } = item

  return (
    <div className="bg-white p-4 rounded-xl shadow-sm flex gap-4">

      <img
        src={image}
        alt={name}
        className="w-20 h-20 object-contain"
      />

      <div className="flex-1">
        <h3 className="font-semibold text-sm">{name}</h3>
        <p className="text-sm text-gray-500">${price}</p>

        <div className="flex items-center gap-3 mt-3">
          <button
            onClick={() => decreaseAmount(id)}
            className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center"
          >
            <IoMdRemove />
          </button>

          <span>{amount}</span>

          <button
            onClick={() => increaseAmount(id)}
            className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center"
          >
            <IoMdAdd />
          </button>
        </div>

        <div className="flex justify-between items-center mt-3">
          <button
            onClick={() => removeFromCart(id)}
            className="text-red-600 text-sm flex items-center gap-1"
          >
            <FaTrashCan /> Remove
          </button>

          <span className="font-semibold">
            ${price * amount}
          </span>
        </div>
      </div>
    </div>
  )
}

export default CartDetails
