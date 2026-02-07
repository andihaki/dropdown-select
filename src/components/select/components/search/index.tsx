import cx from "../../style";
import { clearIcon } from "../..";
import type { SearchProps } from "./types";

const Search = ({ icon, toggleShow, search, onChange }: SearchProps) => {
  return (
    <div className={cx.InputWrapper}>
      <span>{icon}</span>
      <input
        className={cx.Input}
        onBlur={toggleShow}
        value={search}
        onChange={(e) => {
          onChange(e.target.value);
        }}
      />
      <span
        className={`cursor-pointer ${search ? "inline" : "hidden"}`}
        onClick={(event) => {
          event.stopPropagation();
          onChange("");
        }}
      >
        {clearIcon}
      </span>
    </div>
  );
};

export default Search;
