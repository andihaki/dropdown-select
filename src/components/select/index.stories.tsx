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
export const WithPortal: Story = {
  render: (args) => {
    // Create portal container in the render function
    const portalRoot =
      document.getElementById("portal-here") ||
      (() => {
        const div = document.createElement("div");
        div.id = "portal-here";
        document.body.append(div);
        return div;
      })();

    return (
      <>
        <Select {...args} portalTarget={portalRoot} />
        <div className="w-full h-7 bg-amber-400-500" />
        <div className="w-full h-7 bg-pink-500" id="portal-here">
          Portal Target
        </div>
        <div className="w-full h-7 bg-blue-500">
          <h2 className="z-1002">Z-Index 10000</h2>
        </div>
      </>
    );
  },
};
