import React from "react";
import ProjectCard from "./ProjectCard";

const projectData = [
  {
    title: "Restaurant Website",
    description:
      "A modern website for online ordering, built with React and Tailwind CSS.",
    images: [
      { src: "/images/emdm_er.png", alt: "Restaurant homepage" },
      { src: "/images/emdm_code.png", alt: "Menu page" },
    ],
    videos: [
      // Changed from video to videos
      { src: "/videos/emdm.mov" },
      { src: "/videos/emdm_crud.mov" },
    ],
    links: [
      { label: "Live Demo", url: "https://mundodemariscos.com" },
      {
        label: "GitHub",
        url: "https://github.com/rcbrian81/emdm.git",
      },
    ],
  },
  {
    title: "Wand Tracking App",
    description:
      "A Python app using OpenCV to track a wand's motion and draw shapes.",
    images: [
      { src: "/images/mw_flow.png", alt: "Wand tracking visualization" },
      { src: "/images/mw_epochs.png", alt: "Wand tracking visualization" },
      { src: "/images/mw_data.png", alt: "Wand tracking visualization" },
      { src: "/images/mw_model.png", alt: "Wand tracking visualization" },
    ],
    videos: [
      // Changed from video to videos
      { src: "/videos/magicwand.MOV" },
    ],
    links: [
      { label: "GitHub", url: "https://github.com/yourusername/wand-tracking" },
    ],
  },
  {
    title: "Off-Grid Automated Water Managment System",
    description:
      "A Python app using OpenCV to track a wand's motion and draw shapes.",
    images: [
      { src: "/images/arduino_box.JPG", alt: "Wand tracking visualization" },
      { src: "/images/arduino_wires.JPG", alt: "Wand tracking visualization" },
    ],
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
            videos={project.videos} // Updated from video to videos
            links={project.links}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
