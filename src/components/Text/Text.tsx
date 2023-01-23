import React, { ReactNode } from "react";

import cn from "classnames";

import styles from "./Text.modules.pcss";

type TextTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "div" | "p" | "span";

export const TypeText = {
  headline: "h1",
  title: "h2",
  subtitleBold: "h3",
  subtitleMedium: "h3",
  bodyRegular: "p",
  bodyMedium: "p",
  bodySemiBold: "p",
  lineRegular: "p",
  lineMedium: "p",
  lineSemiBold: "p",
  labelRegular: "span",
  labelMedium: "span",
  labelSemiBold: "span",
  overline: "span",
} as const;

export type KeyText = keyof typeof TypeText;

export type TextProps = {
  type?: KeyText;
  className?: string;
  tag?: TextTag;
  children: ReactNode;
};

const Text: React.FC<TextProps> = ({
  children,
  type = "bodyRegular",
  className,
  tag,
}) => {
  return React.createElement(
    tag || TypeText[type],
    {
      className: cn(styles[type], className),
    },
    children
  );
};

export default Text;
