"use client";

import { useEffect, useState } from "react";

const links = [
  ["About", "#about"],
  ["Experience", "#experience"],
  ["Expertise", "#expertise"],
  ["Work", "#work"],
  ["Contact", "#contact"],
] as const;

export function MobileNav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("nav-open", open);
    return () => document.body.classList.remove("nav-open");
  }, [open]);

  return (
    <div className={`mobile-nav ${open ? "is-open" : ""}`}>
      <button
        className="menu-toggle"
        type="button"
        aria-label={open ? "Close navigation" : "Open navigation"}
        aria-expanded={open}
        aria-controls="mobile-navigation-panel"
        onClick={() => setOpen((value) => !value)}
      >
        <span />
        <span />
      </button>

      <div
        id="mobile-navigation-panel"
        className="mobile-nav-panel"
        aria-hidden={!open}
      >
        <div className="mobile-nav-inner">
          <span className="mobile-nav-kicker">Navigate</span>
          <nav aria-label="Mobile navigation">
            {links.map(([label, href], index) => (
              <a
                href={href}
                key={href}
                onClick={() => setOpen(false)}
                style={{ "--nav-index": index } as React.CSSProperties}
              >
                <span>{label}</span>
                <span aria-hidden="true">0{index + 1}</span>
              </a>
            ))}
          </nav>

          <div className="mobile-nav-footer">
            <a
              href="https://www.linkedin.com/in/muhammad-saqib-rafique/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn ↗
            </a>
            <a href="mailto:saqib_awan29@hotmail.com">Email ↗</a>
          </div>
        </div>
      </div>
    </div>
  );
}
