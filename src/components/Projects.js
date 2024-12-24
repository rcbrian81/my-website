import React from "react";
import ProjectCard from "./ProjectCard";

const projectData = [
  {
    title: "Restaurant Website",
    description:
      "A modern website for online ordering, built with React and Tailwind CSS.",
    images: [
      { src: "/images/restaurant1.jpg", alt: "Restaurant homepage" },
      { src: "/images/restaurant2.jpg", alt: "Menu page" },
    ],
    video: { src: "/videos/emdm.mov" },
    links: [
      { label: "Live Demo", url: "https://restaurant-demo.com" },
      {
        label: "GitHub",
        url: "https://github.com/yourusername/restaurant-project",
      },
    ],
  },
  {
    title: "Wand Tracking App",
    description:
      "A Python app using OpenCV to track a wand's motion and draw shapes.",
    images: [
      { src: "/images/wand-tracking.jpg", alt: "Wand tracking visualization" },
    ],
    video: { src: "/videos/magicwand.MOV" },
    links: [
      { label: "GitHub", url: "https://github.com/yourusername/wand-tracking" },
    ],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-16 px-8 bg-gray-200">
      <h2 className="text-3xl font-bold mb-8">My Projects</h2>
      <div className="flex flex-col">
        {projectData.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            images={project.images}
            video={project.video}
            links={project.links}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
