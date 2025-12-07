'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ScrollAnimation, StaggerContainer, StaggerItem } from '@/components/scroll-animation';

export default function About() {
  const teamMembers = [
    {
      name: 'Wayne Johnson',
      role: 'Executive Director',
      phone: '+27 73 030 9679',
      email: 'wayne@vuyelalogistics.co.za',
      initial: 'W',
      hasPhoto: true,
      photo: '/images/wayne johnson (1).jpg',
      description: 'Specializes in financial structuring for supply chain assets and strategic business development.'
    },
    {
      name: 'Jaco Nagel',
      role: 'Managing Director',
      phone: '+27 72 405 9931',
      email: 'jaco@vuyelalogistics.co.za',
      initial: 'J',
      hasPhoto: true,
      photo: '/images/jaco nagel (1).jpg',
      description: 'Over 20 years of experience managing cross-border fleets across SADC, bringing deep operational expertise.'
    },
    {
      name: 'Melissa',
      role: 'Accounts',
      phone: '+27 78 592 4123',
      email: 'accounts@vuyelalogistics.co.za',
      initial: 'M'
    },
    {
      name: 'Verushka',
      role: 'Admin',
      phone: '+27 82 457 8760',
      email: 'admin@vuyelalogistics.co.za',
      initial: 'V'
    },
    {
      name: 'Mala',
      role: 'Team Member',
      phone: '+27 73 490 0317',
      email: 'mala@vuyelalogistics.co.za',
      initial: 'M'
    },
    {
      name: 'Martin',
      role: 'Shipping',
      phone: '+27 67 881 8419',
      email: 'shipping@vuyelalogistics.co.za',
      initial: 'M'
    },
    {
      name: 'Aneri',
      role: 'Team Member',
      phone: '+27 82 670 9214',
      email: 'aneri@vuyelalogistics.co.za',
      initial: 'A'
    },
    {
      name: 'Karina Rossouw',
      role: 'Team Member',
      phone: '+27 83 349 5467',
      email: 'karina.rossouw@vuyelalogistics.co.za',
      initial: 'K'
    },
    {
      name: 'Mike',
      role: 'Team Member',
      phone: '+27 62 848 8623',
      email: 'mike@vuyelalogistics.co.za',
      initial: 'M'
    },
    {
      name: 'Deon',
      role: 'Refuel',
      phone: '+27 67 209 0841',
      email: 'refuel@vuyelalogistics.co.za',
      initial: 'D'
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] sm:min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-[#1a1a1a] via-[#1a1a1a] to-[#2a2a2a] overflow-hidden">
        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl -mr-48 -mt-48"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-400/5 rounded-full blur-3xl -ml-48 -mb-48"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
          <div className="max-w-5xl mx-auto text-center space-y-8 py-16">
            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-yellow-400/10 border border-yellow-400/20 mb-6">
                <svg className="w-10 h-10 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-7xl font-serif font-bold text-white leading-tight tracking-tight">
                About Vuyela <span className="text-yellow-400">Group</span>
              </h1>
            </motion.div>
            <motion.div 
              className="space-y-4 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className="text-xl sm:text-2xl md:text-3xl text-white/90 font-light leading-snug">
                From One Truck to a Trusted Fleet
              </p>
              <p className="text-base sm:text-lg text-white/70 font-light max-w-2xl mx-auto leading-relaxed">
                Built on decades of expertise, driven by integrity, and committed to excellence in every journey.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Story Section - Redesigned */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-400/5 rounded-full blur-3xl -mr-48 -mt-48"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
          <div className="max-w-5xl mx-auto">
            <ScrollAnimation>
              <div className="text-center mb-16">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-yellow-400/10 border border-yellow-400/20 mb-6">
                  <svg className="w-8 h-8 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 mb-6 leading-tight">
                  Our Journey
                </h2>
                <div className="h-1 w-24 bg-yellow-400 mx-auto mb-6"></div>
              </div>
            </ScrollAnimation>

            <div className="space-y-6">
              {/* Story Card 1 */}
              <ScrollAnimation>
                <div className="bg-white rounded-3xl p-8 lg:p-12 border border-gray-200 shadow-lg">
                  <div className="flex items-start space-x-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-2xl bg-yellow-400/10 border border-yellow-400/20 flex items-center justify-center">
                        <span className="text-2xl font-serif font-bold text-yellow-400">1</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">The Beginning</h3>
                      <p className="text-lg text-gray-700 leading-relaxed">
                        The Vuyela story is one of resilience and deliberate growth. Our origins are humble but significant: we commenced operations with a single truck, transporting commodities for a leading South African mining contractor. That single vehicle represented a promise—a commitment to reliability that formed the bedrock of our company culture.
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>

              {/* Story Card 2 */}
              <ScrollAnimation>
                <div className="bg-white rounded-3xl p-8 lg:p-12 border border-gray-200 shadow-lg">
                  <div className="flex items-start space-x-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-2xl bg-yellow-400/10 border border-yellow-400/20 flex items-center justify-center">
                        <span className="text-2xl font-serif font-bold text-yellow-400">2</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">Expansion & Growth</h3>
                      <p className="text-lg text-gray-700 leading-relaxed mb-4">
                        Formally establishing our logistics sector in 2019, we focused initially on the fundamental movement of cargo from Point A to Point B, mastering the art of stacking containers at Transnet Freight Rail (TFR) terminals and managing local deliveries. But the needs of our clients grew, and so did we.
                      </p>
                      <p className="text-lg text-gray-700 leading-relaxed">
                        By 2022, we expanded into the Vuyela Bulk sector, establishing operations at City Deep to focus on the critical warehousing, stockpiling, and packing of 6m and 12m containers. This expansion was not just about size; it was about capability. We invested in specialized equipment, employed skilled staff, and secured strategic yard space to accommodate an ever-increasing customer base.
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>

              {/* Story Card 3 */}
              <ScrollAnimation>
                <div className="bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] rounded-3xl p-8 lg:p-12 border border-gray-800 shadow-2xl text-white">
                  <div className="flex items-start space-x-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-2xl bg-yellow-400/20 border border-yellow-400/30 flex items-center justify-center">
                        <span className="text-2xl font-serif font-bold text-yellow-400">3</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-serif font-bold text-white mb-4">Today: A New Generation</h3>
                      <p className="text-lg text-white/90 leading-relaxed mb-4">
                        Today, Vuyela Group is a &quot;new generation logistics company.&quot; We have moved beyond the traditional boundaries of transport to become a holistic supply chain partner. With a strong operational presence at Main Reef Road, Elandsfontein, and a staff complement of over 60 dedicated professionals, we continue to refine the concept of logistical excellence.
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                        <div className="text-center">
                          <div className="text-4xl font-serif font-bold text-yellow-400 mb-2">300+</div>
                          <div className="text-sm text-white/70">Monthly Loads</div>
                        </div>
                        <div className="text-center">
                          <div className="text-4xl font-serif font-bold text-yellow-400 mb-2">98.5%</div>
                          <div className="text-sm text-white/70">On-Time-In-Full</div>
                        </div>
                        <div className="text-center">
                          <div className="text-4xl font-serif font-bold text-yellow-400 mb-2">60+</div>
                          <div className="text-sm text-white/70">Dedicated Staff</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section - Redesigned */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-400/5 rounded-full blur-3xl -ml-48 -mb-48"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
          <ScrollAnimation>
            <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-yellow-400/10 border border-yellow-400/20 mb-6">
                <svg className="w-8 h-8 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 mb-6 leading-tight">
                Leadership
              </h2>
              <div className="h-1 w-24 bg-yellow-400 mx-auto mb-6"></div>
              <p className="text-xl text-gray-600 leading-relaxed">
                The visionaries behind Vuyela Group, bringing decades of expertise to every decision.
              </p>
            </div>
          </ScrollAnimation>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
            {teamMembers.filter(member => member.role === 'Executive Director' || member.role === 'Managing Director').map((member) => (
              <StaggerItem key={member.name}>
                <motion.div 
                  className="group relative bg-white border-2 border-gray-200 rounded-3xl p-8 lg:p-10 transition-all duration-300 hover:shadow-2xl hover:border-yellow-400/50 overflow-hidden"
                  whileHover={{ y: -8 }}
                >
                  <div className="absolute top-0 right-0 w-40 h-40 bg-yellow-400/5 rounded-full -mr-20 -mt-20 group-hover:bg-yellow-400/10 transition-colors duration-300"></div>
                  <div className="relative">
                    <div className="relative w-36 h-36 mx-auto mb-6 rounded-full overflow-hidden border-4 border-white shadow-2xl ring-4 ring-yellow-400/20">
                      {member.hasPhoto ? (
                        <Image
                          src={member.photo!}
                          alt={`Portrait of ${member.name}`}
                          width={144}
                          height={144}
                          className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                          sizes="144px"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                          <span className="text-4xl font-serif font-bold text-gray-400">{member.initial}</span>
                        </div>
                      )}
                    </div>
                    <h3 className="text-2xl font-serif font-bold text-gray-900 mb-2 text-center">{member.name}</h3>
                    <p className="text-amber-700 font-semibold text-center mb-6">{member.role}</p>
                    {member.description && (
                      <p className="text-gray-600 leading-relaxed text-base mb-6 text-center">
                        {member.description}
                      </p>
                    )}
                    <div className="space-y-3 text-center">
                      <div>
                        <a href={`tel:${member.phone.replace(/\s/g, '')}`} className="text-gray-700 hover:text-yellow-400 transition-colors font-medium">
                          {member.phone}
                        </a>
                      </div>
                      <div>
                        <a href={`mailto:${member.email}`} className="text-gray-600 hover:text-yellow-400 transition-colors text-sm break-all">
                          {member.email}
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Meet the Team Section - All Members */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-400/5 rounded-full blur-3xl -mr-48 -mt-48"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
          <ScrollAnimation>
            <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-yellow-400/10 border border-yellow-400/20 mb-6">
                <svg className="w-8 h-8 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 mb-6 leading-tight">
                Meet the Team
              </h2>
              <div className="h-1 w-24 bg-yellow-400 mx-auto mb-6"></div>
              <p className="text-xl text-gray-600 leading-relaxed">
                Our dedicated team of over 60 professionals is here to support your logistics needs. Reach out to the right person for your inquiry.
              </p>
            </div>
          </ScrollAnimation>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
            {teamMembers.filter(member => member.role !== 'Executive Director' && member.role !== 'Managing Director').map((member, index) => (
              <StaggerItem key={member.name}>
                <motion.div 
                  className="group relative bg-white border border-gray-200 rounded-2xl p-6 transition-all duration-300 hover:shadow-xl hover:border-yellow-400/50 overflow-hidden h-full"
                  whileHover={{ y: -4 }}
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-yellow-400/5 rounded-full -mr-12 -mt-12 group-hover:bg-yellow-400/10 transition-colors duration-300"></div>
                  <div className="relative">
                    <div className="relative w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden border-2 border-gray-200 bg-gray-100 flex items-center justify-center shadow-md">
                      {member.hasPhoto ? (
                        <Image
                          src={member.photo!}
                          alt={`Portrait of ${member.name}`}
                          width={80}
                          height={80}
                          className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                          sizes="80px"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                          <span className="text-xl font-serif font-bold text-gray-400">{member.initial}</span>
                        </div>
                      )}
                    </div>
                    <h3 className="text-lg font-serif font-bold text-gray-900 mb-1 text-center">{member.name}</h3>
                    <p className="text-amber-700 font-semibold text-sm text-center mb-4">{member.role}</p>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center justify-center">
                        <a href={`tel:${member.phone.replace(/\s/g, '')}`} className="text-gray-600 hover:text-yellow-400 transition-colors text-xs">
                          {member.phone}
                        </a>
                      </div>
                      <div className="flex items-center justify-center">
                        <a href={`mailto:${member.email}`} className="text-gray-600 hover:text-yellow-400 transition-colors text-xs break-all">
                          {member.email}
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Vision & Mission Section - Redesigned */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
              {/* Vision */}
              <ScrollAnimation>
                <div className="bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] rounded-3xl p-8 lg:p-12 border border-gray-800 shadow-2xl text-white h-full flex flex-col">
                  <div className="w-14 h-14 rounded-2xl bg-yellow-400/20 border border-yellow-400/30 flex items-center justify-center mb-6">
                    <svg className="w-7 h-7 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6 leading-tight">
                    Our Vision
                  </h2>
                  <div className="h-1 w-16 bg-yellow-400 mb-4"></div>
                  <p className="text-lg text-white/90 leading-relaxed mb-6">
                    To stand as the preeminent logistics partner in South Africa, driving national economic growth through decisive action, sustainable expansion, and the seamless integration of local and international supply chains. We envision a future where Vuyela Group is the pulse of African trade, contributing tangibly to the GDP of South Africa by setting the global standard for reliability in logistics and warehousing.
                  </p>
                  <p className="text-lg text-white/90 leading-relaxed">
                    Our vision extends beyond transportation. We see Vuyela Group as a catalyst for economic transformation, enabling South African businesses to compete globally while strengthening regional trade networks. Through innovation, strategic partnerships, and unwavering commitment to excellence, we are building the infrastructure that connects African markets to the world, ensuring that every shipment, every delivery, and every partnership advances not just our clients&apos; success, but the prosperity of the entire region.
                  </p>
                </div>
              </ScrollAnimation>

              {/* Mission */}
              <ScrollAnimation>
                <div className="bg-white rounded-3xl p-8 lg:p-12 border-2 border-gray-200 shadow-xl h-full flex flex-col">
                  <div className="w-14 h-14 rounded-2xl bg-yellow-400/10 border border-yellow-400/20 flex items-center justify-center mb-6">
                    <svg className="w-7 h-7 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6 leading-tight">
                    Our Mission
                  </h2>
                  <div className="h-1 w-16 bg-yellow-400 mb-4"></div>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    To achieve operational excellence through a customer-centric approach that prioritizes the safety, security, and efficiency of every commodity entrusted to us. We achieve this by:
                  </p>
                  <ul className="space-y-3 text-base text-gray-700">
                    <li className="flex items-start">
                      <span className="text-yellow-400 mr-3 mt-1 text-lg">•</span>
                      <span><strong className="text-gray-900">Deploying Expertise:</strong> Leveraging decades of collective knowledge to solve complex logistical challenges.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-400 mr-3 mt-1 text-lg">•</span>
                      <span><strong className="text-gray-900">Ensuring Accountability:</strong> Acting as the true custodian of customer product, accepting full responsibility for safety and protection.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-400 mr-3 mt-1 text-lg">•</span>
                      <span><strong className="text-gray-900">Building Relationships:</strong> Treating every interaction as a partnership, ensuring that you are always a customer, never just a client number.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-400 mr-3 mt-1 text-lg">•</span>
                      <span><strong className="text-gray-900">Driving Honesty:</strong> Operating with transparency and integrity in an industry where trust is the ultimate currency.</span>
                    </li>
                  </ul>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section - Redesigned */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
          <ScrollAnimation>
            <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-yellow-400/10 border border-yellow-400/20 mb-6">
                <svg className="w-8 h-8 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 mb-6 leading-tight">
                Our Values
              </h2>
              <div className="h-1 w-24 bg-yellow-400 mx-auto mb-6"></div>
              <p className="text-xl text-gray-600 leading-relaxed">
                The principles that guide every decision, every delivery, and every partnership.
              </p>
            </div>
          </ScrollAnimation>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 max-w-6xl mx-auto">
            {[
              {
                title: 'Reliability',
                description: '98.5% On-Time-In-Full delivery rate across 300+ monthly loads. Your cargo arrives when promised, every time.',
                tagline: 'Always be there on time, rain or shine.',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                )
              },
              {
                title: 'Integrity',
                description: 'Full compliance with NBCRFLI, GIT insurance, and Transnet vendor standards. Trust built on transparency and accountability.',
                tagline: 'Honesty makes things easier.',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                )
              },
              {
                title: 'Expertise',
                description: 'Over 20 years of combined experience in logistics, from one truck to a full fleet operation. Proven track record of excellence.',
                tagline: 'Decades of industry knowledge, applied daily.',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                )
              }
            ].map((value) => (
              <StaggerItem key={value.title}>
                <motion.div 
                  className="group relative bg-white border-2 border-gray-200 rounded-3xl p-8 lg:p-10 transition-all duration-300 hover:shadow-2xl hover:border-yellow-400/50 overflow-hidden h-full"
                  whileHover={{ y: -6 }}
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400/5 rounded-full -mr-16 -mt-16 group-hover:bg-yellow-400/10 transition-colors duration-300"></div>
                  <div className="relative">
                    <div className="w-16 h-16 rounded-2xl bg-[#1a1a1a] flex items-center justify-center mb-6 group-hover:bg-yellow-400 transition-colors duration-300 text-white group-hover:text-[#1a1a1a]">
                      {value.icon}
                    </div>
                    <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">{value.title}</h3>
                    <p className="text-gray-600 leading-relaxed text-base mb-4">
                      {value.description}
                    </p>
                    <p className="text-sm text-gray-500 italic">
                      {value.tagline}
                    </p>
                    <div className="absolute bottom-8 left-8 right-8 h-0.5 bg-gray-100 group-hover:bg-yellow-400 transition-colors duration-300"></div>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Operational Excellence Section - Redesigned */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <ScrollAnimation>
            <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-yellow-400/10 border border-yellow-400/20 mb-6">
                <svg className="w-8 h-8 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 mb-6 leading-tight">
                Operational Excellence
              </h2>
              <div className="h-1 w-24 bg-yellow-400 mx-auto mb-6"></div>
              <p className="text-xl text-gray-600 leading-relaxed">
                Our commitment to operational excellence is reflected in our systems, processes, and hands-on approach.
              </p>
            </div>
          </ScrollAnimation>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {[
              {
                title: '24/7 Operations',
                description: 'Logistics does not stop at 5 PM. Neither do we. Our operations are managed via a live system with full yard camera coverage and 24-hour vehicle tracking.',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )
              },
              {
                title: 'Live System',
                description: 'Real-time monitoring and tracking. Every container and rail wagon is strictly monitored daily with continuous reporting to ensure the highest levels of service.',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                )
              },
              {
                title: 'Full Yard Camera Coverage',
                description: 'Complete security and monitoring. Our facility features full yard camera coverage and strict access control, ensuring we remain the trusted custodian of your assets.',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                )
              },
              {
                title: 'NOSA Safety Standards',
                description: 'We adhere strictly to NOSA safety standards. Our drivers are trained to prioritize safety without compromising efficiency.',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                )
              },
              {
                title: 'Hands-On Leadership',
                description: 'A complete hands-on company including the directors. Our directors are involved in daily operations, ensuring that the promises we make are the promises we keep.',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                )
              },
              {
                title: 'Strategic Partnerships',
                description: 'Aligned with many transport companies as strategic partners to achieve movement of product and services and ultimate customer satisfaction. Sound relationships with TFR, shipping agents, and ship planners.',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                )
              }
            ].map((item) => (
              <StaggerItem key={item.title}>
                <motion.div 
                  className="bg-white rounded-2xl p-8 border-2 border-gray-200 text-center transition-all duration-300 hover:shadow-xl hover:border-yellow-400/50 h-full"
                  whileHover={{ y: -4 }}
                >
                  <div className="w-16 h-16 rounded-2xl bg-yellow-400/10 border border-yellow-400/20 flex items-center justify-center mx-auto mb-6">
                    <div className="text-yellow-400">
                      {item.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-serif font-bold text-gray-900 mb-4">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Environmental Consciousness Section - Redesigned */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <ScrollAnimation>
            <div className="max-w-4xl mx-auto">
              <div className="mb-12 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-yellow-400/10 border border-yellow-400/20 mb-6">
                  <svg className="w-8 h-8 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 mb-6 leading-tight">
                  Environmental Responsibility
                </h2>
                <div className="h-1 w-24 bg-yellow-400 mx-auto mb-6"></div>
                <p className="text-xl text-gray-600 leading-relaxed">
                  We are committed to minimizing our environmental footprint and operating as a responsible corporate citizen.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white rounded-3xl p-8 lg:p-10 border-2 border-gray-200 shadow-lg">
                  <div className="w-14 h-14 rounded-2xl bg-[#1a1a1a] flex items-center justify-center mb-6">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">Best Practices</h3>
                  <p className="text-gray-600 leading-relaxed">
                    From adhering to the best practices in fuel efficiency to managing dust control in our bulk yards, we pride ourselves on being a responsible corporate citizen committed to environmental stewardship.
                  </p>
                </div>
                <div className="bg-white rounded-3xl p-8 lg:p-10 border-2 border-gray-200 shadow-lg">
                  <div className="w-14 h-14 rounded-2xl bg-[#1a1a1a] flex items-center justify-center mb-6">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">Sustainable Operations</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Our commitment to environmental consciousness extends across all operations, ensuring that we minimize our impact while maximizing efficiency and service delivery.
                  </p>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Community Impact Section - Redesigned */}
      <section className="py-12 sm:py-16 lg:py-20 bg-[#1a1a1a] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl -mr-48 -mt-48"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
          <div className="max-w-5xl mx-auto">
            <ScrollAnimation>
              <div className="mb-8 sm:mb-12 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-yellow-400/20 border border-yellow-400/30 mb-6">
                  <svg className="w-8 h-8 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 leading-tight">
                  Community Impact
                </h2>
                <div className="h-1 w-24 bg-yellow-400 mx-auto mb-6"></div>
              </div>
            </ScrollAnimation>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 lg:p-12 shadow-2xl">
              <div className="space-y-6">
                <div>
                  <h3 className="text-3xl font-serif font-bold text-white mb-6">Dare to Love Initiative</h3>
                  <p className="text-white/90 leading-relaxed text-lg mb-4">
                    During the KwaZulu-Natal unrest, when communities were in crisis, Vuyela Group mobilized immediately. We transported 3,000 food parcels to those in need, operating in challenging conditions to ensure essential supplies reached families across the region.
                  </p>
                  <p className="text-white/80 leading-relaxed mb-8">
                    This operation demonstrated not just our fleet capacity and rapid response capability, but our fundamental commitment to being a pillar of community resilience. We don&apos;t just move cargo—we move hope, we move support, and we move forward, together.
                  </p>
                </div>
                
                {/* Community Project Images Gallery */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="relative rounded-2xl overflow-hidden border border-white/10 group">
                    <Image
                      src="/images/comunity project 01.png"
                      alt="Vuyela Group community project - Food parcel distribution during KZN unrest"
                      width={800}
                      height={600}
                      className="w-full h-auto object-cover object-center transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="relative rounded-2xl overflow-hidden border border-white/10 group">
                    <Image
                      src="/images/comunity project 02.png"
                      alt="Vuyela Group community project - Delivering hope and support to communities in need"
                      width={800}
                      height={600}
                      className="w-full h-auto object-cover object-center transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Redesigned */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-400/5 rounded-full blur-3xl -mr-48 -mt-48"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollAnimation>
              <div className="space-y-6">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 leading-tight">
                  Partner With Us
                </h2>
                <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
                  Experience the difference that decades of expertise, unwavering integrity, and genuine partnership makes.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
                  <a
                    href="/quote"
                    className="inline-flex items-center justify-center rounded-xl bg-yellow-400 px-10 py-4 text-lg font-semibold text-[#1a1a1a] shadow-lg transition-all hover:bg-yellow-300 hover:shadow-xl hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-400"
                  >
                    Get a Quote
                  </a>
                  <a
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-xl border-2 border-[#1a1a1a] bg-transparent px-10 py-4 text-lg font-semibold text-[#1a1a1a] transition-all hover:bg-[#1a1a1a] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1a1a1a]"
                  >
                    Contact Us
                  </a>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>
    </>
  );
}
