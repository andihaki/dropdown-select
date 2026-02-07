import type { ReactNode } from "react";

export interface SearchProps {
  icon?: string | ReactNode;
  search?: string;
  onChange: (param: string) => void;
  toggleShow: () => void;
}
