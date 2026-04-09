import { motion } from 'framer-motion'
import Card from '../components/Card'

const Partners = () => {
  const partnerCategories = [
    {
      category: 'Producers & Suppliers',
      description: 'Major oil and mining companies providing quality commodities',
      count: '15+',
      icon: '🏭',
      partners: ['African Mining Corp', 'Asian Energy Ltd', 'Gulf Petroleum Inc', 'Pacific Resources']
    },
    {
      category: 'End Users',
      description: 'Industrial and commercial buyers across multiple sectors',
      count: '25+',
      icon: '🏢',
      partners: ['Manufacturing Group', 'Power Generation Co', 'Chemical Industries', 'Refineries']
    },
    {
      category: 'Logistics Partners',
      description: 'Shipping, warehousing, and transportation providers',
      count: '12+',
      icon: '🚢',
      partners: ['Global Shipping', 'Port Authority', 'Transport Solutions', 'Warehouse Network']
    },
    {
      category: 'Financial Partners',
      description: 'Banks and financial institutions supporting trade',
      count: '8+',
      icon: '🏦',
      partners: ['International Bank', 'Trade Finance Co', 'Insurance Group', 'Investment Fund']
    },
  ]

  const benefits = [
    {
      title: 'Market Access',
      description: 'Direct access to global suppliers and buyers',
      icon: '🌍'
    },
    {
      title: 'Competitive Pricing',
      description: 'Best rates through volume negotiations and industry relationships',
      icon: '💰'
    },
    {
      title: 'Reliability',
      description: 'Trusted partners with proven track records',
      icon: '✓'
    },
    {
      title: 'Support',
      description: 'Dedicated partnership management and customer service',
      icon: '🤝'
    },
    {
      title: 'Growth',
      description: 'Opportunities to expand your business through our network',
      icon: '📈'
    },
    {
      title: 'Innovation',
      description: 'Access to new products, services, and market trends',
      icon: '💡'
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
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Our Partners</h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Building strong relationships with industry leaders worldwide
          </p>
        </motion.div>
      </section>

      {/* Partnership Network */}
      <section className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Partnership Network</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Over 60 strategic partners across production, trading, logistics, and finance sectors
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {partnerCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass-effect p-8 rounded-2xl"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{category.category}</h3>
                  <p className="text-gray-600">{category.description}</p>
                </div>
                <div className="text-4xl">{category.icon}</div>
              </div>
              
              <div className="bg-blue-100 text-blue-700 px-4 py-2 rounded-lg inline-block font-bold mb-6">
                {category.count} Partners
              </div>

              <div className="space-y-2">
                {category.partners.map((partner, idx) => (
                  <div key={idx} className="flex items-center space-x-2 text-gray-700">
                    <span className="text-blue-600">•</span>
                    <span>{partner}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Partnership Benefits */}
      <section className="section-container bg-gray-50">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Benefits of Partnership</h2>
          <p className="text-xl text-gray-600">
            What our partners gain from working with us
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -10 }}
              className="glass-effect p-6 rounded-xl text-center"
            >
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
              <p className="text-gray-600 text-sm">{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Partnership Values */}
      <section className="section-container bg-gray-50">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Partnership Philosophy</h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            We believe in building long-term relationships based on mutual trust, transparency, and shared success. Every partner is valued, whether you're a small emerging business or an established industry leader. We're committed to supporting your growth and helping you achieve your strategic objectives through collaborative efforts and innovative solutions.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            {/* Partnership buttons removed */}
          </div>
        </motion.div>
      </section>
    </div>
  )
}

export default Partners
