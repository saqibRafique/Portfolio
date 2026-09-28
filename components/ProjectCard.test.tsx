import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { ProjectCard } from "./ProjectCard";

describe("ProjectCard", () => {
  it("renders an accessible external project link", () => {
    render(
      <ProjectCard
        name="Example"
        category="Frontend"
        description="Example project"
        image="/projects/zuub.png"
        href="https://example.com"
      />,
    );

    const link = screen.getByRole("link", { name: /example/i });
    expect(link).toHaveAttribute("href", "https://example.com");
    expect(link).toHaveAttribute("target", "_blank");
    expect(screen.getByAltText("Example project preview")).toBeInTheDocument();
  });
});
