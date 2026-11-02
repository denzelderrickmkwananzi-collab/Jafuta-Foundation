import 'react';

const CommunityInfoRow = ({ title, isImageRight, imageSrc, imageAlt, children }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center py-12 h-150">

      <div className={`h-full space-y-4 ${isImageRight ? 'order-1' : 'order-1 md:order-2'}`}>
        <h3 className="text-xl font-bold text-[#2d2d2d] tracking-wide">
          {title}
        </h3>
        <div className="text-neutral-600 leading-relaxed text-[15px] md:text-[16px] font-normal font-sans">
          {children}
        </div>
      </div>

      <div className={` h-full overflow-hidden ${isImageRight ? 'order-2' : 'order-2 md:order-1'}`}>
        <img
          src={imageSrc}
          alt={imageAlt}
          className="w-full h-full object-cover max-h-[380px] shadow-sm"
        />
      </div>
    </div>
  );
};

export default CommunityInfoRow