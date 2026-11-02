import 'react';

export default function ADifference() {
  return (
    <section className="w-full bg-white flex flex-col items-center">
      <div className="w-full aspect-[21/9] md:aspect-[2.4/1] bg-white overflow-hidden pt-40 pb-5 px-15 select-none pointer-events-none">
        <img
          src="./public/images/kids-play-nonprofit.png"
          alt="Children smiling and playing on swings"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-full mx-auto px-6 md:px-12 lg:px-24 py-16 flex flex-col items-start text-left">
        <div className="w-150 flex ml-80 justify-center flex-col text-left">
          <h2 className="text-4xl md:text-4xl font-normal text-[#2A2421] mb-6 tracking-tight">
            Make a Difference
          </h2>
          <p className="text-[#5A524E] text-xl font-light leading-relaxed">
            Whether large or small, every donation matters. We steward your contribution 
            carefully, transparently, and with deep respect for both our donors and the 
            communities we serve.
          </p>
        </div>
      </div>

    </section>
  );
}