import React from "react";
import ProjectEntry from "../components/ProjectEntry";
import { projects } from "../data/projects";

const Projects = () => {
  return (
    <div className="mx-auto w-full p-2 md:py-5 md:p-0">
      <div className="grid gap-5 md:grid-cols-3 md:auto-rows-fr">
        <section className="flex min-h-[360px] flex-col justify-start rounded-3xl border border-black bg-white p-8 shadow-[0_0_30px_rgba(255,255,255,0.6)] md:p-12">
          <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.28em] text-gray-500">
            Selected work / 2023—2025
          </p>
          <div>
            <h1 className="max-w-[8ch] text-6xl font-black leading-[0.86] tracking-tight text-black md:text-7xl">
              Featured Projects
            </h1>
            <p className="mt-8 max-w-xs text-lg leading-snug text-gray-600">
              A showcase of recent work, experiments, and useful things built with care.
            </p>
          </div>
          <div className="mt-12">
            <div className="flex flex-wrap gap-2">
              {['Dashboards', 'Data', 'Learning', 'Accessibility'].map((category) => (
                <span key={category} className="rounded-full border border-black px-3 py-1.5 text-xs text-gray-700">
                  {category}
                </span>
              ))}
            </div>
            <div className="mt-8 flex items-center justify-between border-t border-black/15 pt-4 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500">
              <span>Selected collection</span>
              <span className="text-black">{projects.length.toString().padStart(2, '0')} projects</span>
            </div>
          </div>
        </section>

        {projects.map((project, index) => (
          <ProjectEntry
            key={project.name}
            project={project}
            index={index}
            total={projects.length}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
