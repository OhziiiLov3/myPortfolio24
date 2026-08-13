import resumePdf from '../assets/Keith_Baskerville_resume.pdf';

/* All copy below is lifted from Keith_Baskerville_resume.pdf — do not reword
   without updating the résumé too. */

export const profile = {
  name: ['Keith L.', 'Baskerville Jr.'],
  monogram: 'klb',
  eyebrow: 'SF Bay Area · Available for work',
  title: 'Backend / Applied AI Engineer',
  lede:
    'Backend and applied AI engineer. I built and shipped Symbiosis solo — semantic search, ETL, and LLM extraction over 5,900+ papers.',
  aboutLede:
    'Backend and applied AI engineer. I built and shipped Symbiosis solo — semantic search, ETL, and LLM extraction over 5,900+ papers — and spent four years before that teaching backend engineering to 300+ students.',
  aboutBody:
    'That combination is the point: I can build the retrieval system and then sit with the people who have to use it.',
};

export const contact = {
  email: 'klbaskerville0520@gmail.com',
  phone: '510-925-7219',
  location: 'SF Bay Area, CA',
  github: 'https://github.com/OhziiiLov3',
  linkedin: 'https://linkedin.com/in/keithlbaskervillejr/',
  site: 'https://keithbaskerville-dev.netlify.app',
  resume: resumePdf,
};

export const roles = [
  {
    date: 'Oct 2025 — Apr 2026',
    title: 'Full Stack Engineer',
    org: 'Equitable AI Underwriters Lab · Remote',
    note:
      'Research lab applying systems thinking and ML to equitable societal outcomes. Symbiosis was originally developed at Google as a closed-source project; I rebuilt and extended it with its lead researcher.',
    points: [
      'Sole engineer on Symbiosis, a production semantic search platform over 5,900+ system dynamics papers and 1,200+ machine-extracted causal models: FastAPI, Next.js, Elasticsearch, 3,072-dimensional embeddings, shipped to Cloud Run & Vercel.',
      'Built the ETL pipeline over 3,286 PDFs & 72k+ extracted figures, producing 884 structured causal diagrams at an 89% parse rate.',
      'Converted 327 stock-and-flow models into queryable graphs via a custom XMILE/Vensim parser, and recovered orphaned model-to-paper links with an embedding-similarity auto-linker.',
      'Cut retrieval latency with hybrid BM25 + vector search over precomputed embeddings, collapsing per-paper N+1 lookups into one batched query and dropping timeouts from 60s to 5s.',
      'Owned the Elasticsearch schema, OAuth, and Cloud Build CI/CD; a single gateway proxy made the move to Elastic Cloud a config change instead of a frontend rewrite.',
    ],
  },
  {
    date: '2022 — Present',
    title: 'Technical Instructor & Curriculum Facilitator',
    org: 'General Assembly · The Last Mile · Codepath',
    points: [
      'Taught backend and full stack engineering — Python, JavaScript, React, REST APIs, MVC — to 300+ students across three programs, including in-person instruction for incarcerated students at The Last Mile.',
      'Led code reviews, debugging sessions, and technical assessments; 85% course completion across 7 cohorts at General Assembly.',
      'Prepared 60+ Codepath fellows for engineering internships, with fellows placing at companies including Salesforce.',
    ],
  },
  {
    date: '2017 — 2020',
    title: 'Earlier Career',
    org: 'Glide Memorial · Compass Family Services — San Francisco, CA',
    points: [
      'Ran financial-literacy and housing-access programs; co-designed an internal housing database with the Data Impact team.',
    ],
  },
];

export const stats = [
  { num: '5,900+', label: 'Papers indexed in Symbiosis' },
  { num: '89%', label: 'Parse rate across 3,286 PDFs' },
  { num: '60s → 5s', label: 'Retrieval timeouts cut' },
  { num: '300+', label: 'Students taught across three programs' },
];

export const education = [
  {
    title: 'University of San Francisco',
    detail: 'M.A. International Studies, 2025',
    note:
      'Thesis: Financial Inclusion — The Role of Banks and Credit Unions in San Francisco’s Civic Center–Tenderloin (mixed-methods research).',
  },
  {
    title: 'Stockton University, NJ',
    detail: 'B.A. Philosophy and Religion; Minor in Economics, 2015',
  },
];

export const certifications = [
  { title: 'AWS Certified Cloud Practitioner', detail: '2025' },
  { title: 'General Assembly', detail: 'Software Engineering Immersive, 2021' },
];

export const stackGroups = [
  { label: 'Languages', items: 'Python, JavaScript, TypeScript, SQL' },
  {
    label: 'Backend',
    items:
      'FastAPI, Django, Django REST Framework, Node.js, Express — REST API design, JWT auth, MVC, system design, data modeling',
  },
  {
    label: 'Data',
    items:
      'PostgreSQL, Elasticsearch, Redis, MongoDB, DynamoDB, vector databases — ETL pipelines, indexing, caching',
  },
  {
    label: 'AI / ML',
    items:
      'RAG, embeddings, hybrid search, structured extraction, vision-model prompting, LangGraph, FastMCP, agent workflows',
  },
  {
    label: 'Infra',
    items:
      'Google Cloud (Cloud Run, Cloud Build), Vercel, Elastic Cloud, AWS, Docker, CI/CD, Git, Railway',
  },
  { label: 'Frontend', items: 'React, Next.js' },
];
