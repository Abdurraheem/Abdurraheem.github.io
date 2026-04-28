import { motion } from 'framer-motion';
import {
  Code,
  Link,
  Mail,
  Brain,
  Database,
  Cpu,
  Server,
  Globe,
  Workflow
} from 'lucide-react';

export default function Portfolio() {
  const experience = [
    {
      company: 'Walmart',
      role: 'Senior Software Engineer',
      duration: '2021 — Present',
      highlights: [
        'Architected AI-native developer platforms for automated API scaffolding, service orchestration, and LLM-assisted code generation.',
        'Built distributed Node.js systems serving 5K+ RPS with CI/CD automation, repository provisioning, and deployment pipelines.',
        'Designed enterprise-scale AI ingestion pipelines with embeddings, vector indexing, and Retrieval-Augmented Generation (RAG).'
      ]
    },
    {
      company: 'Paytm',
      role: 'Senior Software Engineer',
      duration: '2019 — 2021',
      highlights: [
        'Designed resilient fintech microservices for KYC, onboarding, and transaction workflows handling 8K+ RPS.',
        'Implemented fault-tolerant payment systems with transactional consistency and high availability.'
      ]
    },
    {
      company: 'AppyPie',
      role: 'Full Stack Developer',
      duration: '2018 — 2019',
      highlights: [
        'Built event-driven notification systems using AWS Lambda, SNS, and IoT pipelines.',
        'Developed frontend and backend workflows for scalable SaaS applications.'
      ]
    }
  ];

  const skills = {
    frontend: ['React.js', 'Next.js', 'TypeScript', 'JavaScript', 'Redux', 'TailwindCSS'],
    backend: ['Node.js', 'Express.js', 'Microservices', 'REST APIs', 'System Design'],
    database: ['MongoDB', 'MySQL', 'Redis', 'Milvus', 'Vector Databases'],
    ai: ['LLM Systems', 'RAG Pipelines', 'Semantic Search', 'Embeddings', 'AI Agents'],
    infra: ['AWS', 'Docker', 'CI/CD', 'Kubernetes', 'Distributed Systems']
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-zinc-950 to-black text-white">
      <main className="max-w-7xl mx-auto px-6 py-16 space-y-24">
        {/* Hero */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.3em] text-zinc-400">
              Full Stack Architect · AI Systems Engineer
            </p>
            <h1 className="text-6xl font-bold leading-tight">
              Mohammad <span className="text-zinc-400">AbdurRaheem</span>
            </h1>
            <p className="text-xl text-zinc-300 leading-relaxed max-w-2xl">
              Senior software engineer with 9+ years building full-stack applications,
              distributed systems, developer platforms, and AI-native infrastructure.
              Specialized in scalable backend systems, modern frontend experiences,
              and enterprise AI platforms.
            </p>
            <div className="flex gap-4 pt-4">
              <a href="https://github.com/Abdurraheem" className="p-3 rounded-2xl bg-zinc-900 hover:bg-zinc-800 transition">
                <Code />
              </a>
              <a href="https://linkedin.com/in/786-mohammad-raheeem" className="p-3 rounded-2xl bg-zinc-900 hover:bg-zinc-800 transition">
                <Link />
              </a>
              <a href="mailto:mohdraheem06@gmail.com" className="p-3 rounded-2xl bg-zinc-900 hover:bg-zinc-800 transition">
                <Mail />
              </a>
            </div>
          </div>

          <div className="bg-zinc-950 border border-zinc-800 rounded-3xl shadow-xl p-8 space-y-6">
            <div className="flex items-center gap-4"><Brain className="w-8 h-8" /><span>LLM Applications</span></div>
            <div className="flex items-center gap-4"><Database className="w-8 h-8" /><span>Vector Search & RAG</span></div>
            <div className="flex items-center gap-4"><Cpu className="w-8 h-8" /><span>Distributed Systems</span></div>
            <div className="flex items-center gap-4"><Server className="w-8 h-8" /><span>Backend Architecture</span></div>
            <div className="flex items-center gap-4"><Globe className="w-8 h-8" /><span>Frontend Engineering</span></div>
            <div className="flex items-center gap-4"><Workflow className="w-8 h-8" /><span>Platform Engineering</span></div>
          </div>
        </motion.section>

        {/* Tech Stack */}
        <section>
          <h2 className="text-3xl font-semibold mb-8">Full Stack Expertise</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="p-6 rounded-3xl border border-zinc-800 bg-zinc-950">
                <h3 className="text-xl font-bold capitalize mb-4">{category}</h3>
                <div className="flex flex-wrap gap-3">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-2 rounded-full bg-zinc-900 border border-zinc-700 text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section>
          <h2 className="text-3xl font-semibold mb-8">Professional Journey</h2>
          <div className="grid gap-6">
            {experience.map((job) => (
              <div key={job.company} className="bg-zinc-950 border border-zinc-800 rounded-3xl">
                <div className="p-8">
                  <h3 className="text-2xl font-bold">{job.company}</h3>
                  <p className="text-zinc-400 mt-1">{job.role} · {job.duration}</p>
                  <ul className="mt-6 space-y-3 text-zinc-300">
                    {job.highlights.map((point) => (
                      <li key={point}>• {point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* AI Work */}
        <section>
          <h2 className="text-3xl font-semibold mb-8">AI Infrastructure Highlights</h2>
          <div className="bg-zinc-950 border border-zinc-800 rounded-3xl">
            <div className="p-8">
              <h3 className="text-2xl font-bold">Enterprise AI Ingestion & Retrieval Platform</h3>
              <p className="mt-4 text-zinc-300 leading-relaxed">
                Built scalable ingestion pipelines for structured and unstructured data,
                enabling semantic chunking, embeddings generation, vector indexing, and
                context-aware retrieval powering enterprise knowledge systems and AI assistants.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}