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
  args: {
    // portalTarget: document.getElementById("portal-here"),
    portalTarget: document.body,
  },
  // render: (args) => (
  //   <>
  //     <div id="portal-here" />
  //     <Select {...args} />
  //   </>
  // ),

  // decorators: [
  //   (Story) => (
  //     <>
  //       <div id="portal-here" />
  //       <Story />
  //     </>
  //   ),
  // ],

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
        <div style={{ background: "blue", height: 100, width: "100%" }} />
        <div
          style={{ background: "pink", height: 100, width: "100%" }}
          id="portal-here"
        />
      </>
    );
  },
};
