import React, { useState } from "react";
import styles from "./WorkHistory.module.scss";
import workHistoryBtn from "../../dataFiles/workHistoryDetails";
import Button from "../../components/Button/Button";
import Title from "../../components/Title/Title";
import MainDetailsCard from "../../components/MainDetailsCard/MainDetailsCard";
import MainProjectCard from "../../components/MainProjectCard/MainProjectCard";
import MoreCompanyDetails from "../../components/MoreCompanyDetailsCard/MoreCompanyDetailsCard";
import MoreExperienceCard from "../../components/MoreExperienceCard/MoreExperienceCard";
import WORK_HISTORY_SUBTAB_OPTIONS from "../../enums/workHistorySubTabOptions";
import VerticalTimeLine from "../../components/VerticalTimeLine/VerticalTimeLine";

export default function WorkHistory() {
  const [selectedCompanyDetails, setSelectedCompanyDetails] = useState(null);
  const [currentTab, setCurrentTab] = useState(
    WORK_HISTORY_SUBTAB_OPTIONS.COMPANY
  );
  const [isSplitView, setIsSplitView] = useState(false);

  const displayCompanyHistory = (companyDetails) => {
    setSelectedCompanyDetails(companyDetails);
    setIsSplitView(true);
  };

  return (
    <section className={styles.work_history_wrapper}>
      <Title variant="1">Work History</Title>
      <section className={styles.content_wrapper}>
        <VerticalTimeLine displayCompanyHistory={displayCompanyHistory} />
        {isSplitView && <section></section>}
      </section>
    </section>
    // <section className={styles.work_history_wrapper}>
    //   <Title variant="1">Work History</Title>
    //   <section className={styles.btn_container}>
    //     {workHistoryBtn.map((history) => (
    //       <Button
    //         key={history.id}
    //         onClick={() => setSelectedCompanyDetails(history)}
    //         variant={
    //           selectedCompanyDetails?.id === history.id
    //             ? "active_company_logo"
    //             : "company_logos"
    //         }
    //       >
    //         <img src={history.img} className={styles.logo_img} />
    //       </Button>
    //     ))}
    //   </section>

    //   {selectedCompanyDetails && (
    //     <section className={styles.details_container}>
    //       <section className={styles.tab_container}>
    //         {Object.entries(WORK_HISTORY_SUBTAB_OPTIONS).map(([key, label]) => {
    //           return (
    //             <button
    //               key={key}
    //               className={`${styles.sub_tab} ${
    //                 currentTab === label ? styles.active : ""
    //               }`}
    //               onClick={() =>
    //                 setCurrentTab(WORK_HISTORY_SUBTAB_OPTIONS[key])
    //               }
    //             >
    //               {label}
    //             </button>
    //           );
    //         })}
    //       </section>
    //       <section className={styles.card_section}>
    //         {currentTab === WORK_HISTORY_SUBTAB_OPTIONS.COMPANY && (
    //           <MainDetailsCard
    //             mainDetails={selectedCompanyDetails?.mainDetails}
    //           />
    //         )}
    //         {currentTab === WORK_HISTORY_SUBTAB_OPTIONS.MAIN_PROJECT && (
    //           <MainProjectCard
    //             projectDetails={selectedCompanyDetails?.mainProject}
    //           />
    //         )}
    //         {currentTab === WORK_HISTORY_SUBTAB_OPTIONS.EXPERIENCE && (
    //           <MoreExperienceCard
    //             otherExperience={selectedCompanyDetails?.otherExperiences}
    //           />
    //         )}
    //         {currentTab === WORK_HISTORY_SUBTAB_OPTIONS.MORE_DETAILS && (
    //           <MoreCompanyDetails
    //             otherDetails={selectedCompanyDetails?.otherDetails}
    //           />
    //         )}
    //       </section>
    //     </section>
    //   )}
    // </section>
  );
}
