import React from "react";

const ProjectCard = ({ title, description, text, images, videos, links }) => {
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

  const renderBulletPoints = (points) => {
    return (
      <ul className="list-disc list-inside">
        {points.map((point, index) => (
          <li key={index}>
            {point.text}
            {point.subpoints && (
              <ul className="list-disc list-inside ml-6">
                {" "}
                {/* Use ml-6 for indentation */}
                {point.subpoints.map((subpoint, subIndex) => (
                  <li key={subIndex}>{subpoint}</li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="flex flex-col bg-white shadow-md rounded-lg overflow-hidden mb-8">
      <h3 className="text-2xl font-bold p-4">{title}</h3>

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

      {(videos && videos.length > 0) || description || links ? (
        <div
          className={`grid gap-4 ${
            videos && videos.length > 0 ? "grid-cols-2" : "grid-cols-1"
          } p-4`}
        >
          {videos && videos.length > 0 && (
            <>
              {videos.map((video, index) => (
                <video
                  key={index}
                  autoPlay
                  muted
                  loop
                  controls
                  className="w-full rounded-md"
                >
                  <source src={video.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ))}
            </>
          )}

          <div className="flex flex-col justify-start items-start text-left">
            {/*<p className="text-gray-700">{description}</p>*/}
            {text && (
              <div>
                <h4 className="font-bold mt-4">Description:</h4>
                <p className="text-gray-700 text-xl">{text.description}</p>
              </div>
            )}
            <div className="flex flex-row text-xl">
              <div className="flex-item">
                {text?.highlights?.length > 0 && (
                  <div>
                    <h4 className="font-bold mt-4">Highlights:</h4>
                    {renderBulletPoints(text.highlights)}
                  </div>
                )}
              </div>
              <div className="flex-item">
                {text?.technologies?.length > 0 && (
                  <div>
                    <h4 className="font-bold mt-4">Technologies:</h4>
                    {renderBulletPoints(text.technologies)}
                  </div>
                )}
              </div>
            </div>

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
        </div>
      ) : null}
    </div>
  );
};
///////
export default ProjectCard;
