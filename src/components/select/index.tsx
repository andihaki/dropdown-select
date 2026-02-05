import type { SelectProps } from "./types";
import cx from "./style";
import useSelectModel from "./useSelectModel";

const Select = ({
  options,
  style,
  styles,
  className,
  placeholder,
  prefixIcon,
  suffixIcon,
}: SelectProps) => {
  const { show, toggleShow, selected, setSelected } = useSelectModel();

  return (
    <>
      <div
        style={styles?.root ?? style}
        className={cx.Root}
        onClick={toggleShow}
        // @todo: outside click to close dropdown
      >
        <span className="grow">{placeholder}</span>
        <span className="justify-end">{suffixIcon}</span>
      </div>
      <div
        style={{
          display: show ? "block" : "none",
          ...(styles?.dropdown ?? {}),
        }}
      >
        <div className={cx.Wrapper}>
          <span>{prefixIcon}</span>
          <input className={cx.Input} onBlur={toggleShow} />
        </div>
        <ul
          className={cx.Dropdown} // @todo: add clsx for handle classname props
        >
          {options.map((item) => (
            <li>{item.label}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Select;
