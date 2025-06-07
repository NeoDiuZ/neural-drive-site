'use client';

import { motion } from 'framer-motion';
import { 
  FiCpu, FiUser, FiCode, FiToggleLeft, FiZap, 
  FiTrendingUp, FiDollarSign, FiUsers, FiAward, FiBriefcase, FiPackage, FiActivity 
} from 'react-icons/fi';
import Image from 'next/image';
import AnimatedBackground from './components/AnimatedBackground';

const Section = ({ children, className, ...props }) => (
  <motion.section 
    className={`w-full max-w-7xl mx-auto py-28 px-6 sm:px-8 ${className}`}
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 1.2, ease: "easeOut" }}
    {...props}
  >
    {children}
  </motion.section>
);

const SectionTitle = ({ children, align = "center" }) => (
  <div className={`mb-16 ${align === "left" ? "text-left" : "text-center"}`}>
    <h2 className="text-3xl sm:text-4xl font-semibold tracking-widest text-[var(--text-secondary)] uppercase">{children}</h2>
  </div>
);

const FeatureColumn = ({ icon, title, text }) => (
    <div className="flex flex-col items-center text-center">
        <div className="text-cyan-400 mb-4">{icon}</div>
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-[var(--text-secondary)] text-balance max-w-xs">{text}</p>
    </div>
)

const teamMembers = [
    { name: "Mohammed HK", title: "Chief Executive Officer", bio: "Expert in Computer Engineering, Successful HealthTech Exit. Won 35 National and Regional Competitions.", imgSrc: "/Mo.png" },
    { name: "Raymond Loong Ng", title: "Chief AI Officer", bio: "Director of Singapore Youth AI, Successful HealthTech Exit. Won 27 National and Regional Competitions.", imgSrc: "/Raymond.png" },
    { name: "Kaushik Manian", title: "Chief Tech Officer", bio: "Expert in Hardware Engineering and IoT Systems. Ex-Apple Engineer. Won 18 National Competitions.", imgSrc: "/Kaushik.png" },
    { name: "Nyan Lin Htun", title: "Chief Operations Officer", bio: "Expert in Software Engineering and Design. Won 18 National Competitions.", imgSrc: "/Nyan.png" },
    { name: "Dr Dehan Hong", title: "Industry Mentor", bio: "Chief Medical Office SCDF, Decades of experience in medical sector.", imgSrc: "/Dehan.png" }
];

