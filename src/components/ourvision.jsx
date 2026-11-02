import 'react'

 const Ourvision = () => {
  return (
    <div>
      <div className="grid grid-cols-1 py-50 lg:grid-cols-[1.1fr_1fr] gap-10 lg:gap-0 px-6 md:px-[3.05%]">
        <div className="flex flex-col pt-0 lg:pr-10">
          <p className="text-[40px] leading-[1.55] font-medium text-[#292929] mb-18.75">
            “Everyone deserves to thrive with
            <br className="hidden xl:block" /> dignity and hope.”
          </p>
          <div className="mb-20.5">
            <h2 className="text-[37px] leading-tight font-normal text-[#292929] mb-5.5">
              Our Vision
            </h2>
            <p className="font-['Poppins',sans-serif] text-[18px] leading-7.25 text-[#292929]">
              To foster self-sustaining community development in the Hwange District
              (Dibutibu, Sizinda, Chisuma, Monde and Matetsi) through education,
              empowerment, and livelihood opportunities that build resilience and improve quality of life.
            </p>
          </div>
          <div>
            <h2 className="text-[37px] leading-tight font-normal text-[#292929] mb-5.5">
              Our Mission
            </h2>
            <p className="font-['Poppins',sans-serif] text-[18px] leading-7.25 text-[#292929]">
              Jafuta Foundation is dedicated to empowering rural communities
              by providing increased access to essential resources and services,
              championing conservation, advancing gender equality, fostering resilience,
              and promoting self-sufficiency. Through collaborative efforts,
              we work to create sustainable environments that uplift lives and safeguard our shared future.
            </p>
          </div>
          </div>
        <div className="w-full h-150 lg:h-175 overflow-hidden">
          <img
            src="./public/images/women-nonprofit-skills.png"
            alt="Jafuta Foundation community members"
            className="w-full h-full object-cover object-center"
          />
        </div>
      </div>
    </div>
  )
}

export default Ourvision