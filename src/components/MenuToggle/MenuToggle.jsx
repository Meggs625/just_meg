import React from "react";
import styles from './MenuToggle.module.scss';
import { motion } from "framer-motion";

const Path = (props) => (
  <motion.path
    fill="transparent"
    strokeLinecap="round"
    strokeWidth="3"
    {...props}
  />
);

const transition = { duration: 0.33 };

export default function MenuToggle({ toggle, isOpen }) {
  return (
    <button className={styles.hamburger_menu} onClick={toggle}>
      <svg width="23" height="23" viewBox="0 0 23 23">
        <Path
          animate={isOpen ? "open" : "closed"}
          initial={false}
          variants={{
            closed: { d: "M 2 2.5 L 20 2.5", stroke: "rgb(172 221 216)" },
            open: { d: "M 3 16.5 L 17 2.5", stroke: "rgb(172 221 216)" },
          }}
          transition={transition}
        />
        <Path
          d="M 2 9.423 L 20 9.423"
          stroke="rgb(172 221 216)"
          animate={isOpen ? "open" : "closed"}
          initial={false}
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
          transition={transition}
        />
        <Path
          animate={isOpen ? "open" : "closed"}
          initial={false}
          variants={{
            closed: { d: "M 2 16.346 L 20 16.346", stroke: "rgb(172 221 216)" },
            open: { d: "M 3 2.5 L 17 16.346", stroke: "rgb(172 221 216)" },
          }}
          transition={transition}
        />
      </svg>
    </button>
  );
}