const TeamMemberCard = ({ name, title, bio, imgSrc }) => (
  <motion.div className="text-center flex flex-col items-center group" whileHover={{scale:1.05}}>
    <div className="relative w-40 h-40 mb-4">
        <Image src={imgSrc} alt={name} width={160} height={160} className="rounded-full object-cover z-10" />
        <div className="absolute inset-0 rounded-full bg-cyan-400/20 blur-xl group-hover:blur-2xl transition-all duration-300"/>
    </div>
    <h3 className="text-xl font-bold text-cyan-400">{name}</h3>
    <p className="text-[var(--text-secondary)]">{title}</p>
    <p className="text-sm text-gray-500 mt-2 max-w-xs">{bio}</p>
  </motion.div>
);

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <AnimatedBackground />
      <div className="fixed inset-0 bg-black/70 z-0" />
      <main className="relative z-10 flex flex-col items-stretch">
        
        <header className="w-full h-screen min-h-[700px] flex flex-col justify-center items-center text-center px-6">
          <motion.div 
            className="relative z-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <h1 className="text-[12vw] lg:text-[15vw] font-black tracking-tighter leading-none uppercase text-white">
                NEURAL DRIVE
            </h1>
            <p className="max-w-3xl mt-4 text-lg sm:text-xl text-[var(--text-secondary)] text-balance">
              Empowering human potential through advanced neural interfaces. <br/> We are building the next generation of thought-controlled applications.
            </p>
          </motion.div>
        </header>

        <Section>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle align="left">Why We Started</SectionTitle>
              <p className="text-xl sm:text-2xl lg:text-3xl text-white font-light leading-relaxed">
                Our mission is to empower the <span className="font-semibold text-cyan-400">1 in 50 people</span> worldwide who live with muscular degenerative disorders and other motor impairments.
              </p>
            </div>
            <div className="flex justify-center">
              <Image src="/globe.svg" alt="Globe" width={350} height={350} className="w-3/4 h-auto" />
            </div>
          </div>
        </Section>
        
        <Section>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <SectionTitle align="left">The Problem</SectionTitle>
              <p className="text-lg text-[var(--text-secondary)] max-w-md">
                Current assistive technologies are expensive and hard to use, leaving many without a viable solution.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-12">
              <FeatureColumn
                icon={<FiUser size={36} />}
                title="A World of Constraints"
                text="For individuals with motor impairments, the digital world remains largely inaccessible. Physical limitations create a frustrating and isolating experience."
              />
              <FeatureColumn
                icon={<FiCode size={36} />}
                title="Complex Development"
                text="BCI development today demands deep expertise and time—resources that hinder rapid innovation."
              />
            </div>
          </div>
        </Section>

        <Section>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="grid sm:grid-cols-3 gap-8 order-2 md:order-1">
              <FeatureColumn
                icon={<FiCpu size={36} />}
                title="Accessible Hardware"
                text="Affordable, non-invasive EEG hardware, engineered for everyday use."
              />
              <FeatureColumn
                icon={<FiToggleLeft size={36} />}
                title="No-Code Software"
                text="An intuitive platform enabling creators to build applications without code."
              />
              <FeatureColumn
                icon={<FiZap size={36} />}
                title="Unified Platform"
                text="Hardware and software working in seamless harmony."
              />
            </div>
            <div className="flex justify-center order-1 md:order-2">
              <Image src="/window.svg" alt="Window" width={350} height={350} className="w-3/4 h-auto" />
            </div>
          </div>
        </Section>

        <Section>
          <SectionTitle>MVP & Traction</SectionTitle>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10 text-center border-y border-white/10 py-12">
            <div>
                <FiActivity size={36} className="mx-auto mb-3 text-cyan-400"/>
                <p className="text-4xl font-bold">5 Months</p>
                <p className="text-lg text-[var(--text-secondary)]">to MVP</p>
            </div>
            <div>
                <FiDollarSign size={36} className="mx-auto mb-3 text-cyan-400"/>
                <p className="text-4xl font-bold">$19,000</p>
                <p className="text-lg text-[var(--text-secondary)]">Pre-Seed Funding</p>
            </div>
            <div>
                <FiUsers size={36} className="mx-auto mb-3 text-cyan-400"/>
                <p className="text-4xl font-bold">14</p>
                <p className="text-lg text-[var(--text-secondary)]">Early Access Users</p>
            </div>
            <div>
                <FiAward size={36} className="mx-auto mb-3 text-cyan-400"/>
                <p className="text-4xl font-bold">In Process</p>
                <p className="text-lg text-[var(--text-secondary)]">Provisional IP</p>
            </div>
          </div>
          <div className="text-center mt-16">
            <h3 className="text-2xl font-semibold mb-6 uppercase tracking-wider text-[var(--text-secondary)]">Our Partners</h3>
            <div className="flex justify-center items-center gap-x-16 gap-y-8 flex-wrap">
              <Image src="/SingHealth.png" alt="SingHealth Logo" width={400} height={84} className="object-contain grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-300" />
              <Image src="/Murata.png" alt="Murata Logo" width={350} height={70} className="object-contain grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-300" />
              <Image src="/Lions_Befrienders.png" alt="Lions Befrienders Logo" width={350} height={70} className="object-contain grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-300" />
            </div>
          </div>
        </Section>
        
        <Section className="max-w-5xl">
          <SectionTitle>Global Market Opportunity</SectionTitle>
          <div className="space-y-12 text-center">
            <div>
                <p className="text-6xl font-bold text-blue-400">$75B</p>
                <p className="text-2xl font-semibold mt-2">Total Addressable Market (TAM)</p>
                <p className="text-lg text-[var(--text-secondary)] max-w-md mx-auto">The vast and growing global market for Brain-Computer Interface technology.</p>
            </div>
            <div>
                <p className="text-6xl font-bold text-teal-400">$900M</p>
                <p className="text-2xl font-semibold mt-2">Serviceable Available Market (SAM)</p>
                <p className="text-lg text-[var(--text-secondary)] max-w-md mx-auto">The segment of the BCI market that our technology and business model can effectively serve.</p>
            </div>
            <div>
                <p className="text-6xl font-bold">$75M</p>
                <p className="text-2xl font-semibold mt-2">Serviceable Obtainable Market (SOM)</p>
                <p className="text-lg text-[var(--text-secondary)] max-w-md mx-auto">Our initial target—the portion of the market we are poised to capture in the near-term.</p>
            </div>
          </div>
        </Section>

        <Section className="max-w-sm">
          <SectionTitle>Strategy & Distribution</SectionTitle>
          <div className="relative">
            <div className="absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-white/10" />
            <div className="relative flex flex-col gap-16">
              {[
                { phase: "Seed Phase", date: "'25-'27", desc: "1000 Developer Kits", icon: <FiPackage size={32} /> },
                { phase: "Grow Phase", date: "'26-'27", desc: "Neural Network Referral System", icon: <FiTrendingUp size={32} /> },
                { phase: "Scale Phase", date: "'28-'29", desc: "Enterprise Solutions", icon: <FiBriefcase size={32} /> }
              ].map(item => (
                <div key={item.phase} className="flex flex-col items-center text-center">
                  <div className="bg-background-dark border border-white/10 text-cyan-400 rounded-full p-5 z-10">
                    {item.icon}
                  </div>
                  <h3 className="text-3xl font-bold mt-4">{item.phase}</h3>
                  <p className="text-cyan-400 font-semibold text-xl">{item.date}</p>
                  <p className="text-lg text-[var(--text-secondary)]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </Section>
        
        <Section className="max-w-7xl">
            <SectionTitle>Team & Ask</SectionTitle>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-y-12 gap-x-8 mb-24">
                {teamMembers.map(member => <TeamMemberCard key={member.name} {...member} />)}
            </div>
        </Section>

      </main>

      <footer className="relative z-10 text-center p-8 mt-16 text-[var(--text-secondary)]">
        <p>Neural Drive &copy; {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}

