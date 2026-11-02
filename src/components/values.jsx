import 'react';

const valueCardsData = [
  {
    title: 'Integrity',
    description: 'We act with transparency, accountability, and responsibility in stewarding every resource entrusted to us.',
  },
  {
    title: 'Respect',
    description: 'We honour people, culture, and the environment, working in harmony with communities and traditional leadership.',
  },
  {
    title: 'Empowerment',
    description: 'We build capacity, confidence, and opportunity—never dependency.',
  },
  {
    title: 'Innovation',
    description: 'We embrace creativity, technology, and new ideas that drive sustainable change.',
  },
  {
    title: 'Collaboration',
    description: 'We believe in meaningful partnerships with communities, donors, government, and the environment itself.',
  },
  {
    title: 'Sustainability',
    description: 'We focus on long-term, replicable impact that benefits both people and nature.',
  },
];

const ValueCard = ({ title, description }) => {
  return (
    <div className="bg-white p-8 md:p-12 flex flex-col items-center justify-start text-center h-90">

      <h3 className="text-xl md:text-2xl font-bold text-[#2A2421] tracking-wide">
        {title}
      </h3>
      
      <div className="w-20 h-[2px] bg-[#2A2421] my-6 opacity-60" />
      
      <p className="text-sm md:text-base text-[#5A524E] leading-relaxed max-w-[280px]">
        {description}
      </p>
    </div>
  );
};

export default function CoreValuesSection() {
  return (
    <section className="bg-[#EFEAE4] py-16 px-6 md:px-12 lg:px-24 w-full">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {valueCardsData.map((card, index) => (
            <ValueCard 
              key={index} 
              title={card.title} 
              description={card.description} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}