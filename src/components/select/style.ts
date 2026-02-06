const Root = "border-none bg-gray-100";
const Outlined =
  "flex justify-between items-center cursor-pointer w-full px-2 border-gray-100 border"; // @todo: w-full => dropdown should follow root width instead

const Wrapper = "mt-1";

const InputWrapper = "flex gap-1 items-center border-gray-100 border px-2 mt-1";
const Input = "h-8 grow border-none";

const Dropdown = "border-gray-100 border";
const Item = "cursor-pointer select-none p-2 hover:bg-gray-200";

const cx = {
  Root,
  Outlined,
  Wrapper,
  InputWrapper,
  Input,
  Dropdown,
  Item,
};

export default cx;
