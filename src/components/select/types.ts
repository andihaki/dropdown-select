import type { CSSProperties, ReactNode } from "react";

export type SpanEventType = React.MouseEvent<HTMLSpanElement, MouseEvent>;

export type SelectValue = string | number;
export type SelectOption = { label: string; value: SelectValue };

export interface SelectProps {
  options: SelectOption[];
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
