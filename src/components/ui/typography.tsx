import { cn } from "@/lib/utils";
import React from "react";

export const H1: React.FC<React.HTMLAttributes<HTMLHeadingElement>> = ({
  className,
  children,
  ...rest
}) => {
  return (
    <h1
      className={cn(
        "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
        className,
      )}
      {...rest}
    >
      {children}
    </h1>
  );
};

export const H2: React.FC<React.HTMLAttributes<HTMLHeadingElement>> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <h2
      className={cn(
        "scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0",
        className,
      )}
      {...rest}
    >
      {children}
    </h2>
  );
};

export const H3: React.FC<React.HTMLAttributes<HTMLHeadingElement>> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <h3
      className={cn(
        "scroll-m-20 text-2xl font-semibold tracking-tight",
        className,
      )}
      {...rest}
    >
      {children}
    </h3>
  );
};

export const H4: React.FC<React.HTMLAttributes<HTMLHeadingElement>> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <h4
      className={cn(
        "scroll-m-20 text-xl font-semibold tracking-tight",
        className,
      )}
      {...rest}
    >
      {children}
    </h4>
  );
};
