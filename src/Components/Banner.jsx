import bannerImg from '../assets/headphone8.png'

const Banner = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-white px-4 text-center">
      
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
        Experience Sound Without Limits
      </h2>

      <p className="max-w-md text-gray-600 mb-8 text-sm sm:text-base">
        Designed for clarity, comfort, and power. Our headphones deliver deep bass,
        crisp highs, and all-day comfort — built for gamers, creators, and everyday listening.
      </p>

      <img
        src={bannerImg}
        alt="Headphones"
        className="w-64 sm:w-80 md:w-96 object-contain"
      />
      
    </section>
  )
}

export default Banner
