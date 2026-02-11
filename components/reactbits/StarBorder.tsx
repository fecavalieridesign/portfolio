"use client";

import { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

type StarBorderProps<T extends ElementType = "div"> = ComponentPropsWithoutRef<T> & {
  as?: T;
  color?: string;
  speed?: string;
  className?: string;
  children?: ReactNode;
};

export default function StarBorder<T extends ElementType = "div">({
  as,
  className = "",
  color = "white",
  speed = "6s",
  children,
  ...rest
}: StarBorderProps<T>) {
  const Component = as || "div";

  return (
    <Component
      className={`relative inline-block rounded-2xl overflow-hidden ${className}`}
      style={{ padding: "1px 0", ...rest.style }}
      {...rest}
    >
      <div
        className="absolute w-[300%] h-1/2 opacity-70 bottom-[-12px] right-[-250%] rounded-[50%] z-0"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 10%)`,
          animation: `star-movement-bottom ${speed} linear infinite alternate`,
        }}
      />
      <div
        className="absolute w-[300%] h-1/2 opacity-70 top-[-12px] left-[-250%] rounded-[50%] z-0"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 10%)`,
          animation: `star-movement-top ${speed} linear infinite alternate`,
        }}
      />
      <div className="relative z-10 border border-white/5 bg-surface/80 backdrop-blur-sm rounded-2xl">
        {children}
      </div>
    </Component>
  );
}
