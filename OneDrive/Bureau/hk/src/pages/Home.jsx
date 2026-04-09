import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Card from '../components/Card'

const Home = () => {
  const services = [
    {
      title: 'Crude Oil Trading',
      description: 'Global crude oil trading with competitive pricing and reliable delivery.',
      icon: '🛢️',
      features: ['Brent & WTI', 'Global Supply', 'Competitive Rates']
    },
    {
      title: 'Mining Operations',
      description: 'Specialized mining trading covering precious and base metals.',
      icon: '⛏️',
      features: ['Metal Trading', 'Mineral Resources', 'Market Analysis']
    },
    {
      title: 'Fuel Products',
      description: 'Complete fuel product solutions for industrial and commercial needs.',
      icon: '⚡',
      features: ['Gasoline', 'Diesel', 'LPG']
    },
    {
      title: 'Storage & Logistics',
      description: 'World-class storage facilities and logistics management services.',
      icon: '📦',
      features: ['Warehousing', 'Distribution', 'Tracking']
    },
  ]

  const stats = [
    { number: '25+', label: 'Years Experience' },
    { number: '50+', label: 'Global Partners' },
    { number: '$2B+', label: 'Annual Turnover' },
    { number: '150+', label: 'Skilled Professionals' },
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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-blue-50 pt-32 pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
              >
                Global Energy & Mining <span className="gradient-text">Trading Leader</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl text-gray-600 mb-8 leading-relaxed"
              >
                Menasud International HK connects global energy and mining resources with strategic opportunities. We deliver excellence through expertise, reliability, and innovation.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link
                  to="/services"
                  className="btn-primary text-center"
                >
                  Explore Services
                </Link>
                <Link
                  to="/contact"
                  className="btn-secondary text-center"
                >
                  Contact Us
                </Link>
              </motion.div>
            </div>

            {/* Hero Image */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative group flex justify-center items-center"
            >
              <div className="w-full h-96 rounded-3xl overflow-hidden shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600 rounded-3xl opacity-10 blur-3xl"></div>
                <img
                  src="menasud2.png"
                  alt="Menasud Global Operations"
                  className="relative w-full h-full rounded-3xl object-contain"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div key={index} variants={itemVariants} className="text-center">
                <p className="text-4xl font-bold gradient-text mb-2">{stat.number}</p>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
          
          {/* Contact Details */}
          <div className="mt-16 border-t pt-12">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
            >
              <motion.div key="phone1" variants={itemVariants}>
                <p className="text-lg font-semibold text-gray-900">Mobile Africa</p>
                <a href="tel:+212631313102" className="text-2xl font-bold gradient-text hover:text-blue-700">+212 631 313 102</a>
              </motion.div>
              <motion.div key="phone2" variants={itemVariants}>
                <p className="text-lg font-semibold text-gray-900">Mobile Europe</p>
                <a href="tel:+352661184089" className="text-2xl font-bold gradient-text hover:text-blue-700">+352 661 184 089</a>
              </motion.div>
              <motion.div key="email" variants={itemVariants}>
                <p className="text-lg font-semibold text-gray-900">Email</p>
                <a href="mailto:sakdime@menasud.lu" className="text-2xl font-bold gradient-text hover:text-blue-700">sakdime@menasud.lu</a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-container bg-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive solutions for energy and mining trading across the globe
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              features={service.features}
              delay={index * 0.1}
            />
          ))}
        </div>
      </section>

      {/* Leadership Team Section */}
      <section className="section-container bg-gray-50">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Leadership Team</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experienced professionals leading the global energy and mining trade
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="glass-effect p-8 rounded-2xl text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Samuel Akdim</h3>
            <p className="text-blue-600 font-semibold mb-4">CEO</p>
            <p className="text-gray-600">Leading strategic vision and global operations</p>
          </motion.div>

          <motion.div variants={itemVariants} className="glass-effect p-8 rounded-2xl text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Rafael Vrhovac</h3>
            <p className="text-blue-600 font-semibold mb-4">Managing Director</p>
            <p className="text-gray-600">Overseeing business operations and management</p>
          </motion.div>

          <motion.div variants={itemVariants} className="glass-effect p-8 rounded-2xl text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Safouane Dannoune</h3>
            <p className="text-blue-600 font-semibold mb-4">Strategic Sourcing</p>
            <p className="text-gray-600">Managing strategic sourcing and supply chains</p>
          </motion.div>

          <motion.div variants={itemVariants} className="glass-effect p-8 rounded-2xl text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Omar IHDA</h3>
            <p className="text-blue-600 font-semibold mb-4">Business Development Africa & Middle East</p>
            <p className="text-gray-600">Driving growth and expansion in African and Middle Eastern markets</p>
          </motion.div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white"
        >
          <h2 className="text-4xl font-bold mb-6">Ready to Partner With Us?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Join hundreds of satisfied clients worldwide. Let's grow together.
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-4 bg-white text-blue-600 font-bold rounded-lg hover:bg-blue-50 transition-colors duration-200"
          >
            Get Started Today
          </Link>
        </motion.div>
      </section>
    </div>
  )
}

export default Home
