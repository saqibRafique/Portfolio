import { MobileNav } from "@/components/MobileNav";
import { PrincipleCard } from "@/components/PrincipleCard";
import { ProfileCard } from "@/components/ProfileCard";
import { ProjectCard } from "@/components/ProjectCard";
import { SkillPill } from "@/components/SkillPill";


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

const experience = [
  {
    company: "Arbisoft",
    role: "Principal Software Engineer",
    period: "2021 — Present",
    summary:
      "Leading and contributing to modern web products with a focus on frontend architecture, React, Next.js, TypeScript, quality engineering, and cross-functional delivery.",
  },
  {
    company: "Emblem Technologies",
    role: "Software Engineer",
    period: "2020 — 2021",
    summary:
      "Built production frontend experiences and strengthened reusable implementation patterns across client-facing web applications.",
  },
  {
    company: "PixyFlux",
    role: "Software Engineer",
    period: "2019 — 2020",
    summary:
      "Worked across frontend development and product implementation, building responsive interfaces and strengthening core web engineering fundamentals.",
  },
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
              <small>Principal Software Engineer</small>
            </span>
          </a>
          <nav className="nav-links" aria-label="Primary navigation">
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a href="#expertise">Expertise</a>
            <a href="#work">Work</a>
            <a href="#contact">Contact</a>
          </nav>
          <div className="nav-actions">
            <a className="button button-small" href="#contact">
              Let&apos;s talk
            </a>
            <MobileNav />
          </div>
        </div>
      </header>

      <section className="hero shell" id="top">
        <div className="hero-copy">
          <div className="eyebrow">
            <span className="status-dot" />
            Principal engineering for modern product teams
          </div>
          <h1>
            I design and lead
            <span> frontend systems that scale with the product.</span>
          </h1>
          <p className="hero-lead">
            I&apos;m Muhammad Saqib Rafique, a Principal Software Engineer with 6+ years of experience building and evolving production platforms across React, Next.js, Angular, TypeScript, automation, and frontend architecture.
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
          <div className="hero-metrics" aria-label="Engineering highlights">
            <div>
              <strong>6+ years</strong>
              <span>Production engineering</span>
            </div>
            <div>
              <strong>Principal-level</strong>
              <span>Architecture & technical leadership</span>
            </div>
            <div>
              <strong>End-to-end quality</strong>
              <span>Testing, DX & delivery</span>
            </div>
          </div>
        </div>

        <ProfileCard />
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

      <section className="section section-dark" id="experience">
        <div className="shell">
          <div className="section-heading experience-heading">
            <span className="kicker">Experience</span>
            <h2>Building software across product teams and engineering roles.</h2>
          </div>
          <div className="experience-list">
            {experience.map((item) => (
              <article className="experience-row" key={item.company}>
                <div>
                  <span className="experience-period">{item.period}</span>
                  <h3>{item.company}</h3>
                </div>
                <div>
                  <strong>{item.role}</strong>
                  <p>{item.summary}</p>
                </div>
              </article>
            ))}
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
              <SkillPill label={skill} key={skill} />
            ))}
          </div>

          <div className="principle-grid">
            {principles.map((principle, index) => (
              <PrincipleCard
                key={principle.title}
                index={index + 1}
                title={principle.title}
                text={principle.text}
              />
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
            <ProjectCard key={project.name} {...project} />
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
