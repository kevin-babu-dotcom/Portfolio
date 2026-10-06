/**
 * @typedef {Object} Project
 * @property {string} name         Short project name
 * @property {string} descriptor   Subtitle under the name
 * @property {string} domain       Primary product or engineering domain
 * @property {string} stackName    Named technical architecture
 * @property {string} description  2–3 line summary with metrics
 * @property {string[]} tech       Tech chips
 * @property {string | null} githubUrl
 * @property {string | null} liveUrl
 * @property {string} [role]     Role on the project
 * @property {number} [team]     Team size
 * @property {string} [duration] e.g. "Ongoing", "1 month"
 * @property {{value: string, label: string}[]} [stats]  Headline metrics
 * @property {string[]} code       Terminal lines; "//" lines are comments, "✓" lines use the accent
 */

/** @type {Project[]} */
export const projects = [
  {
    name: "Placement Cell",
    descriptor: "Multi-Module Recruitment Management System",
    domain: "EdTech · Recruitment Systems",
    stackName: "Recruitment Intelligence Platform",
    description:
      "Official placement portal for Govt. Model Engineering College. 10+ modules covering recruiters, student profiles, drives and analytics, serving 1,500+ students and coordinators.",
    role: "Full Stack Developer",
    team: 2,
    duration: "1 month",
    stats: [
      { value: "10+", label: "modules" },
      { value: "1,500+", label: "users" },
    ],
    tech: ["Next.js", "Django", "PostgreSQL"],
    githubUrl: null,
    liveUrl: "https://pc.mec.ac.in",
    code: [
      "// new placement drive",
      "POST /api/drives { company, ctc, eligibility }",
      "notify(eligible_students) → 412 sent",
      "✓ drive published",
    ],
  },
  {
    name: "RetailPulse",
    descriptor: "Airflow-Orchestrated ETL & Analytics API",
    domain: "Retail Analytics · Data Engineering",
    stackName: "Batch ETL Orchestration",
    description:
      "End-to-end ETL pipeline processing 641K+ retail sales records with Python, Pandas and PostgreSQL, orchestrated by Airflow and exposed via FastAPI.",
    role: "Data Engineer",
    team: 5,
    duration: "Ongoing",
    stats: [{ value: "641K+", label: "records" }],
    tech: ["Python", "Pandas", "PostgreSQL", "Airflow", "FastAPI", "Docker"],
    githubUrl: "https://github.com/RUK692004/Retail-Sales-Data-Engineering",
    liveUrl: null,
    code: [
      "// airflow dag: retail_etl",
      "extract(raw_sales.csv)   → 641,203 rows",
      "transform(clean, dedupe, aggregate)",
      "load(postgres.fact_sales)",
      "// GET /api/sales?region=south",
      "✓ pipeline succeeded",
    ],
  },
  {
    name: "ALP",
    descriptor: "AI-Driven Adaptive Learning Engine",
    domain: "EdTech · Applied AI",
    stackName: "Adaptive Learning Intelligence Layer",
    description:
      "Adaptive coding platform that personalises learning paths from individual and cohort data, with an AI evaluation pipeline and a public dashboard across 1,400+ problems for 70+ students.",
    role: "Full Stack Developer",
    team: 4,
    duration: "Ongoing",
    stats: [
      { value: "1,400+", label: "problems" },
      { value: "70+", label: "students" },
    ],
    tech: ["Next.js", "TypeScript", "Supabase", "Monaco", "Python"],
    githubUrl: "https://github.com/kevin-babu-dotcom/ALP2",
    liveUrl: null,
    code: [
      "// submission received",
      "evaluate(code, rubric) → mastery: 0.82",
      'cohort.trend(topic="graphs")',
      'recommend(next="BFS variants")',
      "✓ learning path updated",
    ],
  },
  {
    name: "StressLab",
    descriptor: "Real-Time API Load Testing & Latency Observability",
    domain: "Developer Tools · Observability",
    stackName: "Real-Time Performance Observability",
    description:
      "Load-testing dashboard that simulates high-concurrency traffic with Autocannon and streams live p99 latency via Server-Sent Events, with SQLite-backed trend analysis to catch degrading endpoints.",
    tech: ["Node.js", "React", "Autocannon", "SSE", "SQLite"],
    githubUrl: "https://github.com/kevin-babu-dotcom/APIStressDashboard",
    liveUrl: "https://api-stress-dashboard.vercel.app/",
    code: [
      "// load test",
      "autocannon -c 500 -d 30 /api/orders",
      "stream(SSE) → p99: 184ms",
      "compare(last_7_runs)",
      "✓ regression flagged: /api/orders",
    ],
  },
  {
    name: "HydraList",
    descriptor: "Generative AI Task Expansion Engine",
    domain: "Productivity · Generative AI",
    stackName: "Recursive Productivity Intelligence",
    description:
      "AI-powered to-do list with a twist: complete a task and two more appear. Built with React and Tailwind CSS.",
    tech: ["React", "Tailwind CSS", "AI"],
    githubUrl: "https://github.com/kevin-babu-dotcom/HydraList",
    liveUrl: "https://hydra-list.vercel.app/",
    code: [
      "// task completed",
      'complete("write README")',
      "ai.spawn(2) → new tasks",
      "✓ the hydra grows",
    ],
  },
  {
    name: "AudioNav",
    descriptor: "Audio-Cue Assistive Navigation System",
    domain: "Accessibility · Audio Computing",
    stackName: "Context-Aware Assistive Audio",
    description:
      "Assistive tool that helps visually challenged users navigate their surroundings using audio cues.",
    tech: ["Accessibility", "Audio Processing", "Navigation"],
    githubUrl: "https://github.com/kevin-babu-dotcom/AudioNav",
    liveUrl: null,
    code: [
      "// user on the move",
      "detect(surroundings)",
      'cue(audio, direction="left")',
      "✓ guidance delivered",
    ],
  },
  {
    name: "ScoreCast",
    descriptor: "Regression-Based Academic Performance Predictor",
    domain: "Machine Learning · Education",
    stackName: "Predictive Academic Modeling",
    description:
      "Machine learning model that predicts a student's score based on hours studied, built with Python and Scikit-learn.",
    tech: ["Python", "Machine Learning", "Scikit-learn"],
    githubUrl: "https://github.com/kevin-babu-dotcom/StudentScoreModel",
    liveUrl: null,
    code: [
      "// train",
      "model.fit(hours, scores)",
      "model.predict(hours=7.5)",
      "✓ score predicted",
    ],
  },
];
