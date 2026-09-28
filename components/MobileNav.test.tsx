import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { MobileNav } from "./MobileNav";

describe("MobileNav", () => {
  it("opens, exposes the primary navigation, and closes after selection", () => {
    render(<MobileNav />);

    const toggle = screen.getByRole("button", { name: "Open navigation" });
    const panel = document.getElementById("mobile-navigation-panel");

    expect(toggle).toHaveAttribute("aria-expanded", "false");
    expect(panel).toHaveAttribute("aria-hidden", "true");

    fireEvent.click(toggle);

    expect(screen.getByRole("button", { name: "Close navigation" })).toHaveAttribute(
      "aria-expanded",
      "true",
    );
    expect(panel).toHaveAttribute("aria-hidden", "false");

    const about = screen.getByText("About").closest("a");
    expect(about).toHaveAttribute("href", "#about");

    fireEvent.click(about!);

    expect(screen.getByRole("button", { name: "Open navigation" })).toHaveAttribute(
      "aria-expanded",
      "false",
    );
    expect(panel).toHaveAttribute("aria-hidden", "true");
  });

  it("does not render unrelated footer links inside the navigation drawer", () => {
    render(<MobileNav />);
    expect(screen.queryByText(/LinkedIn/)).not.toBeInTheDocument();
    expect(screen.queryByText(/Email/)).not.toBeInTheDocument();
  });
});
