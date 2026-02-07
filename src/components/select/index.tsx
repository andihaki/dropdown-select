import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

import MagnifyingGlass from "../../icons/magnifying-glass";
import ChevronDown from "../../icons/chevron-down";
import Dropdown from "./components/dropdown";
import Selected from "./components/selected";
import Search from "./components/search";
import type { SelectProps } from "./types";
import useSelectModel from "./useSelectModel";
import cx from "./style";

export const clearIcon = "⊗";

const Select = ({
  options,
  style,
  styles,
  className,
  placeholder = "placeholder",
  searchIcon = <MagnifyingGlass />,
  suffixIcon = <ChevronDown />,
  withSearch,
  multiple = true,
  outlined,
  popupRender,
  portalTarget,
}: SelectProps) => {
  const { show, toggleShow, selected, handleOnSelect, handleOnClear, inputs } =
    useSelectModel();
  const isEmpty = !Boolean(selected.length);

  const triggerRef = useRef<HTMLDivElement>(null);
  const [dropdownPosition, setDropdownPosition] = useState({
    top: 0,
    left: 0,
    width: "fit-content",
  });

  useEffect(() => {
    if (show && triggerRef.current) {
      const rect = (portalTarget ?? triggerRef.current).getBoundingClientRect();
      setDropdownPosition({
        top: rect.bottom,
        left: portalTarget ? rect.x : 0,
        width: rect.width ? `${rect.width}px` : "fit-content",
      });
    }

    if (show) {
      const handleClickOutside = (event: MouseEvent) => {
        const target = event.target as Node;

        if (triggerRef.current && !triggerRef.current.contains(target)) {
          toggleShow();
        }
      };

      document.addEventListener("mousedown", handleClickOutside);

      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }
  }, [show]);

  const rootClass = className ? `${cx.Outlined} ${className}` : cx.Outlined;
  const suffixClass = show
    ? "rotate-180 transition-transform"
    : "transition-transform";

  const dropdownElement = (
    <div
      style={{
        position: "absolute",
        top: `${dropdownPosition.top}px`,
        left: `${dropdownPosition.left}px`,
        width: dropdownPosition.width,
        zIndex: 9999,
        display: show ? "block" : "none",
        ...styles?.dropdown,
      }}
      className={cx.Wrapper}
    >
      <>
        {withSearch && (
          <Search
            icon={searchIcon}
            search={inputs.search}
            onChange={inputs.setSearch}
            toggleShow={toggleShow}
          />
        )}
        {popupRender ?? (
          <Dropdown
            onClick={handleOnSelect}
            search={inputs.search}
            multiple={multiple}
            options={options}
            selected={selected}
          />
        )}
      </>
    </div>
  );

  return (
    <div ref={triggerRef} className="relative">
      <div
        style={styles?.root ?? style}
        className={outlined ? `${rootClass} ${cx.Root}` : rootClass} // @todo: add clsx when needed
        onClick={isEmpty ? toggleShow : () => {}}
      >
        <Selected
          placeholder={placeholder}
          data={selected}
          onClick={(value) => handleOnSelect(value, multiple)}
        />
        <span
          className={isEmpty ? "hidden" : "grow w-full min-h-8 min-w-2"}
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
      {portalTarget
        ? createPortal(dropdownElement, portalTarget)
        : dropdownElement}
    </div>
  );
};

export default Select;
