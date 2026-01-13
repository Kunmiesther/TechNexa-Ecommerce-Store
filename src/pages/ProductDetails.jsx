import { useContext } from 'react'
import { productsData } from '../data'
import { ShopContext } from '../Components/ShopContext'
import { useParams } from 'react-router-dom'

const ProductDetails = () => {
  const { addToCart } = useContext(ShopContext)
  const { id } = useParams()

  const product = productsData.find(
    product => product.id === parseInt(id)
  )

  return (
    <div className="pt-24 px-4 md:px-20 pb-32">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-10">

        <div className="shrink-0">
          <img
            src={product.image}
            alt={product.name}
            className="w-full max-w-sm md:max-w-md mx-auto"
          />
        </div>

        <div className="text-center md:text-left">
          <h3 className="text-2xl md:text-3xl font-bold mb-2">
            {product.name}
          </h3>

          <p className="text-xl md:text-2xl text-red-600 mb-3">
            ${product.price}
          </p>

          <p className="text-gray-600 mb-6 max-w-md">
            {product.description}
          </p>

          <button
            onClick={() => addToCart(product, id)}
            className="w-full md:w-auto px-10 py-4 bg-red-600 hover:bg-red-700 text-white rounded-lg mb-12"
          >
            Add To Cart
          </button>
        </div>

      </div>
    </div>
  )
}

export default ProductDetails
