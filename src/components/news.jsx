import NewsCard from "./newscard";

const newsletters = [
  {
    id: 1,
    image: "./images/Children-africa-school-JafutaFoundation.png",
    date: "Apr 2026",
    title: "New Beginnings & Big Dreams",
    description:"It's hard to believe we are already in April - the year is flying by! And what a start it has been. We hit the ground running in January (and we haven't stopped yet!) as the new school year began. There is something incredibly special about this time of year. Watching our scholarship students - both new and returning - receive their uniforms and school supplies is always a deeply moving moment.",
    link: "/",
  },
  {
    id: 2,
    image: "./images/Screenshot 2026-10-22 102111.png",
    date: "Mar 2026",
    title: "2025 Annual Report",
    description:
      "The 2025 financial year was marked by consolidation, measurable impact, and strengthened institutional maturity for Jafuta Foundation. Operating in complex rural communities in the Chidobe and Matetsi Wards of Matabeleland North, , the Foundation continued to deliver high-impact, community-driven programmes aligned with its mission:",
    link: "/",
  },
  {
    id: 3,
    image: "./images/boy_boxer_africa.png",
    date: "Dec 2025",
    title: "Jafuta Foundation 2025 Year End Reflection",
    description:"As we close out 2025, we do so with full hearts and deep gratitude. This has been a year of remarkable progress on the ground - made possible by the belief, generosity, and encouragement of our supporters, partners, and friends.",
    link: "/",
  },
  {
    id: 4,
    image: "./images/Batoka-creatives-beads.png",
    date: "Sep 2025",
    title: "Celebrating our Batoka Creatives!",
    description:
      "As we cross into the second half of the year, it’s incredible to reflect on how much has already happened — and how busy our team on the ground has been!",
    link: "/",
  },
];

const News = () => {
  return (
    <section className="mt-45 w-full bg-white text-black min-h-screen px-6 pt-3 pb-10">
      <h2 className="text-center text-[45px] leading-[14px] font-normal mb-[98px]">
        Jafuta Foundation Newsletters
      </h2>
      <div className="mx-auto w-270 grid grid-cols-1 sm:grid-cols-2 gap-x-[39px] gap-y-[38px]">
        {newsletters.map((newsletter) => (
          <NewsCard
            key={newsletter.id}
            image={newsletter.image}
            date={newsletter.date}
            title={newsletter.title}
            description={newsletter.description}
            link={newsletter.link}
          />
        ))}
      </div>
    </section>
  );
};

export default News;