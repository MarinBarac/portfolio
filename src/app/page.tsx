import Image from "next/image";

const projects = [
  {
    num: "01",
    role: "CTO",
    roleStyle: "text-[#d93b25] border-[#d93b25]/30",
    period: "Feb 2024 – Present",
    title: "DeFi Dungeons",
    titleHover: "group-hover:text-[#d93b25]",
    href: "https://dungeons.game/",
    image: "/assets/projects/dd-cover.png",
    description:
      "Web3 RPG game built on Solana. Owned full system architecture across frontend, backend and blockchain integration. Designed NFT-based game mechanics with 10,000+ assets, optimized on-chain/off-chain interactions and integrated with Metaplex.",
    tags: ["Solana", "React", "TypeScript", "GSAP", "NestJS", "PostgreSQL"],
  },
  {
    num: "02",
    role: "Software Engineer",
    roleStyle: "text-blue-400 border-blue-400/30",
    period: "Feb 2023 – Feb 2024",
    title: "The Heist",
    titleHover: "group-hover:text-blue-300",
    href: "https://theheist.game/",
    image: "/assets/projects/heist-cover.webp",
    description:
      "Web3 game on Solana. Developed core features across frontend and backend, implemented NFT asset fetching, display and interaction systems, and optimized performance for large-scale NFT rendering and data handling.",
    tags: ["Solana", "React", "TypeScript", "NestJS"],
  },
  {
    num: "03",
    role: "Frontend",
    roleStyle: "text-green-400 border-green-400/30",
    period: "",
    title: "Degen.tips",
    titleHover: "group-hover:text-green-300",
    href: "https://www.degen.tips/",
    image: "/assets/projects/degen-tips.png",
    description:
      "Social tipping platform integrated with the Farcaster protocol on Base chain. Enables content creators to receive cryptocurrency tips across casts and threads, with over 1 million wallet holders.",
    tags: ["Next.js", "TypeScript", "GSAP"],
  },
  {
    num: "04",
    role: "Frontend",
    roleStyle: "text-amber-400 border-amber-400/30",
    period: "",
    title: "IronNode",
    titleHover: "group-hover:text-amber-300",
    href: "https://www.ironnode.io/",
    image: "/assets/projects/ironnode.webp",
    description:
      "Landing page for a Web3 security and auditing company specializing in Rust and EVM smart contract code review and penetration testing.",
    tags: ["Next.js", "TypeScript", "React"],
  },
  {
    num: "05",
    role: "Frontend",
    roleStyle: "text-cyan-400 border-cyan-400/30",
    period: "",
    title: "Afel",
    titleHover: "group-hover:text-cyan-300",
    href: "https://x.com/afelxyz",
    image: "/assets/projects/afel.webp",
    description:
      "Solana ecosystem project with NFT and utility token. Built a landing page with a points leaderboard system allowing users to register and earn airdrop allocations through community interaction and web3 activity.",
    tags: ["Solana", "Next.js", "TypeScript", "React"],
  },
];

const skills = [
  {
    category: "Web3",
    items: [
      "Solana",
      "Metaplex",
      "Token 2022",
      "NFT Systems",
      "Wallet Integrations",
    ],
  },
  {
    category: "Frontend",
    items: ["React.js", "Next.js", "TypeScript", "GSAP"],
  },
  {
    category: "Backend",
    items: ["Node.js", "NestJS", "PostgreSQL", "Prisma"],
  },
  {
    category: "Infra",
    items: ["Docker", "CI/CD", "AWS", "Vercel", "Grafana"],
  },
];

