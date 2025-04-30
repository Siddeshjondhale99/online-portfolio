import { BrowserRouter as Router } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  GlobeAltIcon,
  AcademicCapIcon,
  BriefcaseIcon,
  CodeBracketIcon,
  TrophyIcon,
  CpuChipIcon as ChipIcon,
  CommandLineIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";
import "./App.css";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <Router>
      <div className="min-h-screen bg-white">
        {/* Navigation */}
        <nav className="fixed w-full bg-white shadow-sm z-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex justify-between items-center h-20">
              <motion.a
                href="/"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="text-2xl font-bold text-blue-600 hover:text-blue-700"
              >
                Siddesh Jondhale
              </motion.a>

              {/* Desktop Navigation */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="hidden md:flex items-center justify-end space-x-3 flex-1 ml-12"
              >
                {[
                  "Home",
                  "Contact",
                  "Education",
                  "Experience",
                  "Projects",
                  "Skills",
                  "Achievements",
                ].map((item) => (
                  <motion.a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="relative px-5 py-2.5 text-gray-600 hover:text-blue-600 rounded-lg transition-all duration-300 group font-medium text-[15px]"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="relative z-10">{item}</span>
                    <motion.div
                      className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform origin-left"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                    <motion.div
                      className="absolute inset-0 bg-blue-50 rounded-lg -z-10 border border-transparent group-hover:border-blue-100"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.a>
                ))}
              </motion.div>

              {/* Mobile Menu Button */}
              <div className="md:hidden">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="p-2.5 rounded-lg text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-300 border border-transparent hover:border-blue-100"
                >
                  {isMenuOpen ? (
                    <XMarkIcon className="h-6 w-6" />
                  ) : (
                    <Bars3Icon className="h-6 w-6" />
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="md:hidden bg-white border-t border-gray-100"
              >
                <div className="px-6 py-4 space-y-2">
                  {[
                    "Home",
                    "Contact",
                    "Education",
                    "Experience",
                    "Projects",
                    "Skills",
                    "Achievements",
                  ].map((item) => (
                    <motion.a
                      key={item}
                      href={`#${item.toLowerCase()}`}
                      className="relative block px-5 py-3 text-gray-600 hover:text-blue-600 rounded-lg transition-all duration-300 group font-medium"
                      onClick={() => setIsMenuOpen(false)}
                      whileHover={{ x: 10 }}
                    >
                      <span className="relative z-10">{item}</span>
                      <motion.div
                        className="absolute inset-0 bg-blue-50 rounded-lg -z-0 border border-transparent group-hover:border-blue-100"
                        initial={{ opacity: 0, x: -10 }}
                        whileHover={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3 }}
                      />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-4 pt-24">
          {/* Hero Section */}
          <section
            id="home"
            className="min-h-[90vh] flex items-center justify-center py-20"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div
                className="text-center md:text-left"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-5xl md:text-6xl font-bold mb-6 text-blue-600">
                  Siddesh Jondhale
                </h1>
                <h2 className="text-2xl md:text-3xl text-gray-700 mb-2">
                  B.E. in Information Technology
                </h2>
                <h3 className="text-xl text-blue-600 mb-2">
                  (Honours in Data Science)
                </h3>
                <p className="text-gray-500 mb-4">2022–2026</p>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-2xl">
                  An independent, self-motivated, and hardworking individual
                  with a strong passion for technology and data science. Focused
                  on achieving goals through consistent effort and continuous
                  learning.
                </p>
                <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                  <motion.a
                    href="#contact"
                    className="inline-flex items-center px-6 py-3 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <EnvelopeIcon className="w-5 h-5 mr-2" />
                    Get in Touch
                  </motion.a>
                  <motion.a
                    href="#projects"
                    className="inline-flex items-center px-6 py-3 rounded-full bg-white text-blue-600 font-semibold border-2 border-blue-600 hover:bg-blue-50 transition-colors duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <CodeBracketIcon className="w-5 h-5 mr-2" />
                    View Projects
                  </motion.a>
                </div>
              </motion.div>

              <motion.div
                className="relative"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
              >
                <div className="relative">
                  {/* Profile Image Container */}
                  <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
                    <div className="relative w-72 h-72 md:w-96 md:h-96 mx-auto overflow-hidden rounded-3xl shadow-xl">
                      <img
                        src="/profile.jpg"
                        alt="Siddesh Jondhale"
                        className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                      />
                    </div>

                    {/* Floating badges */}
                    <motion.div
                      className="absolute -top-4 -right-4 bg-white px-4 py-2 rounded-full shadow-lg"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      <div className="flex items-center space-x-2">
                        <ChipIcon className="w-5 h-5 text-blue-600" />
                        <span className="text-sm font-medium">
                          Data Science
                        </span>
                      </div>
                    </motion.div>

                    <motion.div
                      className="absolute -bottom-4 -left-4 bg-white px-4 py-2 rounded-full shadow-lg"
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7 }}
                    >
                      <div className="flex items-center space-x-2">
                        <CommandLineIcon className="w-5 h-5 text-blue-600" />
                        <span className="text-sm font-medium">Developer</span>
                      </div>
                    </motion.div>

                    {/* Additional decorative elements */}
                    <div className="absolute -top-6 -left-6 w-12 h-12 bg-blue-50 rounded-full opacity-50"></div>
                    <div className="absolute -bottom-6 -right-6 w-12 h-12 bg-purple-50 rounded-full opacity-50"></div>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Skills Section */}
          <motion.section
            id="skills"
            className="py-20"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.h2
              className="text-3xl font-bold text-center mb-12"
              {...fadeInUp}
            >
              Technical Skills
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "Programming",
                  icon: <CommandLineIcon className="w-8 h-8 text-blue-600" />,
                  skills: ["Java", "Python", "JavaScript", "TypeScript"],
                },
                {
                  title: "Web Development",
                  icon: <CodeBracketIcon className="w-8 h-8 text-purple-600" />,
                  skills: ["React.js", "Node.js", "HTML/CSS", "MongoDB"],
                },
                {
                  title: "Data Science",
                  icon: <ChipIcon className="w-8 h-8 text-blue-600" />,
                  skills: [
                    "Machine Learning",
                    "SQL",
                    "Data Analysis",
                    "Pandas",
                  ],
                },
              ].map((category, index) => (
                <motion.div
                  key={category.title}
                  className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center mb-4">
                    {category.icon}
                    <h3 className="text-xl font-semibold ml-3">
                      {category.title}
                    </h3>
                  </div>
                  <div className="space-y-3">
                    {category.skills.map((skill) => (
                      <div key={skill} className="flex items-center">
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                          <div
                            className="bg-gradient-to-r from-blue-600 to-purple-600 h-2.5 rounded-full"
                            style={{ width: "85%" }}
                          ></div>
                        </div>
                        <span className="ml-3 text-sm font-medium text-gray-600">
                          {skill}
                        </span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Contact Section with modern design */}
          <motion.section
            id="contact"
            className="py-20"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.h2
              className="text-3xl font-bold text-center mb-12"
              {...fadeInUp}
            >
              Get in Touch
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
                {...fadeInUp}
              >
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                      <EnvelopeIcon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-900">
                        Email
                      </h3>
                      <p className="text-gray-600">
                        siddeshjondhale99@gmail.com
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
                      <PhoneIcon className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-900">
                        Phone
                      </h3>
                      <p className="text-gray-600">8767730092</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                      <MapPinIcon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-900">
                        Location
                      </h3>
                      <p className="text-gray-600">Takli Road, Nashik, India</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
                {...fadeInUp}
                transition={{ delay: 0.2 }}
              >
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
                      <GlobeAltIcon className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-900">
                        Website
                      </h3>
                      <a
                        href="https://www.siddesh1.com"
                        className="text-blue-600 hover:text-blue-800"
                      >
                        www.siddesh1.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                      <CodeBracketIcon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-900">
                        GitHub
                      </h3>
                      <a
                        href="https://github.com/siddeshjondhale99"
                        className="text-blue-600 hover:text-blue-800"
                      >
                        github.com/siddeshjondhale99
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
                      <BriefcaseIcon className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-900">
                        LinkedIn
                      </h3>
                      <a
                        href="https://linkedin.com/in/siddesh-jondhale-35521023b"
                        className="text-blue-600 hover:text-blue-800"
                      >
                        LinkedIn Profile
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.section>
        </main>
      </div>
    </Router>
  );
}

export default App;
