import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { PrincipleCard } from "./PrincipleCard";

const meta = {
  title: "Portfolio/PrincipleCard",
  component: PrincipleCard,
  tags: ["autodocs"],
  args: {
    index: 1,
    title: "Architecture that stays maintainable",
    text: "Clear boundaries and pragmatic patterns keep products easier to evolve.",
  },
} satisfies Meta<typeof PrincipleCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
