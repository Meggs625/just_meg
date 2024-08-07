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

export default function WorkHistory() {
  const [selectedCompanyDetails, setSelectedCompanyDetails] = useState(null);
  const [currentTab, setCurrentTab] = useState(
    WORK_HISTORY_SUBTAB_OPTIONS.COMPANY
  );
  console.log(currentTab, "current");

  return (
    <section className={styles.work_history_wrapper}>
      <Title variant="1">Work History</Title>
      <section className={styles.btn_container}>
        {workHistoryBtn.map((history) => (
          <Button
            key={history.id}
            onClick={() => setSelectedCompanyDetails(history)}
            variant="company_logos"
          >
            <img src={history.img} className={styles.logo_img} />
          </Button>
        ))}
      </section>

      {selectedCompanyDetails && (
        <seciont className={styles.details_container}>
          <section>
            {Object.entries(WORK_HISTORY_SUBTAB_OPTIONS).map(([key, label]) => {
              return (
                <button
                  key={key}
                  onClick={() =>
                    setCurrentTab(WORK_HISTORY_SUBTAB_OPTIONS[key])
                  }
                >
                  {label}
                </button>
              );
            })}
          </section>
          <section>
            {currentTab === WORK_HISTORY_SUBTAB_OPTIONS.COMPANY && (
              <MoreCompanyDetails
                otherDetails={selectedCompanyDetails?.otherDetails}
              />
            )}
            {currentTab === WORK_HISTORY_SUBTAB_OPTIONS.MAIN_PROJECT && (
              <MainProjectCard
                projectDetails={selectedCompanyDetails?.mainProject}
              />
            )}
            {currentTab === WORK_HISTORY_SUBTAB_OPTIONS.EXPERIENCE && (
              <MoreExperienceCard
                otherExperience={selectedCompanyDetails?.otherExperiences}
              />
            )}
            {currentTab === WORK_HISTORY_SUBTAB_OPTIONS.MORE_DETAILS && (
              <MainDetailsCard
                mainDetails={selectedCompanyDetails?.mainDetails}
              />
            )}
          </section>
        </seciont>
      )}
    </section>
  );
}
