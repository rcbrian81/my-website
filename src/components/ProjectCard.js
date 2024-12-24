import React from "react";

const ProjectCard = ({ title, description, images, video, links }) => {
  // Helper function to determine image layout classes
  const getImageLayoutClass = (count) => {
    switch (count) {
      case 1:
        return "grid-cols-1";
      case 2:
        return "grid-cols-2 gap-4";
      case 3:
        return "grid-cols-2 gap-4 grid-rows-[auto_auto]";
      case 4:
        return "grid-cols-2 gap-4";
      default:
        return "";
    }
  };

  return (
    <div className="flex flex-col bg-white shadow-md rounded-lg overflow-hidden mb-8">
      <h3 className="text-2xl font-bold p-4">{title}</h3>

      {/* Images Section */}
      {images && images.length > 0 && (
        <div className={`grid ${getImageLayoutClass(images.length)} p-4`}>
          {images.map((image, index) => (
            <img
              key={index}
              src={image.src}
              alt={image.alt || `Project Image ${index + 1}`}
              className="w-full h-auto rounded-md"
            />
          ))}
        </div>
      )}

      {/* Description and Video Section */}
      <div className={`flex flex-col ${video ? "md:flex-row" : ""} p-4 gap-4`}>
        {/* Text Section */}
        <div className={`${video ? "md:w-1/2" : "w-full"}`}>
          <p className="text-gray-700">{description}</p>
          {links && (
            <div className="flex gap-4 mt-4">
              {links.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline"
                >
                  {link.label}
                </a>
              ))}
            </div>
          )}
        </div>

        {/* Video Section */}
        {video && (
          <div className="md:w-1/2">
            <video autoPlay muted loop controls className="w-full rounded-md">
              <source src={video.src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
