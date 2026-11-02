import 'react';
import CommunityInfoRow from '../components/story';
import OurPartners from '../components/partner';
import OurStory from '../components/ourstory';

export default function About() {
  return (
    <div className="w-full mx-auto bg-white py-50 font-sans flex items-center justify-center flex-col selection:bg-neutral-200">
      <div className="w-[90%] overflow-hidden h-90">
        <img
          src="/images/Screenshot 2026-10-16 125805.png"
          alt="Changing lives through education"
          className="w-full h-full object-cover object-center"
        />
      </div>
      <div className="text-center pt-10 pb-6">
        <p className="text-[#1a1a1a] text-[19px] sm:text-[21px] font-semibold tracking-wide leading-relaxed">
          &lsquo;Changing lives through education, equality, and opportunity!&rsquo;
        </p>
      </div>
      <div className="w-full max-w-[1000px] mx-auto px-4 py-8 bg-white">
        <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-md group">
            <iframe
                className="absolute top-0 left-0 w-full h-full border-0"
                src="https://www.youtube.com/embed/KgB8FFUXh0U"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                ></iframe>
        </div>
      </div>
      <section className="w-full bg-[#f4ebe1] px-6 py-16 md:px-12 lg:px-24 select-none">
      <div className="max-w-[1100px] mx-auto space-y-4">
        <CommunityInfoRow
          title="The People"
          isImageRight={true}
          imageSrc="./public/images/Girls_sports_africa.png"
          imageAlt="Children playing sports outdoors"
        >
          <p>
            The rural communities of Dibutibu, Chisuma, and Sizinda villages faced severe 
            challenges due to limited access to essential resources: clean drinking water, 
            under-resourced schools, and minimal income-generating opportunities. Most families 
            depended on subsistence farming in a dry, arid region with scarce rainfall, making 
            daily survival and progress an ongoing struggle.
          </p>
        </CommunityInfoRow>
        <CommunityInfoRow
          title="The Reality"
          isImageRight={false}
          imageSrc="./public/images/kids-play-nonprofit.png"
          imageAlt="Children playing on a playground seesaw"
        >
          <ul className="list-disc pl-5 space-y-4 marker:text-neutral-700">
            <li>
              Students walked long distances to school, often without access to textbooks, computers, or proper learning materials.
            </li>
            <li>
              Communities depended on unsafe and distant water sources, forcing families—especially women and children—to spend hours collecting water.
            </li>
            <li>
              Many young people had no access to employment, vocational training, or life skills, leaving them without hope for a sustainable future.
            </li>
            <li>
              Rural dwellers relied solely on subsistence farming in a dry, arid region with consistently low rainfall.
            </li>
            <li>
              Families faced chronic food insecurity and limited access to nutritious produce during the dry months.
            </li>
            <li>
              Girls often missed school due to lack of sanitary hygiene products, leading to absenteeism and educational disadvantage.
            </li>
          </ul>
        </CommunityInfoRow>
      </div>
    </section>
    <OurStory />
    <OurPartners />
    </div>
  );
}