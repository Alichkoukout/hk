import { motion } from 'framer-motion'
import { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: ''
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Simulate form submission
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        subject: '',
        message: ''
      })
      setSubmitted(false)
    }, 3000)
  }

  const offices = [
    {
      city: 'Hong Kong',
      country: 'Hong Kong SAR',
      address: '123 Central Business District',
      phone: '+852 2468 1234',
      email: 'hk@menasud.hk',
      hours: 'Mon-Fri: 9AM - 6PM'
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
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Contact Us</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get in touch with our team. We're here to help and answer any question you might have.
          </p>
        </motion.div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all"
                    placeholder="+852 XXXX XXXX"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Company</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all"
                    placeholder="Your company"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all"
                  placeholder="What is this about?"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all resize-none"
                  placeholder="Your message..."
                ></textarea>
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full btn-primary justify-center"
                disabled={submitted}
              >
                {submitted ? '✓ Message Sent!' : 'Send Message'}
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Contact Information</h2>
              <p className="text-gray-600 text-lg mb-8">
                Reach out to our Hong Kong headquarters or use the form to contact us directly. Available 24/7 for trading support.
              </p>
            </div>

            {/* Quick Contact */}
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="text-2xl mt-1">📧</div>
                <div>
                  <h3 className="font-bold text-gray-900">Email</h3>
                  <a href="mailto:sakdime@menasud.lu" className="text-blue-600 hover:text-blue-700">
                    sakdime@menasud.lu
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="text-2xl mt-1">📞</div>
                <div>
                  <h3 className="font-bold text-gray-900">Mobile Africa</h3>
                  <a href="tel:+212631313102" className="text-blue-600 hover:text-blue-700">
                    +212 631 313 102
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="text-2xl mt-1">📱</div>
                <div>
                  <h3 className="font-bold text-gray-900">Mobile Europe</h3>
                  <a href="tel:+352661184089" className="text-blue-600 hover:text-blue-700">
                    +352 661 184 089
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="text-2xl mt-1">🌐</div>
                <div>
                  <h3 className="font-bold text-gray-900">Website</h3>
                  <p className="text-gray-600">www.menasud.hk</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="text-2xl mt-1">⏰</div>
                <div>
                  <h3 className="font-bold text-gray-900">Business Hours</h3>
                  <p className="text-gray-600">24/7 Trading Support</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Offices */}
      <section className="section-container bg-gray-50">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Headquarters</h2>
          <p className="text-xl text-gray-600">
            Strategic Hub in Hong Kong
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-6 max-w-2xl mx-auto"
        >
          {offices.map((office, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass-effect p-8 rounded-2xl"
            >
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{office.city}</h3>
                  <p className="text-blue-600 font-semibold">{office.country}</p>
                </div>
                <div className="text-3xl">📍</div>
              </div>

              <div className="space-y-3">
                <div>
                  <p className="text-sm text-gray-600">Address</p>
                  <p className="text-gray-900 font-medium">{office.address}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Phone</p>
                  <a href={`tel:${office.phone}`} className="text-blue-600 hover:text-blue-700 font-medium">
                    {office.phone}
                  </a>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Email</p>
                  <a href={`mailto:${office.email}`} className="text-blue-600 hover:text-blue-700 font-medium">
                    {office.email}
                  </a>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Business Hours</p>
                  <p className="text-gray-900 font-medium">{office.hours}</p>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full mt-6 btn-secondary"
              >
                Get Directions
              </motion.button>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* FAQ */}
      <section className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600">
            Find answers to common questions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              q: 'How quickly can you process an order?',
              a: 'Typical processing time is 2-5 business days depending on product type and documentation.'
            },
            {
              q: 'What payment methods do you accept?',
              a: 'We accept bank transfers, letters of credit, and open account terms for established clients.'
            },
            {
              q: 'Do you provide quality certifications?',
              a: 'Yes, all products come with full assay and quality certification from independent labs.'
            },
            {
              q: 'What is your minimum order quantity?',
              a: 'Minimums vary by product. Please contact us for specific MOQ information.'
            },
          ].map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-effect p-6 rounded-xl"
            >
              <h3 className="font-bold text-gray-900 mb-3 flex items-start">
                <span className="text-blue-600 mr-3 text-lg">Q:</span>
                {faq.q}
              </h3>
              <p className="text-gray-600 flex items-start">
                <span className="text-blue-600 mr-3 font-bold">A:</span>
                {faq.a}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Contact
