import { motion } from 'framer-motion'
import Card from '../components/Card'

const About = () => {
  const values = [
    {
      title: 'Integrity',
      description: 'We maintain the highest standards of honesty and transparency in all business dealings.',
      icon: '🤝'
    },
    {
      title: 'Excellence',
      description: 'Commitment to quality and continuous improvement in everything we do.',
      icon: '⭐'
    },
    {
      title: 'Innovation',
      description: 'Embracing new technologies and strategies to stay ahead in the market.',
      icon: '💡'
    },
    {
      title: 'Sustainability',
      description: 'Responsible practices that protect our environment for future generations.',
      icon: '🌱'
    },
  ]

  const team = [
    {
      name: 'Samuel Akdim',
      role: 'CEO',
      experience: 'Strategic Vision'
    },
    {
      name: 'Rafael Vrhovac',
      role: 'Managing Director',
      experience: 'Operations Lead'
    },
    {
      name: 'Safouane Dannoune',
      role: 'Strategic Sourcing',
      experience: 'Procurement Expert'
    },
    {
      name: 'Omar IHDA',
      role: 'Business Development Africa & Middle East',
      experience: 'Regional Expansion'
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  return (
    <div className="w-full">
      {/* Header */}
      <section className="bg-gradient-to-br from-gray-50 to-blue-50 pt-32 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <h1 className="text-5xl font-bold text-gray-900 mb-6">About Menasud International</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A trusted partner in global energy and mining trading for over two decades
          </p>
        </motion.div>
      </section>

      {/* Company Story */}
      <section className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-4">
              Founded in 2000, Menasud International HK has grown to become a leading force in global energy and mining trading. Starting with a vision to connect resources with opportunities, we've built a network that spans six continents.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-4">
              Our expertise in crude oil, refined products, and precious metals has earned us the trust of hundreds of partners worldwide. We pride ourselves on maintaining consistent quality, competitive pricing, and reliable delivery.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Today, we continue to innovate and expand our services, staying committed to excellence and sustainability in everything we do.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-8 text-white h-96 flex flex-col justify-center">
              <div className="mb-6">
                <p className="text-6xl font-bold mb-2">25+</p>
                <p className="text-xl text-blue-100">Years of Excellence</p>
              </div>
              <div className="mb-6 border-t border-blue-400 pt-6">
                <p className="text-5xl font-bold mb-2">$2B</p>
                <p className="text-xl text-blue-100">Annual Trading Volume</p>
              </div>
              <div className="border-t border-blue-400 pt-6">
                <p className="text-5xl font-bold mb-2">6</p>
                <p className="text-xl text-blue-100">Continents Served</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-container bg-gray-50">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
          <p className="text-xl text-gray-600">
            What drives us forward every single day
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {values.map((value, index) => (
            <Card
              key={index}
              title={value.title}
              description={value.description}
              icon={value.icon}
              delay={index * 0.1}
            />
          ))}
        </motion.div>
      </section>

      {/* Leadership Team */}
      <section className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Leadership Team</h2>
          <p className="text-xl text-gray-600">
            Experienced professionals leading the company
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass-effect p-6 text-center"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl">
                👤
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{member.name}</h3>
              <p className="text-blue-600 font-semibold mb-2">{member.role}</p>
              <p className="text-gray-600 text-sm">{member.experience}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Certifications */}
      <section className="section-container bg-gray-50">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Certifications & Compliance</h2>
          <p className="text-xl text-gray-600">
            Meeting international standards and regulations
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {['ISO 9001', 'ISO 14001', 'OHSAS 18001', 'LILO Certified', 'FSA Compliant', 'PCA Approved'].map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="glass-effect p-8 text-center"
            >
              <div className="text-4xl mb-4">✓</div>
              <p className="font-bold text-gray-900">{cert}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  )
}

export default About
