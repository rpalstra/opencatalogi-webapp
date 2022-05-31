import * as React from "react";
import * as styles from "./Tags.module.css";

export interface TagProps {
  tags: string[];
}

export const Tags: React.FC<TagProps> = ({ tags }) => {
  return (
    <div className={styles.tags}>
      {tags.map((tag, idx) => (
        <span key={idx} className={styles.tag}>
          {tag}
        </span>
      ))}
    </div>
  );
};