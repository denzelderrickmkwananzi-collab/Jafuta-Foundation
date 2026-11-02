import 'react'

function Impact({image, title, description, buttonText, reverse = false}) {
  return (
    <div>
      <section className={`flex flex-col ${
        reverse ? "md:flex-row-reverse" : "md:flex-row"
      } items-center gap-10 px-6 md:px-16 lg:px-24 py-16 bg-[#574C3F]`}>
            <div className="w-full md:w-1/2">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-72 md:h-96 object-cover"
                />
            </div>
            <div className="w-full md:w-1/2 space-y-10">
                <h1 className="text-4xl md:text-4xl font-semibold text-white">
                    {title}
                </h1>
                <p className="text-white text-base md:text-lg leading-8">
                    {description}
                </p>
                <button className="bg-[#3b878a] hover:bg-[#327376] text-white font-semibold px-7 py-3 transition duration-300">
                    {buttonText}
                </button>
            </div>
        </section>
    </div>
  )
}

export default Impact
