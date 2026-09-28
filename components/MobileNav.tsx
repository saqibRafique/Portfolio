export function MobileNav() {
  return (
    <details className="mobile-nav">
      <summary aria-label="Open navigation">Menu</summary>
      <nav aria-label="Mobile navigation">
        <a href="#about">About</a>
        <a href="#experience">Experience</a>
        <a href="#expertise">Expertise</a>
        <a href="#work">Work</a>
        <a href="#contact">Contact</a>
      </nav>
    </details>
  );
}
