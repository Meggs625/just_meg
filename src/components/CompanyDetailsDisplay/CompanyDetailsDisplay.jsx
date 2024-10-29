import React, { useMemo } from "react";
import styles from "./CompanyDetailsDisplay.module.scss";

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
        <button onClick={() => clearSelectedCompanyDetails()}>X</button>
      </header>
      <section>
        <section>
          <p>{`${mainDetails.startDate} - ${mainDetails.endDate}`}</p>
          <p>{mainDetails.jobTitle}</p>
          <p>{otherDetails.workEnvironment}</p>
          <p>{otherDetails.tickets}</p>
          <p>{formattedTechStack}</p>
        </section>
        <section>
          {otherExperiences.map((experience, idx) => (
            <p key={idx}>{`* ${experience}`}</p>
          ))}
        </section>
        <section>
          <p>{mainProject}</p>
        </section>
      </section>
    </section>
  );
}
