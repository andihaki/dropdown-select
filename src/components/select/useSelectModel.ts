import { useState } from "react";

const useSelectModel = () => {
  const [selected, setSelected] = useState([]);
  const [show, setShow] = useState(false);
  const toggleShow = () => {
    setShow((prev) => !prev);
  };

  return {
    show,
    setShow,
    toggleShow,
    selected,
    setSelected,
  };
};

export default useSelectModel;
