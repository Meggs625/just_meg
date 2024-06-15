import React, { useRef } from "react";
import styles from './ViewContainer.module.scss';
import { useScroll, useTransform } from "framer-motion";

export default function ViewContainer({children}) {

 function useParallax(value, distance) {
        return useTransform(value, [0, 1], [-distance, distance]);
      }
    const elmRef = useRef(null);
    const {scrollYProgress} = useScroll({target: elmRef});
    const y = useParallax(scrollYProgress, 300);

    return (
        <section className={styles.wrapper} ref={elmRef}>{children}</section>
    )
}