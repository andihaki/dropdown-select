import type { Meta, StoryObj } from "@storybook/react-vite";

import Select from "./index";

const mockOptions = [
  {
    label: "Indonesia",
    value: "indonesia",
  },
  {
    label: "Syams",
    value: "syams",
  },
];

const meta = {
  component: Select,
  args: {
    options: mockOptions,
    placeholder: "Please select...",
    // @todo: proper icon, font-awesome / others
    prefixIcon: "🔍",
    suffixIcon: "🔽",
  },
} satisfies Meta<typeof Select>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
