import React, { useState } from "react";
import styles from "./WorkHistory.module.scss";
import Title from "../../components/Title/Title";
import VerticalTimeLine from "../../components/VerticalTimeLine/VerticalTimeLine";
import CompanyDetailsDisplay from "../../components/CompanyDetailsDisplay/CompanyDetailsDisplay";

export default function WorkHistory() {
  const [selectedCompanyDetails, setSelectedCompanyDetails] = useState(null);

  const displayCompanyHistory = (companyDetails) => {
    setSelectedCompanyDetails(companyDetails);
  };

  const clearSelectedCompanyDetails = () => {
    setSelectedCompanyDetails(null);
  };

  return (
    <section className={styles.work_history_wrapper}>
      <Title variant="1">Work History</Title>
      <section
        className={`${styles.content_wrapper} ${
          selectedCompanyDetails ? styles.content_split_view : ""
        }`}
      >
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
          <section className={styles.company_details_container}>
            <CompanyDetailsDisplay
              selectedCompanyDetails={selectedCompanyDetails}
              clearSelectedCompanyDetails={clearSelectedCompanyDetails}
            />
          </section>
        )}
      </section>
    </section>
  );
}
