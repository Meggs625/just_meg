import React, { useState } from "react";
import styles from "./WorkHistory.module.scss";
import Title from "../../components/Title/Title";
import VerticalTimeLine from "../../components/VerticalTimeLine/VerticalTimeLine";
import CompanyDetailsDisplay from "../../components/CompanyDetailsDisplay/CompanyDetailsDisplay";
import { motion } from "framer-motion";

export default function WorkHistory() {
  const [selectedCompanyDetails, setSelectedCompanyDetails] = useState(null);
  const [detailsOpen, setDetailsOpen] = useState(false);

  const variants = {
    open: {
      opacity: 1,
      scale: 1,
    },
    closed: {
      opacity: 0,
      scale: 0,
    },
  };

  const displayCompanyHistory = (companyDetails) => {
    setSelectedCompanyDetails(companyDetails);
    setDetailsOpen(true);
  };

  const clearSelectedCompanyDetails = () => {
    setSelectedCompanyDetails(null);
    setDetailsOpen(false);
  };

  return (
    <section className={styles.work_history_wrapper}>
      <Title variant="1">Work History</Title>
      <section className={styles.content_wrapper}>
        <section
          className={`${styles.timeline_container} ${
            selectedCompanyDetails ? styles.timeline_split_view : ""
          }`}
        >
          <VerticalTimeLine
            displayCompanyHistory={displayCompanyHistory}
            selectedCompanyDetails={selectedCompanyDetails}
          />
        </section>
        {selectedCompanyDetails && (
          <motion.section
            className={styles.company_details_container}
            initial={{ opacity: 0 }}
            animate={detailsOpen ? "open" : "closed"}
            variants={variants}
            transition={{ duration: 3 }}
          >
            <CompanyDetailsDisplay
              selectedCompanyDetails={selectedCompanyDetails}
              clearSelectedCompanyDetails={clearSelectedCompanyDetails}
            />
          </motion.section>
        )}
      </section>
    </section>
  );
}
