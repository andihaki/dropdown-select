import type { SelectOption, SelectValue } from "../../types";

export interface DropdownProps {
  options: SelectOption[];
  multiple?: boolean;
  search?: string;
  selected: SelectValue[];
  onClick: (
    value: SelectValue,
    multiple?: boolean,
    _option?: SelectOption,
  ) => void;
}
