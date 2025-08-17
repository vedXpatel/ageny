"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export function AnimatedServices() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const services = [
    {
      title: "Web Development",
      description: "Custom web applications built with modern frameworks and best practices",
      icon: "🌐",
      color: "from-blue-500 to-cyan-500",
      delay: 0.1
    },
    {
      title: "Mobile Apps",
      description: "Cross-platform mobile applications using React Native and Flutter",
      icon: "📱",
      color: "from-purple-500 to-pink-500",
      delay: 0.2
    },
    {
      title: "API Development",
      description: "RESTful and GraphQL APIs with proper documentation and testing",
      icon: "🔌",
      color: "from-green-500 to-emerald-500",
      delay: 0.3
    },
    {
      title: "UI/UX Design",
      description: "Beautiful, intuitive user interfaces that enhance user experience",
      icon: "🎨",
      color: "from-orange-500 to-red-500",
      delay: 0.4
    }
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div 
          className="mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            What We Do
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Comprehensive web development services to bring your vision to life
          </p>
        </motion.div>

        <div ref={ref} className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className="group relative"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: service.delay }}
                whileHover={{ y: -10 }}
              >
                {/* Floating Card Effect */}
                <motion.div
                  className="absolute inset-0 rounded-2xl bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(135deg, ${service.color.split(' ')[0].replace('from-', '')} 0%, ${service.color.split(' ')[1].replace('to-', '')} 100%)`
                  }}
                  animate={{
                    y: [0, -5, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.2,
                  }}
                />
                
                <div className="relative bg-white rounded-2xl p-8 shadow-lg border border-gray-100 group-hover:shadow-2xl transition-all duration-500 group-hover:border-transparent">
                  {/* Animated Icon */}
                  <motion.div 
                    className="text-6xl mb-6 flex justify-center"
                    whileHover={{ 
                      scale: 1.2,
                      rotate: [0, -10, 10, 0]
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    {service.icon}
                  </motion.div>

                  {/* Content */}
                  <div className="text-center">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-white transition-colors duration-500">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 group-hover:text-gray-100 transition-colors duration-500 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Hover Effect Overlay */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl bg-gradient-to-r opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                    style={{
                      background: `linear-gradient(135deg, ${service.color.split(' ')[0].replace('from-', '')} 0%, ${service.color.split(' ')[1].replace('to-', '')} 100%)`
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
