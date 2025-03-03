import { motion } from "framer-motion";
import { useState } from "react";
import projects from "./projectsData";

export default function Portfolio() {
  const [page, setPage] = useState("home");

  return (
    <div className="min-h-screen flex flex-col bg-gray-100 text-gray-800">
      {/* Navbar */}
      <nav className="flex justify-between p-6 shadow-md bg-white">
        <h1 className="text-lg font-bold italic">Meghsss</h1>
        <div className="space-x-6">
          <button onClick={() => setPage("home")} className="hover:underline italic">Home</button>
          <button onClick={() => setPage("projects")} className="hover:underline italic">Projects</button>
          <button className="hover:underline italic">About Me</button>
        </div>
      </nav>

      <hr />

      {/* Main Content - Pushes Footer Down */}
      <div className="flex-1">
        {page === "home" ? <HomePage /> : <ProjectsPage />}
      </div>

      <hr />

      {/* Footer Stays at Bottom */}
      <motion.footer 
        className="text-center py-6 text-sm italic bg-white"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        ©2025 Meghsss. All rights reserved.
      </motion.footer>
    </div>
  );
}

function HomePage() {
  return (
    <motion.section
      className="p-12"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-2xl font-semibold italic">Welcome to Meghsss Portfolio</h2>
      <p className="mt-2 italic">
        Let's explore my journey of learnings and growth,  
        filled with exciting projects and continuous evolution!
      </p>
      <div className="mt-8 flex gap-6">
        <motion.div
          className="w-80 h-52 bg-gray-300 rounded-lg"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        />
        <motion.div
          className="w-80 h-52 bg-gray-300 rounded-lg"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        />
      </div>
    </motion.section>
  );
}

function ProjectsPage() {
  return (
    <motion.section
      className="p-12 bg-white flex flex-col items-center justify-center text-center"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-2xl font-semibold italic">Projects</h2>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 place-items-center">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            className="w-96 h-100 bg-black backdrop-blur-lg rounded-xl overflow-hidden border border-gray-700 hover:border-gray-600 hover:transform hover:scale-[1.02] hover:shadow-xl transition-all duration-300 group flex flex-col"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
          >
            <div className="w-full h-48">
              <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
            </div>
            <div className="p-6 space-y-4 flex flex-col flex-grow">
              <h3 className="text-xl font-semibold text-white">{project.title}</h3>
              <p className="text-gray-400 text-base leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-2 justify-center">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="bg-[#FF3939]/10 text-[#FF3939] px-3 py-1 rounded-full text-sm font-medium">{tech}</span>
                ))}
              </div>
              <p className="text-sm text-gray-500 text-center">Made by - {project.author}</p>
              <div className="flex justify-center mt-auto">
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center bg-[#FF3939] hover:bg-[#FF6347] text-white px-6 py-3 rounded-lg text-sm transition-all duration-300 group-hover:scale-105">
                  View Project
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
