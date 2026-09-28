import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { SkillPill } from "./SkillPill";

const meta = {
  title: "Portfolio/SkillPill",
  component: SkillPill,
  tags: ["autodocs"],
  args: {
    label: "Next.js",
  },
} satisfies Meta<typeof SkillPill>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
