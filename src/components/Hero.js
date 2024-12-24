export default function Hero({ projectId, resumeId }) {
  return (
    <section className="flex justify-between items-center h-screen px-8 bg-gray-100">
      <div>
        <h1 className="text-5xl font-bold">Hi, I’m Brian Sanchez</h1>
        <div className="flex flex-col mt-4">
          <p className="text-xl ">California State University San Marcos</p>
          <p className="text-xl">B.S. Computer Science</p>
          <p className="text-xl">ABET Accredited</p>
          <p className="text-xl">Aug 24'</p>
        </div>
        <div className="flex flex-col mt-4">
          <p className="text-m ">rcbriansanchez@gmail.com</p>
          <p className="">(760)-828-2465</p>
          <p className="">135 Ely St, Oceanside, CA, 92054</p>
        </div>
      </div>

      <div className="flex flex-col gap-4 h-full">
        <div className="flex flex-col gap-4 h-1/2 b-4 b-black">
          <a
            href={`#${projectId}`}
            className="px-4 py-2 bg-gray-800 text-white rounded-md text-center"
          >
            El Mundo De Mariscos Website
          </a>
          <ul className="flex flex-col">
            <li className="flex-item mr-2">
              <a
                href="https://mundodemariscos.com"
                target="_blank"
                className="text-blue-600 hover:text-blue-800 underline"
                rel="noopener noreferrer"
              >
                mundodemariscos.com
              </a>
            </li>
            <li className="flex-item mr-2 ">SQLite Database</li>
            <li className="flex-item mr-2">Session Managment</li>
            <li className="flex-item mr-2">DoorDash API</li>
            <li className="flex-item mr-2">Payment Processing</li>
            <li className="flex-item mr-2">React.js/Next.js</li>
            <li className="flex-item mr-2">Tailwind css</li>
          </ul>
          <a
            href={`#${projectId}`}
            className="px-4 py-2 bg-gray-800 text-white rounded-md text-center"
          >
            Magic Wand
          </a>
          <ul className="flex flex-col">
            <li className="flex-item mr-2 ">Computer Vision</li>
            <li className="flex-item mr-2">Machine Learing</li>
            <li className="flex-item mr-2">Image Classification</li>
            <li className="flex-item mr-2">IoT networking</li>
            <li className="flex-item mr-2">RaspberryPi/Ubuntu</li>
            <li className="flex-item mr-2">Thrid-Part API</li>
            <li className="flex-item mr-2">Python Programing</li>
          </ul>
          <a
            href={`#${projectId}`}
            className="px-4 py-2 bg-gray-800 text-white rounded-md text-center"
          >
            100+ Auto Watering sytem
          </a>
          <ul className="flex flex-col">
            <li className="flex-item mr-2 ">Arduino</li>
            <li className="flex-item mr-2">Circuits</li>
            <li className="flex-item mr-2">H-Bridge</li>
            <li className="flex-item mr-2">
              Reverse Poloarity Motorized Valve
            </li>
            <li className="flex-item mr-2">Solar Pannel/Batter</li>
            <li className="flex-item mr-2">Soil Moisture Capacitive Sensor</li>
            <li className="flex-item mr-2">c++ Programing</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
