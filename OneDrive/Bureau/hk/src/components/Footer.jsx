import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import hkLogo from '../../hk logo.png'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <footer className="bg-gray-900 text-gray-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12"
        >
          {/* Company Info */}
          <motion.div variants={itemVariants}>
            <div className="flex items-center space-x-2 mb-4">
              <img src={hkLogo} alt="Menasud HK" className="h-8 w-auto" />
              <h3 className="text-lg font-bold">Menasud HK</h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Leading global provider of energy and mining trading solutions. Connecting resources with opportunity.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                  Contact
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Products */}
          <motion.div variants={itemVariants}>
            <h4 className="font-bold text-white mb-4">Products</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/petroleum" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                  Petroleum
                </Link>
              </li>
              <li>
                <Link to="/mining" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                  Mining
                </Link>
              </li>
              <li>
                <Link to="/storage" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                  Storage Solutions
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <h4 className="font-bold text-white mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <span className="font-semibold text-white">Email:</span>
                <br />
                <a href="mailto:info@menasud.hk" className="hover:text-blue-400 transition-colors">
                  info@menasud.hk
                </a>
              </li>
              <li>
                <span className="font-semibold text-white">Phone:</span>
                <br />
                <a href="tel:+85224681234" className="hover:text-blue-400 transition-colors">
                  +852 2468 1234
                </a>
              </li>
              <li>
                <span className="font-semibold text-white">Location:</span>
                <br />
                Hong Kong, SAR
              </li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-8"></div>

        {/* Bottom Footer */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm"
        >
          <p>&copy; {currentYear} Menasud International HK. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-blue-400 transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-blue-400 transition-colors duration-200">
              Terms of Service
            </a>
            <a href="#" className="hover:text-blue-400 transition-colors duration-200">
              Sitemap
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
