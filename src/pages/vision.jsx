import 'react'
import CoreValuesSection from '../components/values';
import NewsletterSection from '../components/newsletter';
import Ourvision from '../components/ourvision';

const VisionMission = () => {
  return (
    <section className="w-full bg-white">
      <Ourvision />
      <CoreValuesSection />
      <NewsletterSection />
    </section>
  );
};

export default VisionMission;