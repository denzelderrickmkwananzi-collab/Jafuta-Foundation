import 'react';

// 1. Centralized team data array for scalable management
const teamMembers = [
  {
    name: 'Gail van Jaarsveldt',
    role: 'Founder/Chief Executive Officer',
    imageUrl: './public/images/Gail+Image+1.png',
  },
  {
    name: 'Minenhle Moyo',
    role: 'CHIEF OPERATIONS OFFICER',
    imageUrl: './public/images/Minenhle+Moyo.png',
  },
  {
    name: 'Sipho Moyo',
    role: 'OUTREACH DIRECTOR',
    imageUrl: './public/images/Sipho+Moyo+1.png',
  },
  {
    name: 'Courtney Connolly',
    role: 'EDUCATION DIRECTOR & BOARD SECRETARY',
    imageUrl: './public/images/Courtney+Connelly.png',
  },
  {
    name: 'Jacqueline Gurajena',
    role: 'HUMAN CAPITAL & WOMEN EMPOWERMENT PROGRAMS DIRECTOR',
    imageUrl: './public/images/Jacqueline+Moyo.png',
  },
  {
    name: 'Tsitsi Mposiwa',
    role: 'COUNSELLOR & GENDER CHAMPION',
    imageUrl: './public/images/Tsitsi+Mposiwa.png',
  },
];


export default function MeetTheTeam() {
  return (
    <section className="bg-white pt-35 px-6 md:px-12 lg:px-24 w-full">
      <div className="w-full mx-auto">
        <h1 className=" w-270 sm:text-3xl md:text-[28px] font-normal text-[#2A2421] leading-relaxed tracking-tight max-w-3xl">
          “If you want to go fast, go alone. If you want to go far, go together.”<br />— African Proverb
        </h1>
        <h2 className="text-4xl md:text-5xl font-normal text-center text-[#2A2421] mt-20 mb-10 tracking-tight">
          Meet the Team
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex flex-col items-start w-full">
              <div className="w-full aspect-[4/5] bg-gray-100 overflow-hidden mb-4">
                <img
                  src={member.imageUrl}
                  alt={member.name}
                  className="w-full h-full object-cover select-none pointer-events-none"
                />
              </div>
              <div className="text-left w-full px-1">
                <h3 className="text-2xl font-semibold text-[#2A2421] mb-0.5 tracking-tight">
                  {member.name}
                </h3>
                <p className="text-[15px] text-[#766E6A] font-light leading-snug uppercase tracking-wider">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}