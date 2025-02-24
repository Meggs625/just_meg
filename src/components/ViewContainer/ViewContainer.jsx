import React, { forwardRef } from "react";
import styles from './ViewContainer.module.scss';

export default forwardRef(function ViewContainer({children}, ref) {


    return (
        <section className={styles.wrapper} ref={ref}>{children}</section>
    )
});
