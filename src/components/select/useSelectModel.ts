import { useState } from "react";

import type { SelectOption, SelectValue, SpanEventType } from "./types";

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
    _option?: SelectOption,
  ) => {
    setSelected((prev) => {
      if (!prev.length || !multiple) return [value];
      const isSelected = prev.some((val) => val === value);

      return isSelected
        ? prev.filter((val) => val !== value)
        : [...prev, value];
    });
  };

  const handleOnClear = (event: SpanEventType) => {
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
