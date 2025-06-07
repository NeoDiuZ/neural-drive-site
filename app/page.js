'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import AnimatedBackground from './components/AnimatedBackground';

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <AnimatedBackground />
      <div className="fixed inset-0 bg-black/70 z-0" />
      <main className="relative z-10 flex flex-col items-center">
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
      </main>

      {/* Executive Summary Sections */}
      <main className="relative z-10 max-content mt-[-6rem] mb-16">
        
        {/* Problem & Solution - Split Layout */}
        <div className="split-section">
          <motion.section 
            className="section-card problem-card"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Why We Started</h2>
            <p className="text-lg text-[var(--text-secondary)] mb-4">1 in every 50 people suffer from Muscle Degenerative Disorders.</p>
            <div className="space-y-3">
              <div className="p-3 bg-white/5 rounded-lg">
                <p className="font-semibold text-red-300">User Problems</p>
                <p className="text-sm text-[var(--text-secondary)]">Physical Constraints, Technological Barriers</p>
              </div>
              <div className="p-3 bg-white/5 rounded-lg">
                <p className="font-semibold text-red-300">Developer Problems</p>
                <p className="text-sm text-[var(--text-secondary)]">Development Complexity</p>
              </div>
            </div>
          </motion.section>

          <motion.section 
            className="section-card solution-card"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">The Solution</h2>
            <p className="text-lg text-[var(--text-secondary)] mb-4">A unified platform to build thought control applications like LEGO. Control anything in sight like STAR WARS.</p>
            <div className="space-y-3">
              <div className="p-3 bg-white/5 rounded-lg">
                <p className="font-semibold text-[var(--accent)]">Accessible Hardware</p>
                <p className="text-sm text-[var(--text-secondary)]">Easy-to-use neural interface devices</p>
              </div>
              <div className="p-3 bg-white/5 rounded-lg">
                <p className="font-semibold text-[var(--accent)]">No-Code Platform</p>
                <p className="text-sm text-[var(--text-secondary)]">Build applications without programming</p>
              </div>
            </div>
          </motion.section>
        </div>

        <hr className="section-divider" />

        {/* MVP & Traction - Stats Layout */}
        <motion.section 
          className="section-card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title text-center">MVP & Traction</h2>
          <div className="stats-grid">
            <div className="stat-card">
              <span className="stat-number">5</span>
              <span className="stat-label">Months</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">$19K</span>
              <span className="stat-label">Investment</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">14</span>
              <span className="stat-label">Early Access Users</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">1</span>
              <span className="stat-label">Provisional IP</span>
            </div>
          </div>
        </motion.section>

        <hr className="section-divider" />

        {/* Our Partners - Enhanced */}
        <motion.section 
          className="section-card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title text-center">Our Partners</h2>
          <div className="partner-logos">
            <div className="partner-logo">
              <Image src="/SingHealth.png" alt="SingHealth" width={120} height={60} className="object-contain mb-3" />
              <span className="text-white text-sm font-medium">SingHealth</span>
            </div>
            <div className="partner-logo">
              <Image src="/Murata.png" alt="Murata" width={120} height={60} className="object-contain mb-3" />
              <span className="text-white text-sm font-medium">muRata</span>
            </div>
            <div className="partner-logo">
              <Image src="/Lions_Befrienders.png" alt="Lions Befrienders" width={120} height={60} className="object-contain mb-3" />
              <span className="text-white text-sm font-medium">Lions Befrienders</span>
            </div>
          </div>
        </motion.section>

        <hr className="section-divider" />

        {/* Global Market Opportunity - Large Numbers */}
        <motion.section 
          className="section-card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title text-center">Global Market Opportunity</h2>
          <div className="market-grid">
            <div className="market-card">
              <div className="market-amount">$75B</div>
              <div className="market-label">TAM</div>
              <div className="market-description">Total Addressable Market</div>
            </div>
            <div className="market-card">
              <div className="market-amount">$900M</div>
              <div className="market-label">SAM</div>
              <div className="market-description">Serviceable Addressable Market</div>
            </div>
            <div className="market-card">
              <div className="market-amount">$75M</div>
              <div className="market-label">SOM</div>
              <div className="market-description">Serviceable Obtainable Market</div>
            </div>
          </div>
        </motion.section>

        <hr className="section-divider" />

        {/* Strategy & Distribution - Timeline */}
        <motion.section 
          className="section-card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Strategy & Distribution</h2>
          <div className="strategy-timeline">
            <div className="timeline-item">
              <div className="timeline-phase">&#39;25-&#39;27</div>
              <div className="timeline-content">
                <div className="timeline-title">Seed Phase</div>
                <div className="timeline-description">1000 Developer Kits</div>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-phase">&#39;26-&#39;27</div>
              <div className="timeline-content">
                <div className="timeline-title">Grow Phase</div>
                <div className="timeline-description">Neural Network Referral System</div>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-phase">&#39;28-&#39;29</div>
              <div className="timeline-content">
                <div className="timeline-title">Scale Phase</div>
                <div className="timeline-description">Enterprise Solutions</div>
              </div>
            </div>
          </div>
        </motion.section>

        <hr className="section-divider" />

        {/* Team - Enhanced Cards */}
        <motion.section 
          className="section-card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title text-center">Team</h2>
          <div className="team-grid">
            <div className="team-card">
              <Image src="/Mo.png" alt="Mohammed HK" width={100} height={100} className="team-photo" />
              <div className="team-name">Mohammed HK</div>
              <div className="team-role">Chief Executive Officer</div>
              <div className="team-bio">Expert in Computer Engineering, Successful HealthTech Exit. Won 35 National and Regional Competitions.</div>
            </div>
            <div className="team-card">
              <Image src="/Raymond.png" alt="Raymond Loong Ng" width={100} height={100} className="team-photo" />
              <div className="team-name">Raymond Loong Ng</div>
              <div className="team-role">Chief AI Officer</div>
              <div className="team-bio">Director of Singapore Youth AI, Successful HealthTech Exit. Won 27 National and Regional Competitions.</div>
            </div>
            <div className="team-card">
              <Image src="/Kaushik.png" alt="Kaushik Manian" width={100} height={100} className="team-photo" />
              <div className="team-name">Kaushik Manian</div>
              <div className="team-role">Chief Tech Officer</div>
              <div className="team-bio">Expert in Hardware Engineering and IoT Systems. Ex-Apple Engineer. Won 18 National Competitions.</div>
            </div>
            <div className="team-card">
              <Image src="/Nyan.png" alt="Nyan Lin Htun" width={100} height={100} className="team-photo" />
              <div className="team-name">Nyan Lin Htun</div>
              <div className="team-role">Chief Operations Officer</div>
              <div className="team-bio">Expert in Software Engineering and Design. Won 18 National Competitions.</div>
            </div>
            <div className="team-card">
              <Image src="/Dehan.png" alt="Dr Dehan Hong" width={100} height={100} className="team-photo" />
              <div className="team-name">Dr Dehan Hong</div>
              <div className="team-role">Industry Mentor</div>
              <div className="team-bio">Chief Medical Office SCDF, Decades of experience in medical sector.</div>
            </div>
          </div>
        </motion.section>
      </main>

      <footer className="relative z-10 text-center p-8 mt-16 text-[var(--text-secondary)]">
        <p>Neural Drive &copy; {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}

