import 'react';

const partnersData = [
  { name: 'MATTER', logoUrl: './images/Matter+Logo.png' },
  { name: 'Uncommon', logoUrl: './images/Uncommon.png' },
  { name: 'Lesedi Community Projects', logoUrl: './images/Lesedi+Community+Projects.png' },
  { name: 'JL Foundation for Children and Community', logoUrl: './images/Children+Community (1).png' },
  { name: 'Rotary International', logoUrl: './images/Rotary+International+Logo.png' },
  { name: 'Miracle Missions Vimba', logoUrl: './images/Miracle+Missions+Vimba.png' },
  { name: 'Hwange Rural District Council', logoUrl: './images/Hwange+Rural+District+Council.png' },
  { name: 'Africa\'s Eden', logoUrl: './images/AfricsEden.png' },
];

export default function OurPartners() {
  return (
    <section className="bg-white py-16 px-6 md:px-12 w-full text-center">
      <div className="max-w-7xl mx-auto">
        
        <h2 className="text-3xl md:text-4xl font-normal text-[#2A2421] mb-16 tracking-tight">
          Our Partners
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-16 items-center justify-items-center">
          {partnersData.map((partner, index) => (
            <div 
              key={index} 
              className="w-full max-w-[200px] flex items-center justify-center p-2 min-h-[90px]"
            >
              <img
                src={partner.logoUrl}
                alt={`${partner.name} logo`}
                className="max-w-full max-h-[85px] object-contain select-none"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}