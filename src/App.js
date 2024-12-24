import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
//import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Hero projectId="projects" resumeId="resume" />
      <Projects id="projects" />
    </div>
  );
}

export default App;
