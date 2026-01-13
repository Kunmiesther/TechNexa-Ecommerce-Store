import { useContext } from 'react'
import { ShopContext } from './ShopContext'
import { Link } from 'react-router-dom'

const ProductList = () => {
  const { products, addToCart } = useContext(ShopContext)

  return (
    <div className='max-w-300 mx-auto px-4 mt-20 text-center'>
      <h2 className='text-3xl font-semibold mb-8 text-gray-800'>Best Seller Products</h2>
      
      <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
        {products.map((product) => {
          const { id, image, name, price } = product
          return (
            <div 
              key={id} 
              className='bg-white border border-gray-200 rounded-lg overflow-hidden transition-transform duration-200 flex flex-col'
            >
              <Link to={`/product/${id}`} className='block w-full aspect-square overflow-hidden'>
                <img 
                  src={image} 
                  alt={name} 
                  className='w-full h-full object-contain' 
                />
              </Link>

              <div className='p-4 flex flex-col justify-between flex-1'>
                <h4 className='line-clamp-2 text-lg font-medium text-gray-800 mb-1'>{name}</h4>
                <p className='text-gray-500 text-center font-bold text-lg mb-2'>${price}</p>
                <button 
                  onClick={() => addToCart(product, id)} 
                  className='w-full py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition duration-300'
                >
                  Add To Cart
                </button>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ProductList
