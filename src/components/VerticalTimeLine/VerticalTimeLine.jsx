import React from "react";
import styles from "./VerticalTimeLine.module.scss";
import workHistoryData from "../../dataFiles/workHistoryDetails";

export default function VerticalTimeLine({
  displayCompanyHistory,
  selectedCompanyDetails,
}) {
  const handleCompanySelection = (companyTitle) => {
    const foundCompanyDetails = workHistoryData.find(
      (company) => company.company === companyTitle
    );

    displayCompanyHistory(foundCompanyDetails);
  };
  return (
    <div className={styles.timeline_wrapper}>
      <p>2024</p>
      <div className={styles.vertical_bar} />
      {workHistoryData.map(({ company, img, id }) => (
        <button
          key={id}
          className={`${styles.logo_btn} ${styles[company]} ${
            selectedCompanyDetails?.id === id ? styles.active : ""
          }`}
          onClick={() => handleCompanySelection(company)}
        >
          <img src={img} />
        </button>
      ))}
      <p className={styles.floating_tofwerk_date}>2022</p>
      <p className={styles.floating_intrado_date}>2021</p>
      <div className={styles.elapse_time} />
      <p>2013</p>
    </div>
  );
}
