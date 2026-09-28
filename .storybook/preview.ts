import type { Preview } from "@storybook/nextjs-vite";
import "../app/globals.css";
import "../app/motion.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      test: "error",
    },
    backgrounds: {
      default: "portfolio",
      values: [
        { name: "portfolio", value: "#060914" },
        { name: "light", value: "#ffffff" },
      ],
    },
  },
};

export default preview;
