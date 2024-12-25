import React from "react";
import ProjectCard from "./ProjectCard";
const emdm_description =
  "I was contracted to build a new mobile friendly website with online ordering & third-party delivery. The site allows the administrator to add, edit, or delete items to their online menu which is populated every time a user views the menu. Using stripe and door dash’s API’s the site allows the user to place an order, pay for the order and schedule delivery to their home. In addition to the sites normal pages I built a kitchen dashboard GUI meant be displayed in the restaurant in order to provide them real time updates on new Orders that are successfully processed. Please see the demos above. ";
const edm_texts = {
  description:
    "I was contracted to build a new mobile friendly website with online ordering & third-party delivery. The site allows the administrator to add, edit, or delete items to their online menu which is populated every time a user views the menu. Using stripe and door dash’s API’s the site allows the user to place an order, pay for the order and schedule delivery to their home. In addition to the sites normal pages I built a kitchen dashboard GUI meant be displayed in the restaurant in order to provide them real time updates on new Orders that are successfully processed. Please see the demos above.",
  highlights: [
    { text: "Mobile-friendly design" },
    {
      text: "Online ordering and delivery integration",
      subpoints: [
        "Integrated Stripe for payment processing",
        "Integrated DoorDash API for delivery scheduling",
      ],
    },
    { text: "Admin features to manage the menu" },
    {
      text: "Real-time kitchen dashboard",
      subpoints: [
        "Provides updates on new orders",
        "Shows order statuses in real time",
      ],
    },
  ],
  technologies: [
    {
      text: "Web Development",
      subpoints: ["next.js/react.js", "Node.js", "JavaScript", "Tailwind CSS"],
    },
    {
      text: "Database",
      subpoints: ["SQLite Remote Database"],
    },
    {
      text: "Third-Party API’s:",
      subpoints: [
        "Stripe Payment Processing",
        "Door Dash White Label Delivery",
      ],
    },
    {
      text: "Sessions",
      subpoints: ["User Authentication", "Cookies", "Session Management"],
    },
  ],
};

const projectData = [
  {
    title: "Restaurant Website",
    description: emdm_description,
    text: edm_texts,
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
    text: edm_texts,
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
    text: edm_texts,
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
            text={project.text}
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
