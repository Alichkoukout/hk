import { motion } from 'framer-motion'

const Card = ({ 
  title, 
  description, 
  icon, 
  image,
  features = [],
  className = '',
  delay = 0,
  onClick = null
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -10 }}
      onClick={onClick}
      className={`glass-effect p-6 rounded-xl cursor-pointer transition-all duration-300 ${className}`}
    >
      {/* Icon */}
      {icon && (
        <div className="mb-4">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center text-white text-xl inline-flex">
            {icon}
          </div>
        </div>
      )}

      {/* Image */}
      {image && (
        <div className="mb-4 overflow-hidden rounded-lg h-48">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      {/* Title */}
      <h3 className="text-xl font-bold text-gray-900 mb-2">
        {title}
      </h3>

      {/* Description */}
      <p className="text-gray-600 text-sm leading-relaxed mb-4">
        {description}
      </p>

      {/* Features List */}
      {features.length > 0 && (
        <ul className="space-y-2 mb-4">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start space-x-2">
              <span className="text-blue-600 font-bold mt-0.5">✓</span>
              <span className="text-gray-700 text-sm">{feature}</span>
            </li>
          ))}
        </ul>
      )}

      {/* Learn More Link */}
      <motion.div
        whileHover={{ x: 5 }}
        className="inline-flex items-center text-blue-600 font-semibold text-sm"
      >
        Learn More →
      </motion.div>
    </motion.div>
  )
}

export default Card
