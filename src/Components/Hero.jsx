import React from 'react'
import bgImage from '../assets/hero.png'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <section
      className="relative min-h-screen w-full bg-cover bg-position-[70%_20%] bg-no-repeat pt-24"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
    
      <div className="absolute inset-0 bg-black/40" />

     
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-4 text-white">
        <h1 className="text-4xl md:text-6xl font-bold">
          Hear Every Detail.
        </h1>

        <h1 className="text-4xl md:text-6xl font-bold mt-1">
          Feel Every Beat.
        </h1>

        <p className="text-gray-200 max-w-xl mt-4">
          Engineered with precision audio drivers and a sleek modern design,
          our headphones give you immersive sound, zero distractions,
          and total control — wherever you are.
        </p>


        <Link to="/productList">
        <button className="mt-6 bg-red-600 hover:bg-red-700 transition text-white font-bold px-8 py-3 rounded-lg">
          SHOP COLLECTION
        </button>
        </Link>
      </div>
    </section>
  )
}

export default Hero
