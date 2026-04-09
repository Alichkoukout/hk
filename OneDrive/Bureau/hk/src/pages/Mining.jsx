import { motion } from 'framer-motion'
import Card from '../components/Card'

const Mining = () => {
  const minerals = [
    {
      title: 'Gold Trading',
      description: 'High-quality gold bullion and gold dust trading from certified sources.',
      icon: '🏆',
      features: ['99.99% Purity', 'Certified Assay', 'Secure Trading', 'Spot Pricing']
    },
    {
      title: 'Silver',
      description: 'Industrial and investment grade silver with global market access.',
      icon: '💎',
      features: ['99.9% Purity', 'Bulk Supply', 'Competitive Rates', 'Quick Delivery']
    },
    {
      title: 'Copper',
      description: 'High-grade copper for industrial applications and investment.',
      icon: '⚙️',
      features: ['Grade A Copper', 'Industrial Use', 'Market Linked', 'Flexible Terms']
    },
    {
      title: 'Zinc & Lead',
      description: 'Quality zinc and lead metals for industrial applications.',
      icon: '🔧',
      features: ['High Purity', 'Industrial Grade', 'Bulk Orders', 'Technical Support']
    },
    {
      title: 'Aluminum',
      description: 'Premium aluminum ingots for aerospace and automotive industries.',
      icon: '🛩️',
      features: ['Aircraft Grade', 'High Quality', 'Certification', 'Supply Chain']
    },
    {
      title: 'Tin & Cobalt',
      description: 'Specialized metals for electronics and battery production.',
      icon: '📱',
      features: ['Tech Grade', 'Electronics Use', 'Compliance', 'Sustainable']
    },
  ]

  const miningRegions = [
    { region: 'Africa', minerals: ['Gold', 'Diamonds', 'Copper'], output: '25%' },
    { region: 'South America', minerals: ['Copper', 'Lithium', 'Silver'], output: '20%' },
    { region: 'Asia Pacific', minerals: ['Tin', 'Coal', 'Iron Ore'], output: '35%' },
    { region: 'Others', minerals: ['Zinc', 'Lead', 'Nickel'], output: '20%' },
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
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Mining Trading</h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Trade precious and base metals with confidence. Access global mining resources with certified quality.
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
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Mining Expertise</h2>
            <p className="text-gray-600 text-lg mb-4 leading-relaxed">
              With decades of experience in precious and base metals trading, we provide clients access to premium mining resources from the world's most productive regions.
            </p>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start space-x-3">
                <span className="text-blue-600 font-bold mt-1">✓</span>
                <span>Sources from certified and sustainable mining operations</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-blue-600 font-bold mt-1">✓</span>
                <span>Full assay and quality certification on all products</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-blue-600 font-bold mt-1">✓</span>
                <span>Competitive pricing based on international spot rates</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-blue-600 font-bold mt-1">✓</span>
                <span>Secure handling and insurance for high-value transactions</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-blue-600 font-bold mt-1">✓</span>
                <span>Custom sourcing solutions for specialized requirements</span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-yellow-500 to-orange-600 rounded-3xl p-8 text-white"
          >
            <h3 className="text-2xl font-bold mb-6">Annual Mining Volume</h3>
            <div className="space-y-4">
              <div>
                <p className="text-yellow-100 text-sm">Combined Metals</p>
                <p className="text-4xl font-bold">50,000+ tons</p>
              </div>
              <div className="border-t border-yellow-300 pt-4">
                <p className="text-yellow-100 text-sm">Trading Value</p>
                <p className="text-4xl font-bold">$800M+</p>
              </div>
              <div className="border-t border-yellow-300 pt-4">
                <p className="text-yellow-100 text-sm">Global Regions</p>
                <p className="text-4xl font-bold">4 Continents</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mining Products */}
      <section className="section-container bg-gray-50">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Mining Products</h2>
          <p className="text-xl text-gray-600">
            Complete range of precious and base metals
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {minerals.map((mineral, index) => (
            <Card
              key={index}
              title={mineral.title}
              description={mineral.description}
              icon={mineral.icon}
              features={mineral.features}
              delay={index * 0.05}
            />
          ))}
        </motion.div>
      </section>

      {/* Mining Regions */}
      <section className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Global Mining Sources</h2>
          <p className="text-xl text-gray-600">
            Access to premier mining regions worldwide
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {miningRegions.map((region, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass-effect p-6 rounded-xl"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">{region.region}</h3>
              <div className="mb-4">
                <p className="text-sm text-gray-600 mb-2">Primary Minerals:</p>
                <div className="flex flex-wrap gap-2">
                  {region.minerals.map((mineral, idx) => (
                    <span key={idx} className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full font-semibold">
                      {mineral}
                    </span>
                  ))}
                </div>
              </div>
              <div className="pt-4 border-t border-gray-200">
                <p className="text-2xl font-bold gradient-text">{region.output}</p>
                <p className="text-xs text-gray-600">Global Supply</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="section-container bg-gray-50">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Quality Assurance Process</h2>
          <p className="text-xl text-gray-600">
            Every shipment undergoes rigorous testing
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {['Sourcing', 'Initial Test', 'Lab Assay', 'Certification', 'Delivery'].map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-effect p-6 text-center relative"
            >
              <div className="text-3xl font-bold text-blue-600 mb-3">{index + 1}</div>
              <h3 className="font-bold text-gray-900">{step}</h3>
              {index < 4 && (
                <div className="hidden lg:block absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 text-xl text-gray-300">
                  →
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Mining
