import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { MobileNav } from "./MobileNav";

describe("MobileNav", () => {
  it("contains navigation links for every primary section", () => {
    render(<MobileNav />);

    expect(screen.getByText("About").closest("a")).toHaveAttribute("href", "#about");
    expect(screen.getByText("Experience").closest("a")).toHaveAttribute("href", "#experience");
    expect(screen.getByText("Expertise").closest("a")).toHaveAttribute("href", "#expertise");
    expect(screen.getByText("Work").closest("a")).toHaveAttribute("href", "#work");
    expect(screen.getByText("Contact").closest("a")).toHaveAttribute("href", "#contact");
  });
});
