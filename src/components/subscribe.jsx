import { useState } from 'react';
import 'react'

export default function Subscribe() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Subscribing:', email);
  };

  return (
    <section 
      className="relative flex items-center justify-center w-full h-110 px-4 py-16 bg-cover bg-center bg-no-repeat"
      style={{backgroundImage: `url('./public/images/Batoka-creatives-beads.png')` }}
    >
      <div className="absolute inset-0 bg-white/10 backdrop-blur-[1px]"></div>
      <div className="relative z-10 h-85 max-w-[650px] bg-[#EFE8E1] px-6 py-12 md:px-14 md:py-5 text-center shadow-sm">
        <h2 className="font-sans text-[32px] md:text-[38px] text-[#332A24] tracking-wide mb-3">
          Subscribe
        </h2>
        <p className="font-sans text-sm md:text-[20px] text-[#61554D] leading-relaxed max-w-[420px] mx-auto mb-5">
          Sign up to our quarterly newsletter to receive news and updates.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 justify-center items-stretch max-w-[480px] mx-auto mb-5">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email Address"
            required
            className="flex-1 h-18 px-4 py-3 bg-white text-gray-800 placeholder-[#A3978E] text-lg focus:outline-none border border-transparent focus:border-[#332A24] transition-colors"
          />
          <button
            type="submit"
            className="px-8 py-3 bg-[#332A24] text-white font-medium text-sm tracking-wide hover:bg-[#463B34] transition-colors whitespace-nowrap"
          >
            Sign Up
          </button>
        </form>
        <p className="font-sans text-xs mb-80 md:text-lg text-[#7A6E65] tracking-wide">
          We respect your privacy.
        </p>
      </div>
    </section>
  );
}