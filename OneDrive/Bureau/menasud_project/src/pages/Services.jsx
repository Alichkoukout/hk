import { motion } from 'framer-motion'
import Card from '../components/Card'

const Services = () => {
  const services = [
    {
      title: 'Commodity Trading',
      description: 'Complete trading services for crude oil, refined products, and precious metals.',
      icon: '📈',
      features: ['Spot Trading', 'Forward Contracts', 'Competitive Rates', 'Market Analysis']
    },
    {
      title: 'Risk Management',
      description: 'Hedging strategies and financial instruments to manage market volatility.',
      icon: '🛡️',
      features: ['Futures Hedging', 'Options Strategy', 'Price Protection', 'Expert Advice']
    },
    {
      title: 'Logistics & Delivery',
      description: 'End-to-end logistics solutions with reliable and timely delivery.',
      icon: '🚚',
      features: ['CIF Terms', 'FOB Terms', 'DDU Delivery', 'Full Insurance']
    },
    {
      title: 'Quality Assurance',
      description: 'Comprehensive testing and certification of all products.',
      icon: '✓',
      features: ['Lab Testing', 'Assay Reports', 'Certifications', 'Documentation']
    },
    {
      title: 'Market Intelligence',
      description: 'Daily market reports and analysis to guide your trading decisions.',
      icon: '📊',
      features: ['Daily Reports', 'Price Forecasts', 'Trend Analysis', 'Market News']
    },
    {
      title: 'Custom Solutions',
      description: 'Tailored services designed to meet your specific business needs.',
      icon: '⚙️',
      features: ['Flexible Terms', 'Custom Quantities', 'Special Handling', 'Dedicated Support']
    },
  ]

  const process = [
    {
      step: '1',
      title: 'Inquiry',
      description: 'Submit your commodity requirements and specifications'
    },
    {
      step: '2',
      title: 'Quote',
      description: 'Receive competitive pricing and detailed product information'
    },
    {
      step: '3',
      title: 'Negotiation',
      description: 'Discuss terms, delivery, and payment arrangements'
    },
    {
      step: '4',
      title: 'Agreement',
      description: 'Finalize contract with all details and conditions'
    },
    {
      step: '5',
      title: 'Execution',
      description: 'Process order and arrange logistics and documentation'
    },
    {
      step: '6',
      title: 'Delivery',
      description: 'Deliver product and complete all formalities'
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
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Our Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Comprehensive trading and logistics solutions tailored to your business needs
          </p>
        </motion.div>
      </section>

      {/* Services Grid */}
      <section className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Service Portfolio</h2>
          <p className="text-xl text-gray-600">
            Everything you need for successful commodity trading
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
            <Card
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              features={service.features}
              delay={index * 0.05}
            />
          ))}
        </motion.div>
      </section>

      {/* Trading Process */}
      <section className="section-container bg-gray-50">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Trading Process</h2>
          <p className="text-xl text-gray-600">
            Simple, transparent, and efficient workflow
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
          {process.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-effect p-6 rounded-xl relative"
            >
              <div className="text-3xl font-bold text-blue-600 mb-3">{item.step}</div>
              <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.description}</p>
              {index < 5 && (
                <div className="hidden lg:block absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 text-2xl text-gray-300">
                  →
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Menasud?</h2>
          <p className="text-xl text-gray-600">
            Key advantages that set us apart
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              title: 'Extensive Network',
              description: 'Access to suppliers and buyers across six continents',
              icon: '🌐'
            },
            {
              title: 'Competitive Pricing',
              description: 'Market-linked rates ensuring best value for your business',
              icon: '💰'
            },
            {
              title: 'Quick Execution',
              description: 'Fast response times and efficient transaction processing',
              icon: '⚡'
            },
            {
              title: 'Professional Team',
              description: 'Experienced traders and logistics experts at your service',
              icon: '👥'
            },
            {
              title: 'Transparent Dealings',
              description: 'Clear documentation and regular updates throughout process',
              icon: '📋'
            },
            {
              title: 'Secure Trading',
              description: 'Financial security and insurance backed by industry leaders',
              icon: '🔐'
            },
          ].map((advantage, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-start space-x-4"
            >
              <div className="text-3xl flex-shrink-0">{advantage.icon}</div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">{advantage.title}</h3>
                <p className="text-gray-600">{advantage.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Payment Terms */}
      <section className="section-container bg-gray-50">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Payment & Terms</h2>
          <p className="text-xl text-gray-600">
            Flexible payment options for your convenience
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: 'Advance Payment',
              terms: ['100% TT', 'Bank Details Provided', 'Quick Release'],
              icon: '💳'
            },
            {
              title: 'Letter of Credit',
              terms: ['L/C at Sight', 'L/C 30 days', 'Bank Guaranteed'],
              icon: '📄'
            },
            {
              title: 'Open Account',
              terms: ['Net 30 Days', 'Net 60 Days', 'Custom Terms'],
              icon: '📊'
            },
          ].map((payment, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass-effect p-6 rounded-xl"
            >
              <div className="text-3xl mb-4">{payment.icon}</div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">{payment.title}</h3>
              <ul className="space-y-2">
                {payment.terms.map((term, idx) => (
                  <li key={idx} className="flex items-center space-x-2 text-gray-600">
                    <span className="text-blue-600">✓</span>
                    <span>{term}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Services
