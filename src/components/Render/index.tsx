import React, { ReactNode } from "react";

type RenderComputedProps = {
  asElement: React.ElementType;
  asStyle?: string | (() => string);
  children?: ReactNode;
};

export default function RenderComputed({
  asElement,
  asStyle,
  children,
}: RenderComputedProps) {
  const computedStyle = typeof asStyle === "function" ? asStyle() : asStyle;
  return React.createElement(asElement, { className: computedStyle }, children);
}
