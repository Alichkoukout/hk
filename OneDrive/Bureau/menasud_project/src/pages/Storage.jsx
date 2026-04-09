import { motion } from 'framer-motion'
import Card from '../components/Card'

const Storage = () => {
  const facilities = [
    {
      title: 'Hong Kong Facility',
      description: 'State-of-the-art storage terminal in Hong Kong with 50,000 ton capacity.',
      icon: '🏗️',
      features: ['50,000 ton capacity', 'Climate controlled', 'H24 Security', 'Full Insurance']
    },
  ]

  const services = [
    {
      title: 'Bulk Storage',
      description: 'Large-scale storage for crude oil, refined products, and minerals.',
      icon: '📦'
    },
    {
      title: 'Climate Control',
      description: 'Temperature and humidity controlled environments for sensitive materials.',
      icon: '❄️'
    },
    {
      title: 'Insurance',
      description: 'Comprehensive insurance coverage for all stored materials.',
      icon: '🛡️'
    },
    {
      title: 'Logistics',
      description: 'Full logistics management including loading and transportation.',
      icon: '🚚'
    },
    {
      title: '24/7 Security',
      description: 'Round-the-clock security monitoring and access control.',
      icon: '🔒'
    },
    {
      title: 'Real-time Tracking',
      description: 'Online platform to monitor inventory and storage status.',
      icon: '📍'
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
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Storage & Logistics</h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            World-class storage facilities and logistics services across four continents
          </p>
        </motion.div>
      </section>

      {/* Overview */}
      <section className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Global Storage Network</h2>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              Our storage and logistics infrastructure features a premier facility in Hong Kong, ensuring your commodities are stored safely and delivered on time. With a state-of-the-art capacity of 50,000 tons, we offer the reliability and excellence you need.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <span className="text-2xl">📍</span>
                <span className="text-gray-600"><strong>Prime Location:</strong> Hong Kong - Strategic Asian Hub</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-2xl">📦</span>
                <span className="text-gray-600"><strong>50,000 Tons:</strong> Premium storage capacity</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-2xl">🔒</span>
                <span className="text-gray-600"><strong>100% Secure:</strong> Full insurance and monitoring</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-2xl">⚡</span>
                <span className="text-gray-600"><strong>Quick Turnaround:</strong> Rapid loading and dispatch</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-8 text-white"
          >
            <h3 className="text-2xl font-bold mb-6">Storage Capabilities</h3>
            <div className="space-y-4">
              <div>
                <p className="text-blue-100 text-sm">Total Capacity</p>
                <p className="text-4xl font-bold">50,000 tons</p>
              </div>
              <div className="border-t border-blue-400 pt-4">
                <p className="text-blue-100 text-sm">Active Location</p>
                <p className="text-4xl font-bold">Hong Kong</p>
              </div>
              <div className="border-t border-blue-400 pt-4">
                <p className="text-blue-100 text-sm">Current Utilization</p>
                <p className="text-4xl font-bold">92%</p>
              </div>
              <div className="border-t border-blue-400 pt-4">
                <p className="text-blue-100 text-sm">Uptime Guarantee</p>
                <p className="text-4xl font-bold">99.9%</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Storage Facilities */}
      <section className="section-container bg-gray-50">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Facilities</h2>
          <p className="text-xl text-gray-600">
            Modern storage terminals at strategic global locations
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-6 max-w-2xl mx-auto"
        >
          {facilities.map((facility, index) => (
            <Card
              key={index}
              title={facility.title}
              description={facility.description}
              icon={facility.icon}
              features={facility.features}
              delay={index * 0.1}
            />
          ))}
        </motion.div>
      </section>

      {/* Services */}
      <section className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Storage Services</h2>
          <p className="text-xl text-gray-600">
            Comprehensive solutions for all your storage needs
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -10 }}
              className="glass-effect p-6 rounded-xl text-center"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Monitoring & Tracking */}
      <section className="section-container bg-gray-50">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Advanced Monitoring</h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Our state-of-the-art monitoring system provides real-time visibility into your stored commodities. Access inventory data, temperature readings, and security logs anytime, anywhere.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Real-Time Inventory',
                description: 'Live updates on stock levels and movements'
              },
              {
                title: 'Environmental Control',
                description: 'Temperature and humidity monitoring 24/7'
              },
              {
                title: 'Security System',
                description: 'CCTV coverage and access control logging'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-effect p-6 rounded-xl"
              >
                <div className="text-3xl mb-3">📊</div>
                <h3 className="font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  )
}

export default Storage
