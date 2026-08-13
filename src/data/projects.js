import sparkShot from '../assets/images/sparkProperties.png';
import symbiosisShot from '../assets/images/symbiosis.jpg';
import rights2roofShot from '../assets/images/rights2roof.png';

/* Project copy is lifted from Keith_Baskerville_resume.pdf.

   `shotFit: 'contain'` renders the image whole on a --card ground instead of
   cropping it to the 420px frame. Use it for diagrams, where cropping would
   cut off the parts that carry the meaning. */

export const projects = [
  {
    slug: 'symbiosis',
    name: 'Symbiosis',
    tag: 'FASTAPI · ELASTICSEARCH',
    year: '2025 — 2026',
    blurb:
      'Production semantic search over 5,900+ system dynamics papers and 1,200+ machine-extracted causal models, built solo.',
    meta: [
      { label: 'Role', value: 'Sole engineer' },
      { label: 'Timeline', value: 'Oct 2025 — Apr 2026' },
      { label: 'Stack', value: 'FastAPI, Next.js, Elasticsearch' },
      { label: 'Deployment', value: 'Cloud Run + Vercel' },
    ],
    bullets: [
      {
        lead: 'Search platform',
        text:
          'A production semantic search platform over 5,900+ system dynamics papers and 1,200+ machine-extracted causal models: FastAPI, Next.js, Elasticsearch, 3,072-dimensional embeddings, shipped to Cloud Run & Vercel.',
      },
      {
        lead: 'ETL pipeline',
        text:
          'Built the ETL pipeline over 3,286 PDFs & 72k+ extracted figures, producing 884 structured causal diagrams at an 89% parse rate.',
      },
      {
        lead: 'Model parsing',
        text:
          'Converted 327 stock-and-flow models into queryable graphs via a custom XMILE/Vensim parser, and recovered orphaned model-to-paper links with an embedding-similarity auto-linker.',
      },
      {
        lead: 'Retrieval latency',
        text:
          'Cut retrieval latency with hybrid BM25 + vector search over precomputed embeddings, collapsing per-paper N+1 lookups into one batched query and dropping timeouts from 60s to 5s.',
      },
      {
        lead: 'Infrastructure',
        text:
          'Owned the Elasticsearch schema, OAuth, and Cloud Build CI/CD; a single gateway proxy made the move to Elastic Cloud a config change instead of a frontend rewrite.',
      },
    ],
    shot: symbiosisShot,
    shotAlt:
      'The Symbiosis home screen: a search field over 5,900+ system dynamics research papers.',
    links: {},
  },
  {
    slug: 'rights2roof',
    name: 'Rights2Roof',
    tag: 'LANGGRAPH · FASTMCP',
    year: '2025',
    award: 'Runner-up out of 7 teams · Google x Kura Labs Agentic AI competition',
    blurb:
      'Multi-agent AI housing rights assistant answering tenant questions over 333 pages of California and New York housing law.',
    meta: [
      { label: 'Role', value: 'Team build' },
      { label: 'Corpus', value: '333 pages of CA & NY housing law' },
      { label: 'Stack', value: 'LangGraph, FastMCP, FastAPI, Slack' },
      { label: 'Deployment', value: '4 Railway services' },
    ],
    bullets: [
      {
        lead: 'Agent graph',
        text:
          'Built a multi-agent tenant-rights assistant with LangGraph, FastMCP, FastAPI, and Slack — a 3-node planner → RAG → executor graph exposing 9 MCP tools over 333 pages of California and New York housing law.',
      },
      {
        lead: 'Retrieval & state',
        text:
          'Implemented Redis-backed vector search (text-embedding-3-large, top-5 retrieval) alongside conversation state, caching, and per-user rate limiting across 4 decoupled Railway services, cutting redundant LLM and API calls on follow-up turns.',
      },
    ],
    shot: rights2roofShot,
    shotFit: 'contain',
    shotAlt:
      'Rights2Roof architecture: a Slack query posts to FastAPI, which routes through a LangGraph planner, RAG, and executor agent trio backed by Redis memory, then returns the answer to the user.',
    links: {
      repo: 'https://github.com/OhziiiLov3/rights2roof',
      demo: 'https://vimeo.com/1143307938',
    },
  },
  {
    slug: 'spark',
    name: 'Spark Properties',
    tag: 'NEXT.JS · MONGODB',
    year: '2025',
    blurb:
      'Full-stack property rental marketplace — server actions, Mapbox geocoding, and user-to-user messaging, built and shipped solo.',
    meta: [
      { label: 'Role', value: 'Solo build' },
      { label: 'Timeline', value: '2025' },
      { label: 'Stack', value: 'Next.js 15, MongoDB, NextAuth' },
      { label: 'Deployment', value: 'Vercel' },
    ],
    bullets: [
      {
        lead: 'Marketplace',
        text:
          'Built and shipped a property rental marketplace solo — Next.js 15 server actions, MongoDB/Mongoose, and Google OAuth via NextAuth, with route protection and per-user listing management.',
      },
      {
        lead: 'Features',
        text:
          'Implemented Mapbox geocoding and location search, Cloudinary multi-image upload and optimization, paginated listing queries, and an internal user-to-user messaging system with unread notifications.',
      },
    ],
    shot: sparkShot,
    shotAlt: 'Spark Properties listing page',
    links: {
      live: 'https://spark-properties.vercel.app/',
      repo: 'https://github.com/OhziiiLov3/Spark-Properties',
    },
  },
];

export const getProject = (slug) => projects.find((p) => p.slug === slug);

export const getNextProject = (slug) => {
  const i = projects.findIndex((p) => p.slug === slug);
  if (i === -1) return null;
  return projects[(i + 1) % projects.length];
};
