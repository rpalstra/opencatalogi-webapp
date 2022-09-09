import * as React from "react";
import * as styles from "./BadgeCounter.module.css";
import clsx from "clsx";

interface BadgeCounterProps {
  number: number;
  children: React.ReactNode;
  layoutClassName?: string;
}

export const BadgeCounter: React.FC<BadgeCounterProps> = ({ number, children, layoutClassName }) => (
  <div className={styles.content}>
    {children}
    {number < 99 && <span className={clsx([layoutClassName && layoutClassName], styles.badge)}>{number}</span>}
    {number > 99 && (
      <span className={clsx([layoutClassName && layoutClassName], styles.badge, styles.maxNumber)}>99+</span>
    )}
  </div>
);
