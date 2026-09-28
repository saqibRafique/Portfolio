import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { MobileNav } from "./MobileNav";

describe("MobileNav", () => {
  it("opens with the hamburger button and closes after navigation", () => {
    render(<MobileNav />);

    const toggle = screen.getByRole("button", { name: "Open navigation" });
    expect(toggle).toHaveAttribute("aria-expanded", "false");

    fireEvent.click(toggle);
    expect(screen.getByRole("button", { name: "Close navigation" })).toHaveAttribute(
      "aria-expanded",
      "true",
    );

    const about = screen.getByText("About").closest("a");
    expect(about).toHaveAttribute("href", "#about");

    fireEvent.click(about!);
    expect(screen.getByRole("button", { name: "Open navigation" })).toHaveAttribute(
      "aria-expanded",
      "false",
    );
  });
});
