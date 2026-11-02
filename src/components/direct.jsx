import 'react'

const Direct = () => {
  return (
    <div className="w-full bg-white py-16 px-6 md:px-12 lg:px-24">
      <h1 className="text-4xl font-semibold">Donate Directly:</h1>
      <div className="max-w-6xl mx-auto flex flex-col px-20 md:flex-row items-start justify-between mt-10 gap-12 md:gap-16">
        <div className="w-full md:w-[45%] flex flex-col gap-6 text-left">
          <div>
            <h2 className="text-lg font-bold text-[#2b2929] tracking-wide mb-1">
              USA - Jafuta Foundation
            </h2>
          </div>
          <div>
            <h3 className="text-lg font-bold text-[#2b2929] mb-0.5">Address:</h3>
            <p className="text-lg font-light text-[#000000] leading-relaxed">
              Wells Fargo Bank <br/>2199 West Main St. <br/>Medford, OR 97501
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-[#2b2929] mb-0.5">Account #:</h3>
            <p className="text-lg font-light text-[#000000]">2962188153</p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-[#2b2929] mb-0.5">Swift Code:</h3>
            <p className="text-lg font-light text-[#000000]">WFBIUS6S</p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-[#2b2929] mb-0.5">For Direct Deposit Use:</h3>
            <p className="text-lg font-light text-[#000000]">Routing No. (RTN): 123006800</p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-[#2b2929] mb-0.5">For Wire Transfers Use:</h3>
            <p className="text-lg font-light text-[#000000] leading-relaxed">
              Routing No. (RTN): 121000248 <br/>Wells Fargo Bank, N.A.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-[#2b2929] mb-0.5">To mail a cheque to Jafuta Foundation:</h3>
            <p className="text-lg font-light text-[#000000] leading-relaxed">
              Mr M. Patten <br />C/O Cutler Investment Group <br />525 Bingham Knoll <br />Jacksonville, OR 97530 <br />USA
            </p>
          </div>
        </div>
        <div className="w-full md:w-[50%] flex flex-col text-left">
          <h3 className="text-2xl md:text-[28px] font-normal text-[#2b2929] leading-tight mb-8 tracking-tight max-w-md">
            When you donate to Jafuta Foundation, you are:
          </h3>
          <ul className="flex flex-col gap-5 text-xl font-light text-[#000000] leading-relaxed pl-4 mb-12">
            <li className="relative before:content-['•'] before:absolute before:-left-4 before:text-[#000000] before:opacity-60">
              Investing in education and technology that opens futures.
            </li>
            <li className="relative before:content-['•'] before:absolute before:-left-4 before:text-[#000000] before:opacity-60">
              Supporting women and youth to become skilled, independent earners.
            </li>
            <li className="relative before:content-['•'] before:absolute before:-left-4 before:text-[#000000] before:opacity-60">
              Providing clean water and nutrition where it is needed most.
            </li>
            <li className="relative before:content-['•'] before:absolute before:-left-4 before:text-[#000000] before:opacity-60">
              Strengthening community-led enterprises that reinvest back into social good.
            </li>
            <li className="relative before:content-['•'] before:absolute before:-left-4 before:text-[#000000] before:opacity-60">
              Helping rural communities thrive alongside wildlife and their natural environment.
            </li>
          </ul>
          <h3 className="text-xl md:text-2xl font-normal text-[#2b2929] leading-snug tracking-tight max-w-lg">
            Be a part of our story of hope, resilience, and opportunity by making a difference together!
          </h3>
        </div>
      </div>
    </div>
  )
}

export default Direct
