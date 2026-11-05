import 'react';

// 1. Array containing image paths and alt data for dynamic mapping
const storyImages = [
  { id: 1, alt: 'Young man smiling with red headphones around his neck', url: './images/man-worker-africa.png' },
  { id: 2, alt: 'Two people focused working on laptops', url: './images/girl-school-africa.png' },
  { id: 3, alt: 'Woman wearing a sun hat smiling while working with thread', url: './images/woman-sewing-africa.png' },
];

export default function OurStory() {
  return (
    <section className="bg-white py-16 px-6 md:px-12 w-full text-center">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Heading */}
        <h2 className="text-3xl md:text-4xl font-normal text-[#2A2421] mb-6 tracking-tight">
          Our Story Now
        </h2>

        {/* Section Paragraph Text with maximum width constraint matching the layout */}
        <p className="text-[#5A524E] text-sm md:text-base font-light leading-relaxed max-w-4xl mx-auto mb-16 text-center px-4">
          Jafuta Foundation has implemented a series of targeted, community-driven projects to address the 
          pressing challenges faced by rural families. Each initiative was designed to promote education, equality, 
          opportunity, and long-term self-reliance through practical and sustainable solutions.
        </p>

        {/* 3-Column Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-15 items-stretch">
          {storyImages.map((image) => (
            <div 
              key={image.id} 
              className="w-full aspect-[4/5] bg-gray-100 overflow-hidden shadow-sm"
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover select-none pointer-events-none"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}