import React from "react";
import ProjectCard from "./ProjectCard";
const emdm_description =
  "I was contracted to build a new mobile friendly website with online ordering & third-party delivery. The site allows the administrator to add, edit, or delete items to their online menu which is populated every time a user views the menu. Using stripe and door dash’s API’s the site allows the user to place an order, pay for the order and schedule delivery to their home. In addition to the sites normal pages I built a kitchen dashboard GUI meant be displayed in the restaurant in order to provide them real time updates on new Orders that are successfully processed. Please see the demos above. ";
const emdm_texts = {
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
    },
  ],
};

const capstone_texts = {
  description:
    "This was my senior capstone project that my team and I together built. Named Magic wand, this project allows the user to make specific movements or shapes with a plastic wand in order to control IoT devices. The project was a favorite of our Dean who selected it to be demoed to guest at a large Fundraising Event for the University. ",
  highlights: [
    { text: "Computer Vision" },
    {
      text: "Machine Learning",
      subpoints: ["User Authentication", "Cookies", "Session Management"],
    },
    { text: "Networking" },
    {
      text: "Data Processing ",
    },
    { text: "Hardware Integration" },
  ],
  technologies: [
    {
      text: "MachineLearning  ",
    },
    {
      text: "OpenCV ",
    },
    {
      text: "Image Processing ",
    },
    {
      text: "Image Classification",
    },
    {
      text: "Networking/IoT devices",
    },
    {
      text: "API Calls",
    },
    {
      text: "Infrared lights & camera",
    },
    {
      text: "Python ",
    },
    {
      text: "c++",
    },
    {
      text: "Microcontroller ",
    },
    {
      text: "H-Bridge",
      subpoints: ["User Authentication", "Cookies", "Session Management"],
    },
  ],
};
const flow_texts = {
  description:
    "This is an off-grid automated water flow control system. I had planted a small orchard for my family but as I added more tress/plants the time I spent watering them quickly grew and became very time consuming. The location is about 40 mins from my house the couple times I would visit in a week would be consumed just watering the plants. The location has no electricity and water from a well. So I designed and installed drip irrigation lines that are hooked up to an elevated water tank but someone still needed to be present to open and close the valve. This is where the need for this project arose. Becasue of the constraints of the property location which is without electricity, being far away, extremley hot, & dry the solution required specific capabilites.  This is why I designed the system to have the following capabilites 1.Open/Close Water Flow, 2.Programable, 3.Measure Soil Moisture, 4.Off-Grid Power Source, 5.Weather-Proof, 6.Fire Resistant, 7.Remain Autonomous for weeks to months at a time. Initally I had thought about a solioid value but the ones that are popular for gardens required AC power but becasue this would be an off-grid powered system I would not only need a battery but an inverter in order to power it. This seemed like an uncessary complecation to the design which would be simpler if I only needed to supply DC current. After a little searching I did find a DC powered solid valve. Yet after some thinking I did not feel comfotable having to supply it with power for the entire time that the water flow would be opened. This was for 2 reasons, the 1st was that it would draw significantly more power than a valuve that can permaneltey open or close a valve, and 2nd because it seemed like an unecssary, although small, increased fire risk. That lead to some more searching which is when I came across a 2 wire DC motorized valvue. This was perfect for my project as it only required a 12V DC supply to power it and it only required power while openeing and closing the valve. The caviate was that bc it only had 2 wires it was also bippolar so in adition too needeing to supply it with power I would need to be able to reverse the electrical current flow. So I added an H-Bridge to the the design which after hookin up to the arduino and valvue would allow me to do just that. The only thing I left was a battery and solar panel to charge it. ",
  highlights: [
    { text: "Emmbeded Systems Programing" },
    {
      text: "Circuit Design",
    },
    { text: "Off-Grid Solar Powered" },
    {
      text: "Auto Waters 100+ fruit trees based on soil moisture",
    },
    { text: "Hardware Integration" },
  ],
  technologies: [
    {
      text: "C++",
    },
    {
      text: "Arduino R3 Microcontroller",
    },
    {
      text: "H-Bridge Circuit",
    },
    {
      text: "Soil Moisture Capacitive Sensor",
    },
    {
      text: "Bipolar Motorized Ball Valve",
    },
    {
      text: "Solar Panel",
    },
    {
      text: "Rechargable 12v battery",
    },
  ],
};

const projectData = [
  {
    title: "Restaurant Website",
    description: emdm_description,
    text: emdm_texts,
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
    text: capstone_texts,
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
    text: flow_texts,
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