export default function Home() {
  const year = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-[#080808] text-white">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#080808]/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-mono text-sm tracking-widest text-zinc-300">
            MB
          </span>
          <div className="hidden sm:flex items-center gap-8">
            <a
              href="#work"
              className="text-sm text-zinc-500 hover:text-[#d93b25] transition-colors"
            >
              Work
            </a>
            <a
              href="#about"
              className="text-sm text-zinc-500 hover:text-[#d93b25] transition-colors"
            >
              About
            </a>
            <a
              href="#contact"
              className="text-sm text-zinc-500 hover:text-[#d93b25] transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="min-h-screen flex flex-col justify-center pt-16">
        <div className="max-w-7xl mx-auto px-6 w-full py-24">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-center">
            {/* Left */}
            <div className="lg:col-span-3">
              <div className="flex items-center gap-4 mb-8">
                <p className="font-mono text-xs text-[#d93b25] tracking-widest uppercase">
                  Senior Full-Stack Engineer
                </p>
                <span className="text-zinc-700 font-mono text-xs">·</span>
                <a
                  href="https://solbound.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs text-zinc-500 hover:text-[#d93b25] transition-colors tracking-widest uppercase"
                >
                  Solbound ↗
                </a>
              </div>
              <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.9] mb-8">
                MARIN
                <br />
                BARAC
              </h1>
              <p className="text-lg text-zinc-400 leading-relaxed mb-10 max-w-lg">
                Specializing in blockchain-based gaming systems and scalable web
                applications on Solana.
              </p>
              <div className="flex flex-wrap items-center gap-6">
                <a
                  href="#work"
                  className="group inline-flex items-center gap-2 px-6 py-3 transition-colors relative"
                >
                  <div className="absolute inset-0 w-full h-full btn-gradient opacity-100 group-hover:opacity-0 transition-opacity duration-300" />
                  <div className="absolute inset-0 w-full h-full btn-gradient-hover opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <p className="text-white text-sm font-medium relative z-10">
                    View Work
                  </p>
                </a>
                <a
                  href="https://github.com/MarinBarac"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-sm text-zinc-500 hover:text-[#d93b25] transition-colors"
                >
                  GitHub ↗
                </a>
                <a
                  href="https://linkedin.com/in/marin-barac/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-sm text-zinc-500 hover:text-[#d93b25] transition-colors"
                >
                  LinkedIn ↗
                </a>
              </div>
            </div>

            {/* Right — photo */}
            <div className="lg:col-span-2 hidden lg:flex justify-end">
              <div className="relative w-72 xl:w-80 aspect-3/4 border border-zinc-800 overflow-hidden">
                <Image
                  src="/assets/marin-solbound.webp"
                  alt="Marin Barac"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work */}
      <section id="work" className="py-24 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-baseline gap-6 mb-16">
            <span className="font-mono text-xs text-zinc-600">01</span>
            <h2 className="text-3xl font-bold tracking-tight">Selected Work</h2>
          </div>

          <div className="divide-y divide-zinc-900">
            {projects.map((project) => (
              <a
                key={project.num}
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start justify-between gap-8 py-12"
              >
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="font-mono text-xs text-zinc-600">
                      {project.num}
                    </span>
                    <span
                      className={`font-mono text-xs border px-2 py-0.5 ${project.roleStyle}`}
                    >
                      {project.role}
                    </span>
                    {project.period && (
                      <span className="font-mono text-xs text-zinc-600">
                        {project.period}
                      </span>
                    )}
                  </div>
                  <h3
                    className={`text-2xl lg:text-3xl font-bold mb-3 transition-colors ${project.titleHover}`}
                  >
                    {project.title}
                  </h3>
                  <p className="text-zinc-400 max-w-2xl leading-relaxed mb-5">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-xs text-zinc-600 border border-zinc-800 px-2 py-1"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="hidden lg:flex items-start gap-6 shrink-0">
                  <div className="relative w-48 xl:w-60 aspect-video border border-zinc-800 overflow-hidden opacity-40 group-hover:opacity-100 transition-opacity duration-500">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                  <div className="text-zinc-700 group-hover:text-white transition-colors pt-1 shrink-0">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M7 17L17 7M17 7H7M17 7V17" />
                    </svg>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-baseline gap-6 mb-16">
            <span className="font-mono text-xs text-zinc-600">02</span>
            <h2 className="text-3xl font-bold tracking-tight">About</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-5 text-zinc-400 leading-relaxed">
              <p>
                Senior Full-Stack Engineer with strong expertise in building
                scalable, high-performance web applications using React,
                Next.js, TypeScript and Nest.js. Proven track record in
                architecting end-to-end systems, optimizing frontend performance
                and delivering data-intensive applications.
              </p>
              <p>
                Experienced in leading development teams, designing system
                architecture and managing full product lifecycles, from backend
                services and database design to frontend UX and deployment.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-10">
              {skills.map(({ category, items }) => (
                <div key={category}>
                  <h3 className="font-mono text-xs text-zinc-500 uppercase tracking-widest mb-4">
                    {category}
                  </h3>
                  <ul className="space-y-1.5">
                    {items.map((item) => (
                      <li key={item} className="text-sm text-zinc-400">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-baseline gap-6 mb-16">
            <span className="font-mono text-xs text-zinc-600">03</span>
            <h2 className="text-3xl font-bold tracking-tight">Contact</h2>
          </div>

          <div className="flex flex-col sm:flex-row items-start justify-between gap-12">
            <div>
              <p className="text-zinc-400 mb-8 max-w-md leading-relaxed">
                Open to new opportunities, collaborations, and interesting Web3
                projects. Drop me a line.
              </p>
              <a
                href="mailto:marin@solbound.dev"
                className="text-2xl lg:text-4xl font-bold hover:text-[#d93b25] transition-colors"
              >
                marin@solbound.dev
              </a>
            </div>

            <div className="flex flex-col gap-4 sm:pt-16">
              <a
                href="https://linkedin.com/in/marin-barac/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-sm text-zinc-500 hover:text-[#d93b25] transition-colors"
              >
                LinkedIn ↗
              </a>
              <a
                href="https://github.com/MarinBarac"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-sm text-zinc-500 hover:text-[#d93b25] transition-colors"
              >
                GitHub ↗
              </a>
              <a
                href="mailto:marin@solbound.dev"
                className="font-mono text-sm text-zinc-500 hover:text-[#d93b25] transition-colors"
              >
                Email ↗
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <span className="font-mono text-xs text-zinc-600">
            © {year} Marin Barac
          </span>
          <span className="font-mono text-xs text-zinc-600">
            Senior Full-Stack Engineer
          </span>
        </div>
      </footer>
    </div>
  );
}
