import Image from "next/image";

const skills = [
  "React",
  "Next.js",
  "Angular",
  "TypeScript",
  "JavaScript",
  "Node.js",
  "HTML & CSS",
  "Tailwind CSS",
  "Design Systems",
  "Testing",
  "Playwright",
  "WebdriverIO",
  "Storybook",
  "Docker",
  "GitHub",
  "Jira",
];

const projects = [
  {
    name: "Zuub",
    category: "Healthcare · Frontend Engineering",
    description:
      "Contributed to a dental revenue-cycle management platform, building responsive Angular experiences for insurance verification and patient workflows.",
    image: "/projects/zuub.png",
    href: "https://www.zuub.com/",
  },
  {
    name: "Kayak",
    category: "Travel · Test Automation",
    description:
      "Delivered a Slack-integrated reporting workflow and strengthened end-to-end coverage, helping reduce repetitive QA work and improve release confidence.",
    image: "/projects/kayak.png",
    href: "https://www.kayak.com/",
  },
  {
    name: "Best Buy Mall",
    category: "Commerce · Frontend Engineering",
    description:
      "Built responsive interface components and interactive experiences with an emphasis on performance and usability across device sizes.",
    image: "/projects/bbm.png",
    href: "https://business.bestbuymall.pk/",
  },
  {
    name: "Think & Code",
    category: "Web Platform · Angular",
    description:
      "Built the company website from the ground up with a modular Angular architecture, responsive UI, production optimization, and Firebase deployment.",
    image: "/projects/think-and-code.png",
    href: "https://thinkandcode.co",
  },
  {
    name: "SmartAdminWork",
    category: "SaaS · Product Engineering",
    description:
      "Developed a scalable asset and maintenance management frontend with reusable components and a user-focused application structure.",
    image: "/projects/smart-admin-work.png",
    href: "https://smartadminwork.com",
  },
  {
    name: "Mono Inu Dashboard",
    category: "Fintech · Data UI",
    description:
      "Created a responsive dashboard for monitoring cryptocurrency data with a focus on clear visualization, performance, and interaction quality.",
    image: "/projects/mono-inu.png",
    href: "https://mono-inu-dashboard.web.app/dashboard",
  },
];

