import { useState } from "react";

import type { SelectOption, SelectValue } from "./types";

const useSelectModel = () => {
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState<SelectValue[]>([]);
  const [show, setShow] = useState(false);
  const toggleShow = () => {
    setShow((prev) => !prev);
  };

  const handleOnSelect = (
    value: SelectValue,
    multiple?: boolean,
    _?: SelectOption,
  ) => {
    setSelected((prev) => {
      if (!prev.length || !multiple) return [value];

      return prev.some((val) => val === value)
        ? prev.filter((val) => val !== value)
        : [...prev, value];
    });
  };

  const handleOnClear = (
    event: React.MouseEvent<HTMLSpanElement, MouseEvent>,
  ) => {
    event.stopPropagation();
    setSelected([]);
  };

  return {
    show,
    setShow,
    toggleShow,
    selected,
    setSelected,
    handleOnSelect,
    handleOnClear,
    inputs: {
      search,
      setSearch,
    },
  };
};

export default useSelectModel;
