import { useContext } from 'react'
import { ShopContext } from './ShopContext'
import { Link } from 'react-router-dom'

const ProductList = () => {
  const {products, addToCart} = useContext(ShopContext)
  return (
    <div className='max-w-300 mx-auto px-4 mt-20 text-center'>
      <h2 className='text-3xl font-semibold mb-8 text-gray-800'>Best Seller Products</h2>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6'>
        {
          products.map((product) => {
            const {id, image, name, price} = product 
            return(
              <div key={id} className='bg-white border border-gray-200 rounded-lg p-4 transition-transform duration-200'>
                <Link to = {`/product/${id}`}>
                <img src={image} alt="" className='w-full h-62.5 object-containmb-4'/>
                </Link>
                <div className='text-left'>
                  <h4 className='text-lg font-medium text-gray-800 mb-1'>{name}</h4>
                  <p className='text-gray-500 text-center font-bold text-lg'>${price}</p>
              </div>
              <button onClick={()=> addToCart(product, id)} className='w-full mt-4 py-2 bg-red-600  text-white rounded-md hover:bg-red-700  transition duration-300'>Add To Cart</button>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default ProductList