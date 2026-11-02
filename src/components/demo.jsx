import 'react'

const demo = () => {
  return (
    <div className="mt-50 flex flex-col gap-5 items-center">
      <div className="mx-auto max-w-3xl px-6 text-center flex items-center flex-col">
        <h1 className="text-4xl font-bold tracking-tight text-[#2A2421] sm:text-5xl md:text-6xl">
          Demo Topic
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#5A524E] sm:text-xl">
          This is a demo test and we are going to try on a new thing, this thing is called media query or responsive design
        </p>
      </div>
      <div className='w-1/2'>
        <img src="public/images/Classroom Discussion With Attentive Students.png" alt="" />
      </div>
    </div>
  )
}

export default demo
