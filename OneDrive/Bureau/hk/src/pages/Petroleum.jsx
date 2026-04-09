import { motion } from 'framer-motion'
import Card from '../components/Card'

const Petroleum = () => {
  const products = [
    {
      title: 'Crude Oil - Brent Blend',
      description: 'Premium crude oil sourced from North Sea fields. High quality and consistent supply.',
      icon: '🛢️',
      features: ['Typical Gravity 38°API', 'Low Sulfur Content', 'Consistent Quality', 'Flexible Terms']
    },
    {
      title: 'WTI Crude Oil',
      description: 'West Texas Intermediate crude oil trading with competitive pricing.',
      icon: '⛽',
      features: ['38.5°API Gravity', 'Premium Grade', 'Reliable Supply', 'Global Distribution']
    },
    {
      title: 'Gasoline',
      description: 'High-quality refined gasoline products for commercial distribution.',
      icon: '🚗',
      features: ['RON 92-95', 'Ultra-Low Sulfur', 'Distribution Network', 'Regular Supply']
    },
    {
      title: 'Diesel',
      description: 'Premium diesel fuel suitable for industrial and commercial applications.',
      icon: '🚛',
      features: ['ULSD Grade', 'High Performance', 'Logistics Support', 'Quality Assured']
    },
    {
      title: 'Fuel Oil',
      description: 'Heavy fuel oil for power generation and industrial heating applications.',
      icon: '🔥',
      features: ['IFO380 Grade', 'Cost-Effective', 'Bulk Supply', 'Expert Guidance']
    },
    {
      title: 'LPG Trading',
      description: 'Liquefied petroleum gas for residential and industrial use worldwide.',
      icon: '⚡',
      features: ['Propane Supply', 'Safe Handling', 'Storage Solutions', 'Competitive Rates']
    },
  ]

  const specifications = [
    { product: 'Brent Crude', gravity: '38°API', sulfur: '0.37%', price_ref: 'Dated Brent' },
    { product: 'WTI Crude', gravity: '38.5°API', sulfur: '0.24%', price_ref: 'WTI Spot' },
    { product: 'Gasoline', gravity: '55-60°API', sulfur: '<10ppm', price_ref: 'MOPS' },
    { product: 'Diesel', gravity: '35°API', sulfur: '<10ppm', price_ref: 'ICE Gasoil' },
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
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Petroleum Trading</h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Comprehensive crude oil and refined products trading with global reach and competitive pricing
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
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose Us</h2>
            <ul className="space-y-4 text-lg text-gray-600">
              <li className="flex items-start space-x-3">
                <span className="text-blue-600 font-bold mt-1">✓</span>
                <span>Access to premium crude oil from major producing nations</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-blue-600 font-bold mt-1">✓</span>
                <span>Competitive pricing with transparent market benchmarking</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-blue-600 font-bold mt-1">✓</span>
                <span>Flexible delivery terms and reliable logistics</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-blue-600 font-bold mt-1">✓</span>
                <span>24/7 market monitoring and trading support</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-blue-600 font-bold mt-1">✓</span>
                <span>Certified quality assurance and technical expertise</span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-8 text-white"
          >
            <h3 className="text-2xl font-bold mb-6">Trading Volumes</h3>
            <div className="space-y-4">
              <div>
                <p className="text-blue-100 text-sm">Monthly Average</p>
                <p className="text-4xl font-bold">500,000+ barrels</p>
              </div>
              <div className="border-t border-blue-400 pt-4">
                <p className="text-blue-100 text-sm">Annual Turnover</p>
                <p className="text-4xl font-bold">$1.2 Billion</p>
              </div>
              <div className="border-t border-blue-400 pt-4">
                <p className="text-blue-100 text-sm">Geographic Markets</p>
                <p className="text-4xl font-bold">4 Continents</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Products */}
      <section className="section-container bg-gray-50">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Products</h2>
          <p className="text-xl text-gray-600">
            Complete range of crude oil and refined petroleum products
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {products.map((product, index) => (
            <Card
              key={index}
              title={product.title}
              description={product.description}
              icon={product.icon}
              features={product.features}
              delay={index * 0.05}
            />
          ))}
        </motion.div>
      </section>

      {/* Specifications Table */}
      <section className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Product Specifications</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-blue-600">
                  <th className="text-left py-4 px-6 font-bold text-gray-900">Product</th>
                  <th className="text-left py-4 px-6 font-bold text-gray-900">Gravity (°API)</th>
                  <th className="text-left py-4 px-6 font-bold text-gray-900">Sulfur Content</th>
                  <th className="text-left py-4 px-6 font-bold text-gray-900">Price Reference</th>
                </tr>
              </thead>
              <tbody>
                {specifications.map((spec, index) => (
                  <motion.tr
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="border-b border-gray-200 hover:bg-blue-50 transition-colors"
                  >
                    <td className="py-4 px-6 text-gray-900 font-semibold">{spec.product}</td>
                    <td className="py-4 px-6 text-gray-600">{spec.gravity}</td>
                    <td className="py-4 px-6 text-gray-600">{spec.sulfur}</td>
                    <td className="py-4 px-6 text-blue-600 font-semibold">{spec.price_ref}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </section>

      {/* Supply Chain */}
      <section className="section-container bg-gray-50">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-12">Our Supply Chain</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {['Sourcing', 'Quality Control', 'Logistics', 'Delivery'].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-effect p-6 relative"
              >
                <div className="text-3xl mb-3 font-bold text-blue-600">{index + 1}</div>
                <h3 className="font-bold text-gray-900">{step}</h3>
                {index < 3 && (
                  <div className="hidden md:block absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 text-2xl text-gray-300">
                    →
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  )
}

export default Petroleum
