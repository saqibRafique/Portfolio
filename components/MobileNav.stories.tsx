import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { MobileNav } from "./MobileNav";

const meta = {
  title: "Portfolio/MobileNav",
  component: MobileNav,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof MobileNav>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
