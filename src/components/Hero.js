export default function Hero({ projectId, resumeId }) {
  return (
    <section className="flex flex-col md:flex-row justify-between items-center h-auto md:h-screen px-6 md:px-12 bg-gray-50 py-8">
      {/* Left Section */}
      <div className="w-full md:w-1/2 space-y-6 mb-8 md:mb-0">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800">
          Hi, I’m Brian Sanchez
        </h1>
        <div className="space-y-2">
          <p className="text-lg md:text-xl text-gray-600">
            California State University San Marcos
          </p>
          <p className="text-lg md:text-xl text-gray-600">
            B.S. Computer Science
          </p>
          <p className="text-lg md:text-xl text-gray-600">ABET Accredited</p>
          <p className="text-lg md:text-xl text-gray-600">Aug 24'</p>
        </div>
        <div className="space-y-2">
          <p className="text-gray-600">rcbriansanchez@gmail.com</p>
          <p className="text-gray-600">(760)-828-2465</p>
          <p className="text-gray-600">135 Ely St, Oceanside, CA, 92054</p>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/2 flex flex-col items-center space-y-8">
        {/* Project Cards */}
        {[
          {
            title: "El Mundo De Mariscos Website",
            link: `https://mundodemariscos.com`,
            details: [
              "SQLite Database",
              "Session Management",
              "DoorDash API",
              "Payment Processing",
              "React.js/Next.js",
              "Tailwind CSS",
            ],
          },
          {
            title: "Magic Wand",
            link: null,
            details: [
              "Computer Vision",
              "Machine Learning",
              "Image Classification",
              "IoT Networking",
              "Raspberry Pi/Ubuntu",
              "Third-Party API",
              "Python Programming",
            ],
          },
          {
            title: "100+ Auto Watering System",
            link: null,
            details: [
              "Arduino",
              "Circuits",
              "H-Bridge",
              "Reverse Polarity Motorized Valve",
              "Solar Panel/Battery",
              "Soil Moisture Capacitive Sensor",
              "C++ Programming",
            ],
          },
        ].map((project, index) => (
          <div key={index} className="w-full">
            <a
              href={project.link ? project.link : `#${projectId}`}
              target={project.link ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="block px-6 py-3 bg-gray-800 text-white text-center rounded-lg shadow-md hover:bg-gray-700 transition"
            >
              {project.title}
            </a>
            <ul className="mt-4 space-y-2 text-center text-gray-700">
              {project.details.map((detail, idx) => (
                <li key={idx} className="text-gray-600">
                  {detail}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
