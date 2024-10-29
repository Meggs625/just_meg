import React from "react";
import styles from "./VerticalTimeLine.module.scss";
import intradoLogo from "../../assets/intrado_corp_logo.jpeg";
import sedaiLogo from "../../assets/sedai_logo.jpeg";
import tofwerkLogo from "../../assets/Tofwerk.jpeg";
import workHistoryData from "../../dataFiles/workHistoryDetails";

const previousCompanies = [
  { title: "tofwerk", logo: tofwerkLogo },
  {
    title: "sedai",
    logo: sedaiLogo,
  },
  {
    title: "intrado",
    logo: intradoLogo,
  },
];

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
      {previousCompanies.map(({ title, logo }, idx) => (
        <button
          key={idx}
          className={`${styles.logo_btn} ${styles[title]}`}
          onClick={() => handleCompanySelection(title)}
        >
          <img src={logo} />
        </button>
      ))}
      <p className={styles.floating_tofwerk_date}>2022</p>
      <p className={styles.floating_intrado_date}>2021</p>
      <div className={styles.elapse_time} />
      <p>2013</p>
    </div>
  );
}
