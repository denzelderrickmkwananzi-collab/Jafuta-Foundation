import 'react';

const trusteesData = [
  {
    name: "Benoit Fayd'herbe",
    imageUrl: './public/images/BenoitFayden.png',
  },
  {
    name: 'Malcolm Ainscough',
    imageUrl: './public/images/Malcolm+Ainscough.png',
  },
  {
    name: 'Kathy Cole (USA)',
    imageUrl: './',
  },
  {
    name: 'Joshua Magaba',
    imageUrl: './public/images/Joshua+Magaba.png',
  },
  {
    name: 'Gail van Jaarsveldt',
    imageUrl: './public/images/Gail+Image+1.png',
  },
  {
    name: 'Nyasha Mupita',
    imageUrl: './public/images/Nyasha+Mupita.png',
  },
  {
    name: 'Courtney Connelly',
    imageUrl: './public/images/Courtney+Connelly.png',
  },
  {
    name: 'Sara Gardiner',
    imageUrl: './public/images/Sara+Gardiner.png',
  },
];

export default function BoardOfTrustees() {
  return (
    <section className="bg-[#EFEAE4] py-16 px-6 md:px-12 lg:px-24 w-full">
      <div className="max-w-7xl mx-auto text-center">
        
        <h2 className="text-3xl md:text-4xl font-normal text-[#2A2421] mb-16 tracking-tight">
          Board of Trustees
        </h2>

        <div className="flex flex-wrap justify-center items-start gap-12 md:gap-16 lg:gap-40">
          {trusteesData.map((trustee, index) => (
            <div key={index} className="flex flex-col items-center max-w-[220px]">
              
              <div className="w-52 h-52 md:w-70 md:h-70 rounded-full overflow-hidden bg-gray-200 shadow-sm mb-6">
                {trustee.imageUrl && trustee.imageUrl !== 'path-to-kathy-image.jpg' ? (
                  <img
                    src={trustee.imageUrl}
                    alt={trustee.name}
                    className="w-full h-full object-cover select-none pointer-events-none"
                  />
                ) : (
                  <div className="w-full h-full bg-[#EFEAE4]/50 border border-[#2A2421]/10 rounded-full" />
                )}
              </div>

              <p className="text-2xl font-bold  text-[#2A2421] tracking-wide whitespace-nowrap">
                {trustee.name}
              </p>
              
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}