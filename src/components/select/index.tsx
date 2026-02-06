import type { SelectProps } from "./types";
import useSelectModel from "./useSelectModel";
import HighlightedLabel from "./components/highlighted-label";
import Selected from "./components/selected";
import cx from "./style";

export const clearIcon = "⊗";

const Select = ({
  options,
  style,
  styles,
  className,
  placeholder,
  searchIcon,
  suffixIcon,
  withSearch,
  multiple = true,
  outlined = true,
  pupupRender,
}: SelectProps) => {
  const { show, toggleShow, selected, handleOnSelect, handleOnClear, inputs } =
    useSelectModel();
  const isEmpty = !Boolean(selected.length);

  const rootClass = className ? `${cx.Outlined} ${className}` : cx.Outlined;
  const suffixClass = show
    ? "rotate-180 transition-transform"
    : "transition-transform";

  return (
    <>
      <div
        style={styles?.root ?? style}
        className={outlined ? `${rootClass} ${cx.Root}` : rootClass} // @todo: add clsx when needed
        onClick={isEmpty ? toggleShow : () => {}}
        // @todo: outside click to close dropdown
      >
        <Selected
          placeholder={placeholder}
          data={selected}
          onClick={(value) => handleOnSelect(value, multiple)}
        />
        <span
          className={isEmpty ? "hidden" : "grow w-full min-h-8"}
          onClick={toggleShow}
        />
        <span className="justify-end group relative select-none">
          {isEmpty ? (
            <div className={suffixClass}>{suffixIcon}</div>
          ) : (
            <>
              <div className={`${suffixClass} group-hover:hidden`}>
                {suffixIcon}
              </div>
              <span
                className="hidden group-hover:inline"
                onClick={handleOnClear}
              >
                {clearIcon}
              </span>
            </>
          )}
        </span>
      </div>
      <div
        style={{
          display: show ? "block" : "none",
        }}
        className={cx.Wrapper}
      >
        {withSearch && (
          <div className={cx.InputWrapper}>
            <span>{searchIcon}</span>
            <input
              className={cx.Input}
              onBlur={toggleShow}
              value={inputs.search}
              onChange={(e) => {
                inputs.setSearch(e.target.value);
              }}
            />
            {inputs.search && (
              <span
                className="cursor-pointer"
                onClick={(event) => {
                  event.stopPropagation();
                  inputs.setSearch("");
                }}
              >
                {clearIcon}
              </span>
            )}
          </div>
        )}
        {pupupRender ?? (
          <ul className={cx.Dropdown} style={styles?.dropdown}>
            {options
              .filter((item) =>
                inputs.search
                  ? item.label
                      .toLocaleLowerCase()
                      .includes(inputs.search.toLocaleLowerCase())
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
                  onClick={() => handleOnSelect(item.value, multiple, item)}
                >
                  <HighlightedLabel text={item.label} search={inputs.search} />
                </li>
              ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default Select;
