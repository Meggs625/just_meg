import React, { useState } from 'react';
import styles from './WorkHistory.module.scss';
import workHistoryBtn from '../../dataFiles/workHistoryDetails';
import Button from '../../components/Button/Button';
import Title from '../../components/Title/Title';
import MainDetailsCard from '../../components/MainDetailsCard/MainDetailsCard';
import MainProjectCard from '../../components/MainProjectCard/MainProjectCard';
import MoreCompanyDetails from '../../components/MoreCompanyDetailsCard/MoreCompanyDetailsCard';
import MoreExperienceCard from '../../components/MoreExperienceCard/MoreExperienceCard';

export default function WorkHistory() {

    const [selectedCompanyDetails, setSelectedCompanyDetails] = useState(null);

    return (<section className={styles.work_history_wrapper}>
        <Title variant="1">Work History</Title>
        <section className={styles.btn_container}> 
            {workHistoryBtn.map((history) => (
                <Button key={history.id} onClick={() => setSelectedCompanyDetails(history)} variant="company_logos"><img src={history.img} className={styles.logo_img}/></Button>
            ))}
        </section>
            {selectedCompanyDetails && (
                <section className={styles.detail_container}> 
                    <MainDetailsCard mainDetails={selectedCompanyDetails?.mainDetails}/>
                    <MainProjectCard projectDetails={selectedCompanyDetails?.mainProject} />
                    <MoreCompanyDetails otherDetails={selectedCompanyDetails?.otherDetails} />
                    <MoreExperienceCard otherExperience={selectedCompanyDetails?.otherExperiences} />


                </section>
            )}
    </section>)
}