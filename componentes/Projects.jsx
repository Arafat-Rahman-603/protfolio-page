"use client";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Portfolio Website",
    link: "https://portfolio-webpage-blue.vercel.app",
    img: "/p.png",
    desc: "A personal portfolio website built with React and Tailwind CSS."
  },
  {
    title: "Home Rent App (Demo)",
    link: "https://home-rent-one.vercel.app",
    img: "/p1.png",
    desc: "A demo platform built with React, Tailwind, MongoDB, Express."
  },
  {
    title: "Mini Global Chat App (Demo)",
    link: "https://chatterly-puce.vercel.app",
    img: "/p2.png",
    desc: "A real-time chat app with React, Tailwind, MongoDB, Express.js."
  },
  {
    title: "K72 (Clone)",
    link: "https://k72-ca-eta.vercel.app/",
    img: "/p3.png",
    desc: "A clone of K72 built with React, Bootstrap, MongoDB, Express, Gsap"
  },
  {
    title: "E-commerce Website (Demo)",
    link: "https://github.com/Arafat-Rahman-603/E-Shop",
    img: "/p4.png",
    desc: "A demo e-commerce website built with React, Bootstrap, MongoDB, Express."
  },
];

export default function Projects() {
  // Duplicate the projects for infinite loop effect
  const projectList = [...projects, ...projects];

  return (
    <section
      id="projects"
      className="py-20 px-6 md:px-16 bg-gray-100 dark:bg-gray-900 transition-all duration-300"
    >
      <h2 className="text-3xl font-bold text-center mb-12">🚀 Projects</h2>

      <div className="overflow-hidden  py-10 relative">
        <motion.div
          className="flex gap-6"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 15, // speed of loop
          }}
        >
          {projectList.map((p, i) => (
            <a
              key={i}
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="min-w-[280px] sm:min-w-[320px] md:min-w-[360px] rounded-2xl overflow-hidden shadow-lg bg-white dark:bg-gray-800 hover:scale-105 transition-transform transition-all duration-300"
            >
              <img
                src={p.img}
                alt={p.title}
                className="w-full h-44 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {p.desc}
                </p>
              </div>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
