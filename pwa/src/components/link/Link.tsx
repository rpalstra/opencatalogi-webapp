import clsx from "clsx";
import type { GatsbyLinkProps } from "gatsby";
import { Link as GatsbyLink } from "gatsby";
import React from "react";
import type { LinkProps as DesignSystemLinkProps } from "@utrecht/component-library-react/dist/Link";
import { Link as DesignSystemLink } from "@utrecht/component-library-react/dist/css-module";

type GatsbyLinkSubset<T> = Pick<GatsbyLinkProps<T>, "onClick" | "state" | "to">;

export interface LinkProps<T> extends Partial<GatsbyLinkSubset<T>>, DesignSystemLinkProps {
  href?: string;
}

export const Link = <T,>({
  className,
  boxContent,
  external,
  href,
  onClick,
  placeholder,
  state,
  rel,
  to,
  ...restProps
}: LinkProps<T>): JSX.Element => {
  // TODO: `boxContent` and `placeholder` are not supported for `GatsbyLink`.
  return typeof to === "string" ? (
    <GatsbyLink
      {...restProps}
      to={to}
      state={state}
      onClick={onClick}
      className={clsx("utrecht-link", className)}
      rel={external ? `external noopener noreferrer ${rel}` : rel}
    />
  ) : (
    <DesignSystemLink
      boxContent={boxContent}
      external={external}
      href={href}
      onClick={onClick}
      placeholder={placeholder}
      rel={rel}
      {...restProps}
    />
  );
};
