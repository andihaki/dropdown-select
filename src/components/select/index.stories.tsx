import type { Meta, StoryObj } from "@storybook/react-vite";

import Select from "./index";
import ChevronDown from "../../icons/chevron-down";
import MagnifyingGlass from "../../icons/magnifying-glass";

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
    searchIcon: <MagnifyingGlass />,
    suffixIcon: <ChevronDown />,
    withSearch: true,
    outlined: false,
  },
} satisfies Meta<typeof Select>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
