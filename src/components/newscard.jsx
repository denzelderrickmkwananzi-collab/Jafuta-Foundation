import 'react'

const NewsCard = ({ image, date, title, description, link }) => {
  return (
    <article className="w-full min-w-0">
      <a href={link} className="block mb-4 h-90 w-full overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full aspect-[1.9/1] object-cover"
        />
      </a>
      <p className="mt-1 mb-8 text-[18px] leading-4 text-[#36302A]">
        {date}
      </p>
      <h3 className="mt-1 mb-10 text-[26px] leading-4 font-semibold text-[#221f1b]">
        {title}
      </h3>
      <p className="mt-3 text-[16px] font-['Poppins'] leading-8 font-medium text-[#36302A]">
        {description}
      </p>
      <a
        href={link}
        className="mt-7 inline-block text-[18px] leading-4 text-[#398B99] underline underline-offset-2 hover:text-[#205E68] transition-colors"
      >
        Read More
      </a>
    </article>
  );
};

export default NewsCard;