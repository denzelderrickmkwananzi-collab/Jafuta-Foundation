import { useState } from 'react';
import 'react'

export default function NewsletterSection() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitting email:', email);
  };

  return (
    <section 
      className="relative w-full min-h-[400px] flex items-center justify-center bg-cover bg-center px-4 py-16"
      style={{ backgroundImage: `url('./images/Girls_sports_africa.png')` }}>
      <div className="absolute inset-0 bg-black/45 backdrop-blur-[1px]" />
      <div className="relative z-10 max-w-2xl w-full text-center text-white flex flex-col items-center">
    
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-3">
          Subscribe to our newsletter.
        </h2>
        <p className="text-sm md:text-base font-light text-white/90 tracking-wide mb-8 max-w-md">
          Sign up to our quarterly newsletter to receive news and updates.
        </p>
        <form 
          onSubmit={handleSubmit}
          className="w-full max-w-xl flex flex-col sm:flex-row items-stretch justify-center gap-0 shadow-lg"
        >
          <input
            type="email"
            required
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full sm:w-[65%] px-5 py-4 bg-white text-gray-800 placeholder-gray-400 focus:outline-none text-base"
          />
          <button
            type="submit"
            className="w-full sm:w-[35%] bg-[#36828C] hover:bg-[#2A6770] transition-colors duration-200 text-white font-medium py-4 px-6 text-base tracking-wide whitespace-nowrap"
          >
            Sign Up
          </button>
        </form>
      </div>
    </section>
  );
}