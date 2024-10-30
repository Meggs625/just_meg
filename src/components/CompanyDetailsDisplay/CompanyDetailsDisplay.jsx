import React, { useMemo } from "react";
import styles from "./CompanyDetailsDisplay.module.scss";
import Title from "../Title/Title";

export default function CompanyDetailsDisplay({
  selectedCompanyDetails,
  clearSelectedCompanyDetails,
}) {
  const { mainDetails, otherDetails, otherExperiences, mainProject } =
    selectedCompanyDetails;

  const formattedTechStack = useMemo(() => {
    if (mainDetails.techStack.length) {
      return mainDetails.techStack.join(", ");
    }
  }, [selectedCompanyDetails]);

  const quickDetails = {};
  return (
    <section className={styles.company_details_wrapper}>
      <header className={styles.company_details_header}>
        <h1 className={styles.company_title}>{mainDetails.company}</h1>
        <button
          className={styles.close_btn}
          onClick={() => clearSelectedCompanyDetails()}
        >
          X
        </button>
      </header>
      <section>
        <section className={styles.initial_details_container}>
          <p>{`${mainDetails.jobTitle} / ${mainDetails.startDate} - ${mainDetails.endDate}`}</p>
          <p>{otherDetails.workEnvironment}</p>
          <p>{formattedTechStack}</p>
          <p>{otherDetails.tickets}</p>
        </section>
        <section className={styles.resume_points_container}>
          <Title variant={5}>Resume Points</Title>
          {otherExperiences.map((experience, idx) => (
            <p key={idx}>{`* ${experience}`}</p>
          ))}
        </section>
        <section>
          <Title variant={5}>Main Project</Title>
          <p>{mainProject}</p>
        </section>
      </section>
    </section>
  );
}
