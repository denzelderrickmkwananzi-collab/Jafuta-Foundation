import 'react'
import Impact from '../components/impact'
import Community from '../components/carousel'
import Cont from '../components/contacts'

const Home = () => {
  return (
    <main className='overflow-hidden'>
        <div className="flex items-left justify-center h-screen w-screen pt-70 bg-cover bg-center bg-no-repeat bg-blend-overlay bg-black/30" style={{backgroundImage:"url('public/images/Classroom Discussion With Attentive Students.png')"}}>
            <h1 className="z-10 text-7xl w-4/3 pt-25 ml-8 mr-80 text-white leading-20">Empowering Rural Communities Through Action.</h1>
        </div>  
        <section class="max-w-7xl mx-auto px-6 py-16 text-[#333333] w-full">
            <div class="grid grid-cols-2 gap-24 items-center w-full h-90">
                <div class="space-y-8">
                    <h1 class="text-4xl sm:text-5xl font-medium text-[#2d2a26] leading-[1.15] tracking-tight">
                        Supporting education and community.
                    </h1>
                    <button type="button" class="bg-[#3b878a] hover:bg-[#327376] text-white font-medium px-8 py-3.5 transition-colors duration-200">
                        Our Vision
                    </button>
                </div>
                <div class="space-y-6 text-[#555555] text-base leading-relaxed font-normal">
                    <p>
                        We provide rural families with access to quality education,
                        digital technology, clean water, nutritional gardens, equal opportunities for girls,
                        skills training, and income-generating initiatives,
                    </p>
                    <p>
                        Jafuta Foundation is nurturing healthier
                        and more resilient communities by restoring dignity,
                        strengthening independence,
                        and inspiring lasting hope for generations to come.
                    </p>
                </div>
            </div>
        </section>
        <div>
      <Impact
        image="public/images/women-africa-hero-image.png"
        title="Women & Youth Empowerment"
        description="Through deepened impact in gender empowerment, girls’ dignity, education, scholarships, and vocational skills training, Jafuta Foundation creates pathways for women and young people to build confidence, and develop meaningful livelihoods."
        buttonText="Learn More"
      />
      <Impact
        image="public/images/boys-school-africa-nonprofit.png"
        title="Education & Digital Access"
        description="We strengthen rural education through supplementary and informal learning, teacher development & training, learning resources, scholarships, and access to technology—bridging the digital divide and expanding education opportunities for rural children and youth."
        buttonText="Learn More"
        reverse={true}
      />
      <Impact
        image="public/images/waterjft.png"
        title="Water, Sanitation (WASH) & Health"
        description="Improving health and livelihoods by expanding access to solar-powered boreholes/wells, clean and accessible water points, safe sanitation, hygiene education, mobile health clinics, and mental health education and counselling within rural communities. "
        buttonText="Learn More"
      />
      <Impact
        image="public/images/woman-garden-africa+(1).png"
        title="Livelihoods & Food Security"
        description="Our Livelihoods & Food Security Programme supports communities through nutritional community gardens, climate-smart agriculture, and the growing and distribution of food-bearing and indigenous trees."
        buttonText="Learn More"
        reverse={true}
      />
      <Impact
        image="public/images/Waterhole+maintenance+in+surround+national+Parks.png"
        title="Conservation & Community 
               Co-Existence"
        description="We protect wildlife while supporting the communities that live alongside it. Through education, conflict-mitigation, habitat restoration, and conservation-linked livelihoods, we  can help people and wildlife to better coexist safely and sustainably."
        buttonText="Learn More"
      />
      <Impact
        image="public/images/Batoka-creatives-beads.png"
        title="Creativity, Arts & Culture"
        description="From deep cultural roots to contemporary creative talent, we celebrate Zimbabwe’s identity through artistic and visual expression."
        buttonText="Learn More"
        reverse={true}
      />
    </div>
    <div>
      <Community />
    </div>
    <div>
      <Cont />
    </div>
    </main>
  )
}

export default Home
