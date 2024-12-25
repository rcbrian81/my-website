import { useState, useEffect } from "react";

export default function NavBar() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show navbar if scrolled down, hide if at the top
      if (window.scrollY > 0) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`bg-gray-800 text-white p-4 shadow-lg fixed top-0 w-full transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Rcbriansanchez@gmail.com</h1>
        <ul className="flex space-x-4">
          <li>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition-colors"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition-colors"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a href="/resume" className="hover:text-gray-300 transition-colors">
              Resume
            </a>
          </li>
          <li>
            <a
              href="/projects"
              className="hover:text-gray-300 transition-colors"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="/personal"
              className="hover:text-gray-300 transition-colors"
            >
              Personal
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
