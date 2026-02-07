import { clearIcon } from "../..";
import type { SelectValue, SpanEventType } from "../../types";
import cx from "./style";

interface Props {
  placeholder?: string;
  data: SelectValue[];
  onClick: (value: SelectValue) => void;
}

const Selected = ({ placeholder, data, onClick }: Props) => {
  const handleOnClear = (event: SpanEventType, item: SelectValue) => {
    event.preventDefault();
    onClick(item);
  };

  if (!data.length) {
    return (
      <span
        className={`${cx.Empty} text-gray-400 select-none cursor-pointer mr-2`}
      >
        {placeholder}
      </span>
    );
  }
  return (
    <ul className={cx.Wrapper}>
      {data.map((item) => (
        <li key={item} className={cx.Selected}>
          {item}
          <span
            className="cursor-pointer"
            onClick={(event) => handleOnClear(event, item)}
          >
            {clearIcon}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default Selected;