const principles = [
  {
    title: "Architecture that stays maintainable",
    text: "I favor clear boundaries, reusable primitives, strong typing, and pragmatic patterns that make large frontends easier to evolve.",
  },
  {
    title: "Product quality beyond the happy path",
    text: "Accessibility, performance, testing, observability, and resilient error handling are part of the implementation—not cleanup work.",
  },
  {
    title: "Engineering that helps teams move",
    text: "I care about code review quality, developer experience, mentoring, and reducing friction so teams can ship confidently.",
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <div className="shell nav-wrap">
          <a className="brand" href="#top" aria-label="Back to top">
            <span className="brand-mark">SR</span>
            <span className="brand-copy">
              <strong>Muhammad Saqib Rafique</strong>
              <small>Senior Software Engineer</small>
            </span>
          </a>
          <nav className="nav-links" aria-label="Primary navigation">
            <a href="#about">About</a>
            <a href="#expertise">Expertise</a>
            <a href="#work">Work</a>
            <a href="#contact">Contact</a>
          </nav>
          <a className="button button-small" href="#contact">
            Let&apos;s talk
          </a>
        </div>
      </header>

      <section className="hero shell" id="top">
        <div className="hero-copy">
          <div className="eyebrow">
            <span className="status-dot" />
            Building dependable products and frontend systems
          </div>
          <h1>
            Software engineering with
            <span> clarity, scale, and product impact.</span>
          </h1>
          <p className="hero-lead">
            I&apos;m Muhammad Saqib Rafique, a Senior Software Engineer focused on
            modern frontend architecture, React, Next.js, Angular, TypeScript,
            automation, and high-quality user experiences.
          </p>
          <div className="hero-actions">
            <a className="button" href="#work">
              Explore selected work
            </a>
            <a
              className="text-link"
              href="https://github.com/saqibRafique"
              target="_blank"
              rel="noreferrer"
            >
              GitHub <span aria-hidden="true">↗</span>
            </a>
            <a
              className="text-link"
              href="https://www.linkedin.com/in/muhammad-saqib-rafique/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn <span aria-hidden="true">↗</span>
            </a>
          </div>
          <div className="hero-metrics" aria-label="Engineering focus">
            <div>
              <strong>Frontend</strong>
              <span>Architecture & UX</span>
            </div>
            <div>
              <strong>Full-stack</strong>
              <span>Integration & APIs</span>
            </div>
            <div>
              <strong>Quality</strong>
              <span>Testing & automation</span>
            </div>
          </div>
        </div>

        <div className="portrait-wrap" aria-label="Profile photo">
          <div className="portrait-glow" />
          <div className="portrait-card">
            <Image
              src="/profile.webp"
              alt="Muhammad Saqib Rafique"
              width={720}
              height={720}
              priority
              className="portrait"
            />
          </div>
          <div className="floating-note note-one">
            <span>Current focus</span>
            <strong>Scalable frontend systems</strong>
          </div>
          <div className="floating-note note-two">
            <span>Approach</span>
            <strong>Clean · Tested · Accessible</strong>
          </div>
        </div>
      </section>

      <section className="section shell" id="about">
        <div className="section-heading split-heading">
          <div>
            <span className="kicker">About</span>
            <h2>Engineering with a product mindset.</h2>
          </div>
          <div className="about-copy">
            <p>
              I build modern, responsive applications with a strong emphasis on
              maintainability and user experience. My core work spans React,
              Next.js, Angular, TypeScript, Node.js integration, design systems,
              testing, and frontend architecture.
            </p>
            <p>
              Beyond delivery, I help improve engineering workflows, review and
              simplify complex implementations, mentor developers, and promote
              practices that keep teams productive as products grow.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-muted" id="expertise">
        <div className="shell">
          <div className="section-heading">
            <span className="kicker">Expertise</span>
            <h2>A modern toolkit, grounded in engineering fundamentals.</h2>
            <p>
              Technologies change. The focus stays consistent: choose the right
              abstractions, keep complexity visible, and ship software that is
              straightforward to operate and extend.
            </p>
          </div>

          <div className="skill-grid">
            {skills.map((skill) => (
              <span className="skill-pill" key={skill}>
                {skill}
              </span>
            ))}
          </div>

          <div className="principle-grid">
            {principles.map((principle, index) => (
              <article className="principle-card" key={principle.title}>
                <span className="card-index">0{index + 1}</span>
                <h3>{principle.title}</h3>
                <p>{principle.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section shell" id="work">
        <div className="section-heading work-heading">
          <div>
            <span className="kicker">Selected work</span>
            <h2>Products, platforms, and automation.</h2>
          </div>
          <p>
            A selection of projects spanning product frontend engineering,
            automation, SaaS, and data-heavy interfaces.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <a
              className="project-card"
              href={project.href}
              target="_blank"
              rel="noreferrer"
              key={project.name}
            >
              <div className="project-image-wrap">
                <Image
                  src={project.image}
                  alt={`${project.name} project preview`}
                  width={1200}
                  height={720}
                  className="project-image"
                />
              </div>
              <div className="project-copy">
                <span>{project.category}</span>
                <div className="project-title-row">
                  <h3>{project.name}</h3>
                  <span aria-hidden="true">↗</span>
                </div>
                <p>{project.description}</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="section shell">
        <div className="cta-panel" id="contact">
          <span className="kicker">Contact</span>
          <h2>Have a product, platform, or engineering problem worth solving?</h2>
          <p>
            I&apos;m always interested in thoughtful engineering conversations,
            strong product teams, and challenging software problems.
          </p>
          <div className="cta-actions">
            <a className="button button-light" href="mailto:saqib_awan29@hotmail.com">
              Email me
            </a>
            <a
              className="text-link text-link-light"
              href="https://www.linkedin.com/in/muhammad-saqib-rafique/"
              target="_blank"
              rel="noreferrer"
            >
              Connect on LinkedIn <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </section>

      <footer className="footer shell">
        <p>© {new Date().getFullYear()} Muhammad Saqib Rafique.</p>
        <div>
          <a href="https://github.com/saqibRafique" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a
            href="https://stackoverflow.com/users/7346838/malik-saqib-awan"
            target="_blank"
            rel="noreferrer"
          >
            Stack Overflow
          </a>
          <a
            href="https://www.linkedin.com/in/muhammad-saqib-rafique/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </footer>
    </main>
  );
}
