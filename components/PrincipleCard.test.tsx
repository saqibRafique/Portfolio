import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { PrincipleCard } from "./PrincipleCard";

describe("PrincipleCard", () => {
  it("renders its index, title, and description", () => {
    render(
      <PrincipleCard
        index={2}
        title="Quality first"
        text="Ship resilient software."
      />,
    );

    expect(screen.getByText("02")).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Quality first" })).toBeInTheDocument();
    expect(screen.getByText("Ship resilient software.")).toBeInTheDocument();
  });
});
