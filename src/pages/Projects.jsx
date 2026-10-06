import React from "react";
import ProjectEntry from "../components/ProjectEntry";
import { projects } from "../data/projects";

const Projects = () => {
  return (
    <div className="mx-auto w-full p-2 md:py-5 md:p-0">
      <div className="grid gap-5 md:grid-cols-3">
        <section className="flex h-full flex-col justify-start rounded-3xl border border-black bg-white p-8 shadow-[0_0_30px_rgba(255,255,255,0.6)] md:p-12">
          <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.28em] text-gray-500">
            Selected work / 2023—2025
          </p>
          <div>
            <h1 className="max-w-full text-4xl font-black leading-[0.9] tracking-tight text-black md:text-5xl">
              Featured Projects
            </h1>
            <p className="mt-8 max-w-xs text-lg leading-snug text-gray-600">
              A showcase of recent work, experiments, and useful things built with care.
            </p>
          </div>
          <div className="mt-12">
            <div className="space-y-2">
              {projects.map((project) => (
                <div key={project.name} className="flex items-center justify-between gap-3 text-xs">
                  <span className="flex min-w-0 items-center gap-2 font-medium text-gray-800">
                    <span className="h-2 w-2 shrink-0 rounded-full bg-black" />
                    <span className="truncate">{project.name}</span>
                  </span>
                  <span className="shrink-0 text-right text-[10px] uppercase tracking-[0.08em] text-gray-500">
                    {project.domain}
                  </span>
                </div>
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
