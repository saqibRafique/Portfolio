import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { SkillPill } from "./SkillPill";

describe("SkillPill", () => {
  it("renders the provided skill", () => {
    render(<SkillPill label="Next.js" />);
    expect(screen.getByText("Next.js")).toBeInTheDocument();
  });
});
