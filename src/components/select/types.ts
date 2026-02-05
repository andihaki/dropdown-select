import type { CSSProperties, ReactNode } from "react";

export interface SelectProps {
  options: { label: string; value: string | number }[];
  placeholder?: string;
  withSearch?: boolean;
  multiple?: boolean;
  outlined?: boolean;
  style?: CSSProperties;
  styles?: {
    root?: CSSProperties;
    dropdown?: CSSProperties;
  };
  className?: string;
  suffixIcon?: string | ReactNode;
  prefixIcon?: string | ReactNode;
}
