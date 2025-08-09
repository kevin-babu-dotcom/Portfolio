import React from "react";
import FancyButton from "../components/fancybutton";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Student Score Predictor",
      description: "A small ML project. A model trained to predict the score of a student based on the inputted hours of study using machine learning algorithms.",
      githubUrl: "https://github.com/kevin-babu-dotcom/StudentScoreModel",
      liveUrl: null,
      tech: ["Python", "Machine Learning", "Scikit-learn"],
      color: "bg-blue-100",
      accent: "bg-blue-500"
    },
    {
      id: 2,
      title: "HydraList",
      description: "A playful, AI-powered to-do list app inspired by the mythical Hydra: every time you complete a task, two more related tasks appear! Built with React and Tailwind CSS.",
      githubUrl: "https://github.com/kevin-babu-dotcom/HydraList",
      liveUrl: "https://hydra-list.vercel.app/",
      tech: ["React", "Tailwind CSS", "AI"],
      color: "bg-red-100",
      accent: "bg-red-500"
    },
    {
      id: 3,
      title: "Mandhify",
      description: "Calculates how many Kuzhimandis you can eat with a given amount of money. For what period of time 3 times a day. A fun local food calculator!",
      githubUrl: "https://github.com/kevin-babu-dotcom/mandhify",
      liveUrl: "https://mandhify-rose.vercel.app/",
      tech: ["Web App", "Calculator", "Local Culture"],
      color: "bg-orange-100",
      accent: "bg-orange-500"
    },
    {
      id: 4,
      title: "AudioNav",
      description: "An on-going development of a tool for the visually challenged to help them navigate through the world using audio-based guidance and assistive technology.",
      githubUrl: "https://github.com/kevin-babu-dotcom/AudioNav",
      liveUrl: null,
      tech: ["Accessibility", "Audio Processing", "Navigation"],
      color: "bg-green-100",
      accent: "bg-green-500"
    }
  ];

  return (
    <div className="md:py-2  md:my-0 mx-auto flex-col flex w-full md:p-0 p-5">
      <div className="md:grid grid-cols-3 grid-rows-3 h-full w-full gap-4 p-5">
        {/* Featured Projects Header */}
        <div className="col-span-1 rounded-3xl row-span-2 row-start-1 col-start-1 bg-white border-3 h-full w-full flex justify-center items-center shadow-[0_0_30px_rgba(255,255,255,0.6)] flex-col md:my-0 my-6 md:py-0 py-10">
          <div className="text-center p-6">
            <h1 className="text-4xl font-bold mb-4">Featured Projects</h1>
            <p className="text-gray-600 text-lg mb-6">A showcase of my recent work and experiments</p>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span>Machine Learning</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <span>Web Applications</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                <span>Fun Projects</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span>Accessibility Tools</span>
              </div>
            </div>
          </div>
        </div>

        {/* Project Cards */}
        {projects.map((project, index) => (
          <div 
            key={project.id} 
            className={`col-span-1 rounded-3xl row-span-1 ${project.color} border-3 h-full w-full shadow-[0_0_30px_rgba(255,255,255,0.6)] md:my-0 my-6 md:py-0 py-6 relative overflow-hidden`}
          >
            {/* Project Content */}
            <div className="p-5 h-full flex flex-col justify-between">
              {/* Header */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <div className={`w-4 h-4 ${project.accent} rounded-full`}></div>
                  <h2 className="text-xl font-bold text-gray-800">{project.title}</h2>
                </div>
                
                {/* Description */}
                <p className="text-sm text-gray-700 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-2 py-1 bg-white bg-opacity-70 rounded-full text-xs font-medium text-gray-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <FancyButton
                  href={project.githubUrl}
                  className="bg-black bg-gray-900 text-white text-xs px-4 py-2 rounded-lg flex items-center  flex-1"
                  icon={
                    <svg className="w-4 h-4 " fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  }
                  text="GitHub"
                />
                
                {project.liveUrl && (
                  <FancyButton
                    href={project.liveUrl}
                    className={`${project.accent} opacity-90 text-black text-xs px-3 py-2 rounded-lg flex items-center gap-2 flex-1`}
                    icon={
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    }
                    text="Live Demo"
                  />
                )}
              </div>
            </div>
          </div>
        ))}

        {/* Coming Soon Cards */}
        {[...Array(3)].map((_, index) => (
          <div 
            key={`coming-soon-${index}`}
            className="col-span-1 rounded-3xl row-span-1 bg-gray-50 border-3 border-dashed border-gray-300 h-full w-full flex justify-center items-center shadow-[0_0_30px_rgba(255,255,255,0.6)] flex-col md:my-0 my-6 md:py-0 py-10"
          >
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-600 mb-2">Coming Soon</h3>
              <p className="text-sm text-gray-500">More exciting projects on the way!</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
