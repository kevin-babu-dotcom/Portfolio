import React, { useEffect, useRef, useState } from "react";
import FancyButton from "./fancybutton";

const GitHubIcon = (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

const ExternalLinkIcon = (
  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H18m0 0v4.5M18 6l-7 7" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M18 13.5V18a1.5 1.5 0 0 1-1.5 1.5h-10A1.5 1.5 0 0 1 5 18V8a1.5 1.5 0 0 1 1.5-1.5H11" />
  </svg>
);

const themes = [
  { card: "bg-cyan-100", dot: "bg-cyan-500", button: "bg-cyan-400" },
  { card: "bg-red-100", dot: "bg-red-500", button: "bg-red-400" },
  { card: "bg-lime-100", dot: "bg-lime-500", button: "bg-lime-400" },
  { card: "bg-violet-100", dot: "bg-violet-500", button: "bg-violet-400" },
  { card: "bg-yellow-100", dot: "bg-yellow-500", button: "bg-yellow-400" },
  { card: "bg-orange-100", dot: "bg-orange-500", button: "bg-orange-400" },
  { card: "bg-emerald-100", dot: "bg-emerald-500", button: "bg-emerald-400" },
];

const lineClass = (line) =>
  line.startsWith("//") ? "text-gray-500" : line.startsWith("✓") ? "text-orange-300" : "text-gray-200";

const ProjectEntry = ({ project, index }) => {
  const theme = themes[index % themes.length];
  const codeRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = codeRef.current;
    if (!node || typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.2 });

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const meta = [
    project.role,
    project.team && `Team of ${project.team}`,
    project.duration,
  ].filter(Boolean);

  return (
    <article className={`group flex min-h-[330px] flex-col rounded-3xl border border-black p-6 transition-[background,box-shadow,transform,border-color] duration-300 hover:liquidglass hover:-translate-y-1 hover:shadow-[0_16px_35px_rgba(0,0,0,0.2)] ${theme.card}`}>
      <div className="flex items-start gap-3">
        <span className={`mt-1.5 h-4 w-4 shrink-0 rounded-full ${theme.dot}`} />
        <div>
          <h2 className="text-2xl font-black leading-tight text-gray-900 transition-colors group-hover:text-white">{project.name}</h2>
          <p className="mt-1 text-sm italic text-gray-600 transition-colors group-hover:text-gray-200">{project.descriptor}</p>
        </div>
      </div>

      <p className="mt-5 text-[15px] leading-relaxed text-gray-700 transition-colors group-hover:text-gray-100">{project.description}</p>

      {meta.length > 0 && (
        <p className="mt-4 text-[10px] font-bold uppercase tracking-[0.12em] text-gray-500 transition-colors group-hover:text-gray-300">
          {meta.join(" · ")}
        </p>
      )}

        {project.stats && (
          <div className="mt-5 flex flex-wrap gap-2">
            {project.stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-black bg-black px-4 py-2.5 text-white shadow-[3px_3px_0_rgba(0,0,0,0.18)]"
              >
                <div className="font-black text-lg leading-none">{stat.value}</div>
                <div className="mt-0.5 text-[10px] uppercase tracking-wider text-white/70">{stat.label}</div>
              </div>
            ))}
          </div>
        )}

        <div className="mt-6">
          <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500 transition-colors group-hover:text-gray-300">Built with</p>
          <div className="flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-white px-3 py-1.5 text-xs text-gray-700"
            >
              {tech}
            </span>
          ))}
        </div>
        </div>

      <div ref={codeRef} className="mt-6 overflow-hidden rounded-2xl bg-gray-950 text-white">
        <div className="flex items-center gap-1.5 border-b border-white/10 px-4 py-2.5">
          <span className="h-2 w-2 rounded-full bg-gray-700" />
          <span className="h-2 w-2 rounded-full bg-gray-700" />
          <span className={`h-2 w-2 rounded-full ${theme.dot}`} />
          <span className="ml-auto font-mono text-[9px] text-gray-500">
            ~/{project.name.toLowerCase().replace(/\s+/g, "-")}
          </span>
        </div>
        <pre className="overflow-x-auto px-4 py-4 font-mono text-[10px] leading-5">
          {project.code.map((line, lineIndex) => (
            <div
              key={lineIndex}
              className={`${lineClass(line)} transition-[opacity,transform] duration-500 ${visible ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"}`}
              style={{ transitionDelay: visible ? `${lineIndex * 80}ms` : "0ms" }}
            >
              {line}
            </div>
          ))}
        </pre>
      </div>

      <div className="mt-auto flex gap-3 pt-8">
          {project.githubUrl && (
            <FancyButton
              href={project.githubUrl}
              className="min-w-[108px] bg-black px-5 py-2.5 text-xs font-medium text-white rounded-lg"
              icon={GitHubIcon}
              text="GitHub"
            />
          )}
          {project.liveUrl && (
            <FancyButton
              href={project.liveUrl}
              className={`min-w-[128px] ${theme.button} px-5 py-2.5 text-xs font-medium text-gray-900 rounded-lg`}
              icon={ExternalLinkIcon}
              text="Live site"
            />
          )}
        </div>
    </article>
  );
};

export default ProjectEntry;
