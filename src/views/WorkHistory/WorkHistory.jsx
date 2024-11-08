import React, { useState } from "react";
import styles from "./WorkHistory.module.scss";
import Title from "../../components/Title/Title";
import VerticalTimeLine from "../../components/VerticalTimeLine/VerticalTimeLine";
import CompanyDetailsDisplay from "../../components/CompanyDetailsDisplay/CompanyDetailsDisplay";
import { AnimatePresence, motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";

export default function WorkHistory() {
  const [selectedCompanyDetails, setSelectedCompanyDetails] = useState(null);
  const [detailsOpen, setDetailsOpen] = useState(false);

  const isSmallScreen = useMediaQuery({query: `(max-width: 670px)`});
  const timeLineVisible = !isSmallScreen || (isSmallScreen && !detailsOpen);

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
        <AnimatePresence>
        {timeLineVisible && <motion.section
          className={`${styles.timeline_container} ${
            selectedCompanyDetails ? styles.timeline_split_view : ""
          }`}
          initial={{
            opacity: 1,
            x: 25
          }}
          animate={{
            opactiy: 0, 
            x: 0,
          }}
          exit={{
            opactiy: 0,
            x: 0 
          }}
        >
          <VerticalTimeLine
            displayCompanyHistory={displayCompanyHistory}
            selectedCompanyDetails={selectedCompanyDetails}
          />
        </motion.section>}
        </AnimatePresence>
        <AnimatePresence>
        {selectedCompanyDetails && (
          <motion.section
            className={styles.company_details_container}
            initial={{
              opacity: 1,
              x: 25
            }}
            animate={{
              opactiy: 0, 
              x: 0,
            }}
            exit={{
              opactiy: 0,
              x: 0 
            }}
          >
            <CompanyDetailsDisplay
              selectedCompanyDetails={selectedCompanyDetails}
              clearSelectedCompanyDetails={clearSelectedCompanyDetails}
            />
          </motion.section>
        )}
        </AnimatePresence>
      </section>
    </section>
  );
}
