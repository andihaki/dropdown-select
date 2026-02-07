import cx from "./style";
import HighlightedLabel from "../highlighted-label";
import type { DropdownProps } from "./types";

const Dropdown = (props: DropdownProps) => {
  const { search, options, selected, onClick, multiple } = props;

  return (
    <ul data-testid="dropdown-menu" className={cx.Dropdown}>
      {options
        .filter((item) =>
          search
            ? item.label
                .toLocaleLowerCase()
                .includes(search.toLocaleLowerCase())
            : true,
        )
        .map((item) => (
          <li
            key={item.value}
            className={
              selected.some((val) => val === item.value)
                ? `${cx.Item} bg-gray-100`
                : cx.Item
            }
            onClick={() => onClick(item.value, multiple, item)}
          >
            <HighlightedLabel text={item.label} search={search} />
          </li>
        ))}
    </ul>
  );
};

export default Dropdown;
