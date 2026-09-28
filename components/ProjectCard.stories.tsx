import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { ProjectCard } from "./ProjectCard";

const meta = {
  title: "Portfolio/ProjectCard",
  component: ProjectCard,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  args: {
    name: "Zuub",
    category: "Healthcare · Frontend Engineering",
    description: "Responsive product engineering for healthcare workflows.",
    image: "/projects/zuub.png",
    href: "https://www.zuub.com/",
  },
} satisfies Meta<typeof ProjectCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Desktop: Story = {
  decorators: [
    (Story) => (
      <div style={{ width: 620 }}>
        <Story />
      </div>
    ),
  ],
};

export const Mobile: Story = {
  decorators: [
    (Story) => (
      <div style={{ width: 320 }}>
        <Story />
      </div>
    ),
  ],
};
